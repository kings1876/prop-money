import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, ProductVariant, CurrencyCategory } from '../types';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Search, X, Globe, Sparkles, Filter } from 'lucide-react';

interface ShopPageProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, variant?: ProductVariant) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onQuickView,
  onAddToCart
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryParam = searchParams.get('category') || 'All Currencies';
  const subcategoryParam = searchParams.get('subcategory') || 'All Notes';
  const searchParam = searchParams.get('q') || '';
  const sortParam = (searchParams.get('sort') as any) || 'featured';

  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'notes'>(sortParam);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${categoryParam === 'All Currencies' ? 'World Currencies' : categoryParam} Prop Money Catalog | Australia Prop Money`;
  }, [categoryParam]);

  // Update query when category changes
  const handleCategorySelect = (category: string) => {
    const next = new URLSearchParams(searchParams);
    if (category === 'All Currencies') {
      next.delete('category');
    } else {
      next.set('category', category);
    }
    next.delete('subcategory');
    setSearchParams(next);
  };

  const handleSubcategorySelect = (subcategory: string) => {
    const next = new URLSearchParams(searchParams);
    if (subcategory === 'All Notes') {
      next.delete('subcategory');
    } else {
      next.set('subcategory', subcategory);
    }
    setSearchParams(next);
  };

  const handleSearchSubmit = (val: string) => {
    setSearchQuery(val);
    const next = new URLSearchParams(searchParams);
    if (val.trim()) {
      next.set('q', val.trim());
    } else {
      next.delete('q');
    }
    setSearchParams(next);
  };

  const handleSortChange = (newSort: any) => {
    setSortBy(newSort);
    const next = new URLSearchParams(searchParams);
    if (newSort === 'featured') {
      next.delete('sort');
    } else {
      next.set('sort', newSort);
    }
    setSearchParams(next);
  };

  // Subcategories (Denominations and Sets available in current currency)
  const availableSubcategories = useMemo(() => {
    const relevant = categoryParam === 'All Currencies'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === categoryParam);
    const set = new Set(relevant.map((p) => p.subcategory));
    return ['All Notes', ...Array.from(set)];
  }, [categoryParam]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS
      .filter((p) => {
        if (categoryParam !== 'All Currencies' && p.category !== categoryParam) {
          return false;
        }
        if (subcategoryParam !== 'All Notes' && p.subcategory !== subcategoryParam) {
          return false;
        }
        if (searchParam.trim()) {
          const q = searchParam.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchSub = p.subcategory.toLowerCase().includes(q);
          const matchCurr = p.currency.toLowerCase().includes(q);
          const matchDenom = p.denomination.toString().includes(q);
          const matchKeywords = p.seoKeywords?.some((k) => k.toLowerCase().includes(q));
          return matchName || matchDesc || matchSub || matchCurr || matchDenom || matchKeywords;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'notes') return b.noteCount - a.noteCount;
        return 0;
      });
  }, [categoryParam, subcategoryParam, searchParam, sortBy]);

  // Currency flags/icons mapping
  const currencyIcons: Record<string, string> = {
    'Australian Dollars': '🇦🇺',
    'US Dollars': '🇺🇸',
    'Euro': '🇪🇺',
    'British Pounds': '🇬🇧',
    'Canadian Dollars': '🇨🇦'
  };

  return (
    <div className="py-10 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              <Globe className="w-4 h-4" />
              <span>International Film & TV Currency Catalog</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {categoryParam === 'All Currencies' ? 'Global Prop Money Collection' : `${categoryParam} Prop Banknotes`}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Choose your production currency below. Every note is one-sided, 75% scale and marked <strong>"PROP COPY"</strong>. Stacks from <strong>$39 AUD</strong>, with free tracked shipping over $150.
            </p>
          </div>

          {/* Search Bar with URL sync */}
          <div className="w-full md:w-80 space-y-2">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchSubmit(e.target.value)}
                placeholder="Search $100s, €500s, £50s, props..."
                className="w-full bg-[#121B38] border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 transition-colors shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchSubmit('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Popular SEO Keyword Queries */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
              <span className="text-slate-400 font-medium">Popular:</span>
              {[
                'Movie Money',
                'Prop Banknotes'
              ].map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => handleSearchSubmit(kw)}
                  className={`px-2 py-0.5 rounded cursor-pointer transition-colors border ${
                    searchQuery.toLowerCase() === kw.toLowerCase()
                      ? 'bg-amber-400 text-slate-950 font-bold border-amber-400'
                      : 'bg-slate-900/60 text-slate-300 border-slate-800 hover:border-amber-400/60 hover:text-white'
                  }`}
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Currency Categories (As requested: US Dollars, Euro, British Pounds, Australian Dollars, Canadian Dollars) */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Select Currency Category:
            </span>
            <span className="text-xs text-slate-400">
              Prices shown in AUD with variable pack tiers
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#121B38] border border-slate-800 rounded-xl">
            <button
              onClick={() => handleCategorySelect('All Currencies')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                categoryParam === 'All Currencies'
                  ? 'bg-amber-400 text-slate-950 shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              All Currencies ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter((p) => p.category === cat).length;
              const isSelected = categoryParam === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                  }`}
                >
                  <span className="text-sm">{currencyIcons[cat]}</span>
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-slate-950/20 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Subcategories (Denominations under the selected currency) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          {availableSubcategories.length > 2 && (
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
              <span className="text-slate-500 text-xs shrink-0 font-medium">Notes Available:</span>
              {availableSubcategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => handleSubcategorySelect(sub)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    subcategoryParam === sub
                      ? 'bg-slate-700 text-amber-300 border border-amber-400/40 shadow-xs'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Sort Selector */}
          <div className="flex items-center gap-2 text-xs text-slate-400 ml-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="bg-[#121B38] border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
            >
              <option value="featured">Featured Notes</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="notes">Note Count: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Counter & Search Feedback */}
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>
            Showing <strong className="text-white tabular-nums">{filteredProducts.length}</strong> available prop notes
            {categoryParam !== 'All Currencies' && ` in ${categoryParam}`}
            {subcategoryParam !== 'All Notes' && ` · ${subcategoryParam}`}
            {searchParam && ` matching "${searchParam}"`}
          </span>
          <span className="text-emerald-400 font-semibold hidden sm:inline">
            Free tracked shipping on orders over $150
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={() => navigate(`/product/${product.slug}`)}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-[#0E162F] rounded-2xl border border-slate-800 space-y-3">
            <p className="text-base text-slate-300 font-medium">No prop banknotes found</p>
            <p className="text-xs text-slate-500">Try choosing another currency category or clearing search filters.</p>
            <button
              onClick={() => {
                handleCategorySelect('All Currencies');
                handleSearchSubmit('');
              }}
              className="mt-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold rounded-lg cursor-pointer"
            >
              Reset to All Currencies
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
