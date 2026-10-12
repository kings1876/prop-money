import React from 'react';
import { Product } from '../types';

interface ProductImageProps {
  product: Product;
  className?: string;
  showBadge?: boolean;
  noteCount?: number; // notes in the selected pack; the image always shows one 100-note stack
}

// Product photo if one is set, otherwise the illustration from scripts/generate-product-images.ts.
export const ProductImage: React.FC<ProductImageProps> = ({ product, className = '', showBadge = false, noteCount }) => (
  <div className={`relative w-full h-full ${className}`}>
    <img
      src={product.image ?? `/products/${product.slug}.svg`}
      alt={`${product.name} - prop note stack marked PROP COPY`}
      loading="lazy"
      className={`w-full h-full ${product.image ? 'object-contain bg-[#ECECEE]' : 'object-cover'}`}
    />
    {noteCount && noteCount > 100 && (
      <span className="absolute bottom-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded bg-black/70 text-white">
        Image shows 1 of {Math.ceil(noteCount / 100)} stacks
      </span>
    )}
    {showBadge && product.badge && (
      <span className="absolute top-2 right-2 text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-md">
        {product.badge}
      </span>
    )}
  </div>
);
