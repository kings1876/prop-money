import process from 'node:process';
import Stripe from 'stripe';
import { PRODUCTS } from '../src/data/products.js';
import { shippingFor } from '../src/lib/pricing.js';

// POST /api/checkout — creates a Stripe Checkout Session for the cart.
// Prices are always looked up server-side from the catalogue; the client only
// sends product/variant ids and quantities.

interface CheckoutRequest {
  items: { productId: string; variantId?: string; quantity: number }[];
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    production?: string;
  };
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const MAX_QTY_PER_LINE = 50;

export async function POST(request: Request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return json(503, { error: 'Card payments are not set up yet. Please choose Production Invoice or contact us.' });
  }

  let body: CheckoutRequest;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  if (!Array.isArray(body?.items) || body.items.length === 0 || !body.customer?.email) {
    return json(400, { error: 'Your order bag is empty or missing details.' });
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotal = 0;
  for (const item of body.items) {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    const variant = product?.variants.find((v) => v.id === item.variantId) ?? product?.variants.find((v) => v.isDefault);
    const quantity = Math.floor(Number(item.quantity));
    if (!product || !variant || !(quantity >= 1 && quantity <= MAX_QTY_PER_LINE)) {
      return json(400, { error: 'One of the items in your bag is no longer available. Please refresh and try again.' });
    }
    subtotal += variant.price * quantity;
    lineItems.push({
      quantity,
      price_data: {
        currency: 'aud',
        unit_amount: Math.round(variant.price * 100),
        tax_behavior: 'inclusive',
        product_data: {
          name: product.name,
          description: `${variant.name} · one-sided, 75% scale prop notes · NOT LEGAL TENDER`,
          metadata: { productId: product.id, variantId: variant.id }
        }
      }
    });
  }

  const c = body.customer;
  const shipping = shippingFor(subtotal);
  const origin = request.headers.get('origin') ?? new URL(request.url).origin;
  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      customer_email: c.email,
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            display_name: shipping === 0 ? 'Free tracked shipping' : 'Tracked shipping',
            fixed_amount: { amount: Math.round(shipping * 100), currency: 'aud' },
            tax_behavior: 'inclusive'
          }
        }
      ],
      metadata: {
        customer_name: c.fullName?.slice(0, 200) ?? '',
        phone: c.phone?.slice(0, 50) ?? '',
        shipping_address: `${c.address}, ${c.suburb} ${c.state} ${c.postcode}, Australia`.slice(0, 500),
        production: c.production?.slice(0, 200) ?? ''
      },
      success_url: `${origin}/checkout?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?status=cancelled`
    });
    return json(200, { url: session.url });
  } catch (err) {
    console.error('Stripe checkout error', err);
    return json(502, { error: 'We could not start the card payment. Please try again or choose Production Invoice.' });
  }
}
