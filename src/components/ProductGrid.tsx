import React, { useMemo, useState } from 'react';
import { Product, ProductVariant } from '../types';
import { ProductCard } from './ProductCard';
import { CATEGORIES } from '../data/products';
import { SlidersHorizontal, Search, X, Globe } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  selectedSubcategory: string;
  onSelectSubcategory: (sub: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, variant?: ProductVariant) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  selectedSubcategory,
  onSelectSubcategory,
  searchQuery,
  setSearchQuery,
  onQuickView,
  onAddToCart
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'notes'>('featured');

  // Subcategories available in current category
  const availableSubcategories = useMemo(() => {
    const relevant = selectedCategory === 'All Currencies' || selectedCategory === 'All Products'
      ? products
      : products.filter(p => p.category === selectedCategory);
    const set = new Set(relevant.map(p => p.subcategory));
    return ['All Notes', ...Array.from(set)];
  }, [products, selectedCategory]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'All Currencies' && selectedCategory !== 'All Products' && p.category !== selectedCategory) {
          return false;
        }
        if (selectedSubcategory !== 'All Notes' && selectedSubcategory !== 'All Subcategories' && p.subcategory !== selectedSubcategory) {
          return false;
        }
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchSub = p.subcategory.toLowerCase().includes(q);
          const matchCurr = p.currency.toLowerCase().includes(q);
          const matchDenom = p.denomination.toString().includes(q);
          return matchName || matchDesc || matchSub || matchCurr || matchDenom;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'notes') return b.noteCount - a.noteCount;
        return 0;
      });
  }, [products, selectedCategory, selectedSubcategory, searchQuery, sortBy]);

  const currencyIcons: Record<string, string> = {
    'Australian Dollars': '🇦🇺',
    'US Dollars': '🇺🇸',
    'Euro': '🇪🇺',
    'British Pounds': '🇬🇧',
    'Canadian Dollars': '🇨🇦'
  };

  return (
    <section id="shop-catalog" className="py-12 bg-[#0B132B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-amber-400 mb-1">
              <Globe className="w-4 h-4" />
              <span>International Currency Stacks</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              World Prop Money Collections
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Select a currency below to view all available notes with variable pack options.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search $100, €500, £50, notes..."
              className="w-full bg-[#121B38] border border-slate-700/80 rounded-lg pl-9 pr-8 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Currency Categories: US Dollars, Euro, British Pounds, Australian Dollars, Canadian Dollars */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#121B38] border border-slate-800 rounded-xl">
            <button
              onClick={() => {
                onSelectCategory('All Currencies');
                onSelectSubcategory('All Notes');
              }}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                selectedCategory === 'All Currencies' || selectedCategory === 'All Products'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              All Currencies
            </button>

            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  onSelectSubcategory('All Notes');
                }}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                }`}
              >
                <span>{currencyIcons[cat]}</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-[#121B38] border border-slate-700 rounded-md px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="featured">Featured Notes</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="notes">Note Count: High to Low</option>
            </select>
          </div>
        </div>

        {/* Subcategories (Denominations under selected currency) */}
        {availableSubcategories.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto text-xs py-1">
            <span className="text-slate-500 text-xs shrink-0 font-medium">Notes Available:</span>
            {availableSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => onSelectSubcategory(sub)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  selectedSubcategory === sub
                    ? 'bg-slate-700 text-amber-300 border border-amber-400/40'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}

        {/* Results Counter & Search Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing <strong className="text-white tabular-nums">{filteredProducts.length}</strong> prop products
            {selectedCategory !== 'All Currencies' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>
          <span className="text-emerald-400 font-medium hidden sm:inline">
            Free shipping on every order
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0E162F] rounded-xl border border-slate-800 space-y-3">
            <p className="text-base text-slate-300 font-medium">No prop money products found</p>
            <p className="text-xs text-slate-500">Try choosing another currency category.</p>
            <button
              onClick={() => {
                onSelectCategory('All Currencies');
                onSelectSubcategory('All Notes');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg cursor-pointer"
            >
              Reset to All Currencies
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
