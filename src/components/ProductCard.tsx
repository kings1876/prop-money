import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product, ProductVariant } from '../types';
import { ProductImage } from './ProductImage';
import { Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart: (product: Product, variant?: ProductVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart
}) => {
  const [added, setAdded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.find((v) => v.isDefault) || product.variants?.[0] || {
      id: 'default',
      name: `${product.noteCount} Notes`,
      price: product.price,
      comparePrice: product.comparePrice,
      noteCount: product.noteCount,
      stagedValue: product.stagedValue
    }
  );

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const handleVariantSelect = (e: React.MouseEvent, variant: ProductVariant) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVariant(variant);
  };

  return (
    <div className="group relative bg-[#0E162F] hover:bg-[#121B38] border border-slate-800 hover:border-slate-700/80 rounded-xl overflow-hidden transition-all duration-200 flex flex-col justify-between">
      
      {/* Visual Image Slot linking to product page */}
      <Link 
        to={`/product/${product.slug}`}
        className="block relative w-full aspect-[4/3] bg-[#0A0F22] overflow-hidden"
      >
        <ProductImage product={product} showBadge noteCount={selectedVariant.noteCount} />

        {/* Hover inspect hint */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-lg bg-white/95 text-slate-950 text-xs font-semibold shadow-lg flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>View Full Specs</span>
          </span>
        </div>
      </Link>

      {/* Card Content & Metadata */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Clean Unboxed Metadata with Category Link */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
            <Link 
              to={`/shop?category=${encodeURIComponent(product.category)}`}
              className="uppercase tracking-wider text-[11px] font-semibold text-amber-400 hover:underline"
            >
              {product.category}
            </Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{product.subcategory}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="font-mono text-slate-300">{product.currency}</span>
          </div>

          {/* Product Title linking to standalone URL */}
          <h3 className="font-semibold text-base text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
            <Link to={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          {/* Short description */}
          <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Primary SEO target keyword badge */}
          {product.seoKeywords && product.seoKeywords.length > 0 && (
            <div className="mt-2 flex items-center gap-1.5">
              <span className="text-[10px] text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded font-medium border border-amber-400/20 truncate max-w-full">
                #{product.seoKeywords[0]}
              </span>
            </div>
          )}

          {/* Variable Price / Variant Selector Pills */}
          {product.variants && product.variants.length > 1 && (
            <div className="mt-3 pt-2.5 border-t border-slate-800/80">
              <span className="text-[10px] text-slate-400 font-medium block mb-1.5">
                Select Option (Variable Price):
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={(e) => handleVariantSelect(e, v)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      selectedVariant.id === v.id
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                        : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {v.noteCount} Notes (${v.price})
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg text-white tabular-nums">
                ${selectedVariant.price} <span className="text-xs font-sans text-slate-400 font-normal">AUD</span>
              </span>
            </div>
            <span className="block text-[11px] text-amber-300 font-mono mt-0.5 font-medium">
              {selectedVariant.noteCount.toLocaleString()} prop notes
            </span>
          </div>

          {/* Quick Add Button */}
          <button
            onClick={handleAdd}
            className={`p-2.5 rounded-lg font-medium text-xs transition-all duration-150 cursor-pointer flex items-center gap-1 shadow-sm ${
              added
                ? 'bg-emerald-500 text-white'
                : 'bg-amber-400 hover:bg-amber-300 text-slate-950'
            }`}
            title="Add to Order Bag"
            aria-label={`Add ${product.name} to Cart`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span className="text-[11px] font-bold">Added</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline font-bold">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
