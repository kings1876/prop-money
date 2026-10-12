import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Search, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, CurrencyCategory } from '../types';

interface CurrencyMenu {
  category: CurrencyCategory;
  code: string;
  flag: string;
  title: string;
  products: Product[];
}

// Currency dropdowns, built from the catalogue so new products appear automatically.
const CURRENCY_MENUS: CurrencyMenu[] = (
  [
    { category: 'Australian Dollars', code: 'AUD', flag: '🇦🇺', title: 'Australian Dollar Prop Money' },
    { category: 'US Dollars', code: 'USD', flag: '🇺🇸', title: 'US Dollar Prop Money' },
    { category: 'Euro', code: 'EUR', flag: '🇪🇺', title: 'Euro Prop Money' },
    { category: 'British Pounds', code: 'GBP', flag: '🇬🇧', title: 'British Pound Prop Money' },
    { category: 'Canadian Dollars', code: 'CAD', flag: '🇨🇦', title: 'Canadian Dollar Prop Money' }
  ] as const
).map((m) => ({
  ...m,
  products: PRODUCTS.filter((p) => p.category === m.category).sort(
    (a, b) => (b.denomination === 'Mixed' ? 0 : b.denomination) - (a.denomination === 'Mixed' ? 0 : a.denomination)
  )
}));

const MORE_LINKS = [
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/faq', label: 'FAQ' },
  { to: '/compliance', label: 'Legal Compliance' }
];

const shortName = (p: Product) => `${p.currencySymbol}${p.denomination} ${p.currency} Prop Stack`;
const defaultVariant = (p: Product) => p.variants.find((v) => v.isDefault) ?? p.variants[0];
const thumb = (p: Product) => p.image ?? `/products/${p.slug}.svg`;

