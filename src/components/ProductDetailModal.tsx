import React, { useState, useEffect } from 'react';
import { Product, ProductVariant } from '../types';
import { ProductImage } from './ProductImage';
import { X, Check, ShieldCheck, Truck, Sparkles, Plus, Minus, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  onBuyNow: (product: Product, quantity: number, variant?: ProductVariant) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    if (product) {
      const def = product.variants?.find((v) => v.isDefault) || product.variants?.[0] || {
        id: 'default',
        name: `Single Stack (${product.noteCount} Notes)`,
        price: product.price,
        comparePrice: product.comparePrice,
        noteCount: product.noteCount,
        stagedValue: product.stagedValue
      };
      setSelectedVariant(def);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const currentVariant = selectedVariant || {
    id: 'default',
    name: `${product.noteCount} Notes`,
    price: product.price,
    comparePrice: product.comparePrice,
    noteCount: product.noteCount,
    stagedValue: product.stagedValue
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, currentVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuy = () => {
    onBuyNow(product, quantity, currentVariant);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="relative w-full max-w-4xl bg-[#0D1630] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900/80 hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* Left: Visual Slot & Realistic Banknote Showcase */}
          <div className="md:col-span-6 bg-[#080D1D] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                <span className="font-mono text-amber-400 font-semibold tracking-wider">
                  {product.currency} FILM PROP SPECIMEN
                </span>
                <span className="text-emerald-400">4K/8K High Definition</span>
              </div>

              {/* Main Banknote Render */}
              <div className="py-4">
                <ProductImage product={product} showBadge noteCount={currentVariant.noteCount} className="rounded-xl overflow-hidden aspect-[4/3]" />
              </div>
            </div>

            {/* Quick trust tags under image */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Legal Prop Marking: "PROP COPY / NOT LEGAL TENDER"</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Australia Post Express Tracked Shipping (1-3 Days)</span>
              </div>
            </div>
          </div>

          {/* Right: Contiguous Purchase Module with Variable Price Variants */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-5">
            <div className="space-y-3.5">
              
              {/* Category & Badge */}
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="uppercase tracking-widest text-[11px] font-bold text-amber-400">
                  {product.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{product.subcategory}</span>
                {product.badge && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-300 font-semibold">{product.badge}</span>
                  </>
                )}
              </div>

              {/* Title & Staged Value */}
              <div>
                <h2 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                  {product.name}
                </h2>
                <div className="mt-1 text-xs text-amber-300 font-mono font-medium">
                  {currentVariant.noteCount.toLocaleString()} prop notes · one-sided · 75% scale
                </div>
              </div>

              {/* Price Row */}
              <div className="flex flex-wrap items-baseline gap-2.5 pt-1">
                <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums">
                  ${currentVariant.price} <span className="text-sm font-sans font-normal text-slate-400">AUD</span>
                </span>
                <span className="text-xs text-amber-300 font-medium px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                  GST included
                </span>
              </div>

              {/* Variable Price Variant Selectors */}
              {product.variants && product.variants.length > 1 && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    Select Pack Tier (Variable Price):
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {product.variants.map((v) => {
                      const isSelected = currentVariant.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`p-2 rounded-lg border text-left cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-amber-400/20 border-amber-400 text-white'
                              : 'bg-[#121B38] border-slate-700 text-slate-300 hover:border-slate-600'
                          }`}
                        >
                          <div className="text-xs font-bold truncate">{v.name}</div>
                          <div className="text-[10px] text-amber-300 font-mono">${v.price} AUD</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-300 font-medium">Quantity:</span>
                <div className="flex items-center border border-slate-700 rounded-lg bg-[#121B38] overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-semibold tabular-nums text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-xs text-slate-400">
                  Subtotal: <strong className="text-white">${currentVariant.price * quantity} AUD</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  className={`py-3 px-4 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer ${
                    added
                      ? 'bg-emerald-500 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <span>Add to Bag</span>
                  )}
                </button>

                <button
                  onClick={handleBuy}
                  className="py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/10 cursor-pointer"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
