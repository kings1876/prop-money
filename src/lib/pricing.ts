import { CartItem } from '../types';

// Store-wide shipping rule (AUD). Shared by the cart, checkout and /api/checkout.
export const SHIPPING_FLAT_AUD = 12.95;
export const FREE_SHIPPING_THRESHOLD_AUD = 150;

export const itemPrice = (item: CartItem) => item.selectedVariant?.price ?? item.product.price;

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + itemPrice(item) * item.quantity, 0);

export const shippingFor = (subtotal: number) =>
  subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD_AUD ? 0 : SHIPPING_FLAT_AUD;

export const formatAud = (amount: number) =>
  `$${amount.toFixed(Number.isInteger(amount) ? 0 : 2)} AUD`;

// Flat tiered price for a quantity of prop notes — same rate for every denomination.
// Mirrors the variant prices in src/data/products.ts.
export const priceForNotes = (notes: number) => {
  const perNote = notes <= 100 ? 0.4 : notes <= 200 ? 0.35 : notes <= 500 ? 0.3 : notes <= 1000 ? 0.25 : notes <= 2500 ? 0.2 : 0.15;
  return Math.round(notes * perNote) - 1;
};
