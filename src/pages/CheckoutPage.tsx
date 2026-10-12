import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CartItem } from '../types';
import { ProductImage } from '../components/ProductImage';
import { itemPrice as getItemPrice, cartSubtotal, shippingFor, formatAud } from '../lib/pricing';
import { 
  Check, AlertCircle, ArrowLeft, ArrowRight, Send, Truck, Lock, ShoppingBag, CreditCard
} from 'lucide-react';

interface CheckoutPageProps {
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  onOrderSuccess
}) => {
  const [searchParams] = useSearchParams();
  const returnStatus = searchParams.get('status');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: 'NSW',
    postcode: '',
    production: '',
    paymentMethod: 'card' as 'card' | 'direct_invoice',
    agreeCompliance: false
  });

  const [submitting, setSubmitting] = useState(false);
  // 'card' = returned from a successful Stripe payment; 'invoice' = invoice request sent
  const [orderComplete, setOrderComplete] = useState<false | 'card' | 'invoice'>(
    returnStatus === 'success' ? 'card' : false
  );
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState('');

  const [formError, setFormError] = useState<string | null>(
    returnStatus === 'cancelled' ? 'Card payment was cancelled. Your order bag is still saved, so you can try again.' : null
  );

  // Clear the cart once Stripe redirects back after a successful payment.
  useEffect(() => {
    if (returnStatus === 'success') onOrderSuccess();
  }, [returnStatus]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Order Form & Checkout | Australia Prop Money';
  }, []);

  const subtotal = cartSubtotal(items);
  const shippingFee = shippingFor(subtotal);
  const finalTotal = subtotal + shippingFee;

  const startCardCheckout = async () => {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: items.map((i) => ({ productId: i.product.id, variantId: i.selectedVariant?.id, quantity: i.quantity })),
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          suburb: formData.suburb,
          state: formData.state,
          postcode: formData.postcode,
          production: formData.production
        }
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) {
      throw new Error(data.error || 'We could not start the card payment. Please try again.');
    }
    window.location.assign(data.url);
  };

  const sendInvoiceRequest = async (orderNum: string) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey) {
      throw new Error('Invoice ordering is not available right now. Please pay by card or contact us.');
    }
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Invoice Request ${orderNum} - Australia Prop Money`,
        from_name: formData.fullName,
        order_id: orderNum,
        customer_email: formData.email,
        customer_phone: formData.phone,
        production: formData.production || '-',
        shipping_address: `${formData.address}, ${formData.suburb} ${formData.state} ${formData.postcode}, Australia`,
        payment_method: 'Production invoice (EFT)',
        subtotal: formatAud(subtotal),
        shipping: shippingFee === 0 ? 'Free' : formatAud(shippingFee),
        total: formatAud(finalTotal),
        items: items.map(i => `${i.product.name} [${i.selectedVariant?.name || 'Standard'}] (Qty: ${i.quantity}) - ${formatAud(getItemPrice(i) * i.quantity)}`).join('\n')
      })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === false) {
      throw new Error('We could not send your invoice request. Please try again or contact us.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.agreeCompliance) {
      setFormError('Please tick the compliance confirmation below confirming these prop notes will be used strictly for film, television, theatre, or authorized training.');
      return;
    }

    setSubmitting(true);
    try {
      if (formData.paymentMethod === 'card') {
        await startCardCheckout(); // redirects to Stripe on success
        return;
      }
      const orderNum = `APM-${Math.floor(100000 + Math.random() * 900000)}`;
      await sendInvoiceRequest(orderNum);
      setGeneratedOrderNumber(orderNum);
      setOrderComplete('invoice');
      onOrderSuccess();
    } catch (err) {
      setFormError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="py-20 px-4 text-center bg-[#0B132B] min-h-screen text-slate-200">
        <div className="max-w-md mx-auto space-y-4">
          <ShoppingBag className="w-12 h-12 text-slate-500 mx-auto" />
          <h1 className="font-display font-bold text-2xl text-white">Your Order Bag is Empty</h1>
          <p className="text-xs text-slate-400">
            Please add Australian prop money stacks to your bag before proceeding to checkout.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <Link to="/shop" className="hover:text-amber-400 transition-colors">Shop</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">Order Form Checkout</span>
        </nav>

        {orderComplete ? (
          /* Confirmation Screen */
          <div className="bg-[#0E162F] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                {orderComplete === 'card' ? 'Payment Successful' : 'Invoice Request Received'}
              </span>
              <h1 className="font-display text-3xl font-extrabold text-white">
                {orderComplete === 'card' ? 'Thank you for your order' : `Order #${generatedOrderNumber}`}
              </h1>
              <p className="text-sm text-slate-300">
                {orderComplete === 'card'
                  ? 'Your payment went through. A receipt is on its way to your email, and we will send tracking details once your order ships.'
                  : `Thank you, ${formData.fullName}. We will email a tax invoice to ${formData.email}. Your order ships once payment is received.`}
              </p>
            </div>

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Continue Browsing Shop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Main 2-Column Checkout Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Details */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Step 1: Customer Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center">1</span>
                    Australian Shipping Address
                  </h2>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Tracked Shipping
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Liam Campbell"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address (for tracking & receipt) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="production@studio.com.au"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Mobile Phone (for AusPost SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Level 2, 45 Studio Lane"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:col-span-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        City / Suburb *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="Surry Hills"
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        State *
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="NSW">NSW</option>
                        <option value="VIC">VIC</option>
                        <option value="QLD">QLD</option>
                        <option value="WA">WA</option>
                        <option value="SA">SA</option>
                        <option value="TAS">TAS</option>
                        <option value="ACT">ACT</option>
                        <option value="NT">NT</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="2010"
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Production / Company Name (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.production}
                    onChange={(e) => setFormData({ ...formData, production: e.target.value })}
                    placeholder="e.g. Harbour Lights Pictures - Episode 4"
                    className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

              {/* Step 2: Payment Method */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center">2</span>
                    Payment Method
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {([
                    { id: 'card', title: 'Credit / Debit Card', desc: 'Visa, Mastercard & Amex via secure Stripe checkout.' },
                    { id: 'direct_invoice', title: 'Production Invoice', desc: 'We email a tax invoice payable by EFT. Ships once paid.' }
                  ] as const).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: m.id })}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        formData.paymentMethod === m.id
                          ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                          : 'border-slate-800 bg-[#121B38] text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {m.id === 'card' && <CreditCard className="w-4 h-4 text-amber-400" />}
                        <span className="font-semibold text-xs text-white">{m.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-400">{m.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Legal Compliance Agreement */}
              <div className="pt-2 border-t border-slate-800 space-y-4">
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeCompliance}
                    onChange={(e) => {
                      setFormData({ ...formData, agreeCompliance: e.target.checked });
                      if (e.target.checked) setFormError(null);
                    }}
                    className="mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                  />
                  <span>
                    <strong>Legal Compliance Acknowledgement:</strong> I confirm that these prop banknotes are purchased solely for film, television, theatre, photography, or training purposes. I acknowledge that passing or attempting to spend prop reproduction currency as genuine money is a Commonwealth offence under the <em>Crimes (Currency) Act 1981</em>.
                  </span>
                </label>
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {submitting ? (
                    <span>{formData.paymentMethod === 'card' ? 'Redirecting to payment...' : 'Sending request...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>
                      {formData.paymentMethod === 'card'
                        ? `Continue to Secure Payment (${formatAud(finalTotal)})`
                        : `Request Invoice (${formatAud(finalTotal)})`}
                    </span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Right Column: Order Summary & Item List */}
            <div className="lg:col-span-5 bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-24">
              <h2 className="font-display font-bold text-lg text-white border-b border-slate-800 pb-3">
                Order Summary ({items.reduce((a, b) => a + b.quantity, 0)} Items)
              </h2>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => {
                  const itemPrice = getItemPrice(item);
                  const variantKey = item.selectedVariant?.id || 'std';
                  return (
                    <div key={`${item.product.id}-${variantKey}`} className="flex gap-3 items-center py-2 border-b border-slate-800/80 last:border-b-0">
                      <div className="w-16 h-12 rounded bg-[#0A0F22] overflow-hidden shrink-0">
                        <ProductImage product={item.product} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-white truncate">{item.product.name}</h4>
                        {item.selectedVariant && (
                          <p className="text-[11px] text-amber-300 font-medium truncate">{item.selectedVariant.name}</p>
                        )}
                        <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                      </div>
                      <span className="font-display font-bold text-xs text-white tabular-nums">
                        {formatAud(itemPrice * item.quantity)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Price Calculation Box */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-mono text-white font-bold">{formatAud(subtotal)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Tracked Shipping:</span>
                  <span className="font-semibold">{shippingFee === 0 ? 'FREE' : formatAud(shippingFee)}</span>
                </div>
                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline font-bold text-white text-base">
                  <span>Total Due:</span>
                  <span className="font-display font-extrabold text-2xl text-amber-300 tabular-nums">
                    {formatAud(finalTotal)}
                  </span>
                </div>
              </div>

              {/* Security note */}
              <div className="p-3 rounded-lg bg-[#121B38] border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST Included · Card payments processed securely by Stripe</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