interface HeaderProps {
  cartCount: number;
  openCart: () => void;
  openSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  openCart,
  openSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown id
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Close menus on navigation
  useEffect(() => {
    setOpenMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenMenu(null);
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  // Which currency is being browsed (shop category or product page)
  const activeCategory: string | null = (() => {
    if (location.pathname === '/shop') return searchParams.get('category');
    if (location.pathname.startsWith('/product/')) {
      const slug = location.pathname.split('/')[2];
      return PRODUCTS.find((p) => p.slug === slug)?.category ?? null;
    }
    return null;
  })();
  const moreActive = MORE_LINKS.some((l) => location.pathname.startsWith(l.to));

  const triggerClass = (active: boolean) =>
    `flex items-center gap-1 py-1 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
      active ? 'text-[#C87D55]' : 'text-stone-300 hover:text-white'
    }`;

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#121417] border-b border-[#23272E] text-xs py-2 px-4 text-center text-stone-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">Film &amp; TV Prop Money</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">One-sided, 75% scale, clearly marked PROP COPY</span>
          </div>
          
          <div className="mx-auto sm:mx-0 flex items-center gap-2.5">
            <span className="text-[#C87D55] font-semibold bg-[#1D2024] border border-[#8C4A2F]/50 px-2.5 py-0.5 rounded text-[11px]">
              Stacks from $39 AUD
            </span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-stone-300">Free Shipping Over $150</span>
          </div>

          <Link 
            to="/compliance"
            className="hidden md:flex items-center gap-1.5 text-stone-400 hover:text-[#C87D55] transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>RBA Legal Compliance</span>
          </Link>
        </div>
      </div>

      {/* Primary Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0f1012]/95 backdrop-blur-md border-b border-[#23272E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              aria-label="Australia Prop Money home"
              className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C87D55] to-[#8C4A2F] flex items-center justify-center shadow-lg shadow-[#8C4A2F]/20 text-white font-mono font-black text-sm">
                APM
              </div>
              <span className="hidden sm:inline font-display font-black text-lg xl:text-xl uppercase tracking-wider text-white group-hover:text-[#C87D55] transition-colors whitespace-nowrap">
                Australia Prop Money
              </span>
            </Link>
          </div>

          {/* Zone 2: Currency dropdowns + More */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-4 xl:gap-6" aria-label="Main">
            {CURRENCY_MENUS.map((menu) => {
              const isOpen = openMenu === menu.code;
              return (
                <div
                  key={menu.code}
                  className="relative py-2"
                  onMouseEnter={() => setOpenMenu(menu.code)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenMenu(isOpen ? null : menu.code)}
                    className={triggerClass(isOpen || activeCategory === menu.category)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    <span aria-hidden="true">{menu.flag}</span>
                    <span>{menu.code}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50">
                      <div className="bg-[#17191C] border border-[#2B2F36] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden">
                        <div className="px-4 py-3 border-b border-[#23272E] text-[11px] font-bold tracking-wider uppercase font-mono text-[#C87D55]">
                          {menu.title}
                        </div>
                        <ul className="p-2 max-h-[60vh] overflow-y-auto">
                          {menu.products.map((p) => {
                            const v = defaultVariant(p);
                            return (
                              <li key={p.id}>
                                <Link
                                  to={`/product/${p.slug}`}
                                  className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#20242A] transition-colors group/item"
                                >
                                  <img src={thumb(p)} alt="" className="w-14 h-9 rounded object-cover bg-[#ECECEE] shrink-0" loading="lazy" />
                                  <span className="flex-1 min-w-0">
                                    <span className="block text-sm font-semibold text-white truncate group-hover/item:text-[#C87D55]">
                                      {shortName(p)}
                                    </span>
                                    <span className="block text-[11px] text-stone-400 font-mono">
                                      {v.noteCount.toLocaleString()} notes
                                    </span>
                                  </span>
                                  <span className="text-xs font-bold text-white font-mono whitespace-nowrap">${v.price}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          to={`/shop?category=${encodeURIComponent(menu.category)}`}
                          className="flex items-center justify-between px-4 py-3 border-t border-[#23272E] text-xs font-bold text-[#C87D55] hover:bg-[#20242A]"
                        >
                          <span>View all {menu.category}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {/* More */}
            <div className="relative py-2" onMouseEnter={() => setOpenMenu('more')} onMouseLeave={() => setOpenMenu(null)}>
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === 'more' ? null : 'more')}
                className={triggerClass(openMenu === 'more' || moreActive)}
                aria-expanded={openMenu === 'more'}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openMenu === 'more' ? 'rotate-180' : ''}`} />
              </button>
              {openMenu === 'more' && (
                <div className="absolute top-full right-0 pt-2 w-52 z-50">
                  <ul className="bg-[#17191C] border border-[#2B2F36] rounded-2xl shadow-2xl shadow-black/80 p-2">
                    {MORE_LINKS.map((l) => (
                      <li key={l.to}>
                        <NavLink
                          to={l.to}
                          className={({ isActive }) =>
                            `block px-3 py-2 rounded-lg text-sm font-medium ${
                              isActive ? 'bg-[#8C4A2F]/20 text-[#C87D55]' : 'text-stone-200 hover:bg-[#20242A] hover:text-white'
                            }`
                          }
                        >
                          {l.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={openSearch}
              className="p-2 text-stone-300 hover:text-white hover:bg-[#17191C] rounded-lg transition-colors cursor-pointer"
              title="Search products"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag / Cart Button */}
            <button
              onClick={openCart}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#A35839] text-white font-bold text-xs font-mono transition-colors cursor-pointer shadow-md shadow-[#8C4A2F]/20 whitespace-nowrap"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="hidden sm:inline">Order Bag</span>
              <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-amber-300 text-xs font-bold tabular-nums">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-white rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu: currency sections with products, then More links */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121417] border-b border-[#23272E] px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {CURRENCY_MENUS.map((menu) => {
              const open = mobileSection === menu.code;
              return (
                <div key={menu.code} className="border border-[#2B2F36] rounded-xl overflow-hidden bg-[#17191C]">
                  <button
                    type="button"
                    onClick={() => setMobileSection(open ? null : menu.code)}
                    className="w-full flex items-center justify-between p-3 text-left cursor-pointer"
                    aria-expanded={open}
                  >
                    <span className="flex items-center gap-2 font-bold text-white text-sm">
                      <span aria-hidden="true">{menu.flag}</span>
                      {menu.category}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="px-2 pb-2 border-t border-[#23272E]">
                      {menu.products.map((p) => (
                        <Link
                          key={p.id}
                          to={`/product/${p.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#20242A]"
                        >
                          <img src={thumb(p)} alt="" className="w-12 h-8 rounded object-cover bg-[#ECECEE] shrink-0" loading="lazy" />
                          <span className="flex-1 text-sm text-stone-200">{shortName(p)}</span>
                          <span className="text-xs font-bold text-white font-mono">${defaultVariant(p).price}</span>
                        </Link>
                      ))}
                      <Link
                        to={`/shop?category=${encodeURIComponent(menu.category)}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-2 text-xs font-bold text-[#C87D55]"
                      >
                        View all {menu.category} →
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-2 flex flex-col">
              {MORE_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-mono font-bold uppercase tracking-wider ${
                      isActive ? 'bg-[#8C4A2F]/20 text-[#C87D55]' : 'text-stone-300 hover:bg-[#17191C] hover:text-white'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
