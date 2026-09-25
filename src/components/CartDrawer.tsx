import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, ShoppingBag, AlertCircle, Check, Lock } from 'lucide-react';
import { BanknoteVisual } from './BanknoteVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  onRemoveItem: (productId: string, variantId?: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  if (!isOpen) return null;

  const getItemPrice = (item: CartItem) => item.selectedVariant?.price || item.product.price;
  const subtotal = items.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0);
  const cryptoDiscount = Math.round(subtotal * 0.1);
  const totalWithCrypto = subtotal - cryptoDiscount;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D1630] border-l border-slate-800 text-white flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="font-display font-bold text-lg text-white">Order Bag</h2>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-amber-400 text-xs font-semibold tabular-nums">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nationwide Express Free Shipping Banner */}
          <div className="bg-emerald-950/40 border-b border-emerald-800/30 px-5 py-2.5 text-xs text-emerald-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Free Australia Post Express Shipping</span>
            </div>
            <span className="text-[11px] font-bold text-emerald-400">$0.00</span>
          </div>

          {/* 25% Delivery Pricing Guarantee */}
          {items.length > 0 && (
            <div className="bg-[#101833] border-b border-slate-800 px-5 py-2 flex items-center justify-between text-xs">
              <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>25% Delivery Rate Applied</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                Min. Item Price: $500 AUD
              </span>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base font-medium text-slate-300">Your order bag is empty</p>
                <p className="text-xs text-slate-500 max-w-xs">
                  Browse our Australian, US, Euro, British, and Canadian prop currency stacks.
                </p>
                <Link
                  to="/shop"
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              items.map((item) => {
                const itemPrice = getItemPrice(item);
                const variantKey = item.selectedVariant?.id || 'std';
                return (
                  <div 
                    key={`${item.product.id}-${variantKey}`}
                    className="bg-[#121B38] border border-slate-800/80 rounded-xl p-3 flex gap-3 items-center"
                  >
                    {/* Visual preview */}
                    <Link 
                      to={`/product/${item.product.slug}`}
                      onClick={onClose}
                      className="w-20 h-16 rounded-lg overflow-hidden shrink-0 bg-[#0A0F22] block"
                    >
                      <BanknoteVisual
                        currency={item.product.currency}
                        denomination={item.product.denomination}
                        isStack={false}
                        className="!aspect-auto h-full !p-1"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={onClose}
                        className="text-xs font-semibold text-white truncate block hover:text-amber-300"
                      >
                        {item.product.name}
                      </Link>
                      
                      {item.selectedVariant && (
                        <p className="text-[11px] text-slate-300 font-medium truncate">
                          {item.selectedVariant.name}
                        </p>
                      )}

                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-xs font-display font-bold text-white tabular-nums">
                          ${itemPrice} AUD
                        </span>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          25% Rate
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-300 font-mono block">
                        Delivers: {item.selectedVariant?.stagedValue || item.product.stagedValue}
                      </span>
                    </div>

                    {/* Stepper & Delete */}
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <button
                        onClick={() => onRemoveItem(item.product.id, item.selectedVariant?.id)}
                        className="text-slate-500 hover:text-rose-400 transition-colors cursor-pointer"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-slate-700 rounded-md bg-slate-900/60 overflow-hidden">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedVariant?.id)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold tabular-nums text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedVariant?.id)}
                          className="px-2 py-0.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer & Checkout Area */}
          {items.length > 0 && (
            <div className="p-5 border-t border-slate-800 bg-[#0B132B] space-y-4">
              
              {/* Crypto 10% Discount Callout */}
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-amber-200">
                    Pay with Crypto & Save 10% (${cryptoDiscount} AUD discount)
                  </span>
                  <span className="text-[11px] text-amber-300/80">
                    Applied on the Order Form for USDT, BTC, ETH & SOL.
                  </span>
                </div>
              </div>

              {/* Price Calculations */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1.5 px-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Prop Money Delivered:
                  </span>
                  <span className="font-mono font-bold">${subtotal * 4} Value</span>
                </div>

                <div className="flex justify-between">
                  <span>Delivery Price (25%):</span>
                  <span className="font-mono tabular-nums text-white font-bold">${subtotal} AUD</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Tracked Express Shipping</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="flex justify-between text-amber-400 font-medium">
                  <span>Price if paying with Crypto (-10%)</span>
                  <span className="font-mono tabular-nums">${totalWithCrypto} AUD</span>
                </div>
                <div className="pt-2 border-t border-slate-800 flex justify-between items-baseline text-base font-bold text-white">
                  <span>Total Amount</span>
                  <span className="font-display font-extrabold text-xl text-white tabular-nums">
                    ${subtotal} <span className="text-xs font-normal text-slate-400">AUD</span>
                  </span>
                </div>
              </div>

              {/* Checkout Link Button */}
              <Link
                to="/checkout"
                onClick={onClose}
                className="w-full py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Order Form Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>Encrypted Order Processing · GST Included</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
