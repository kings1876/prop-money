import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, ShieldCheck, Search, Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

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
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close dropdown on route change
  useEffect(() => {
    setShopDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShopDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currencyCategories = [
    {
      name: 'US Dollars',
      code: 'USD',
      symbol: '$',
      flag: '🇺🇸',
      notes: '$1, $2, $5, $10, $20, $50, $100',
      badge: 'Hollywood Standard',
      accent: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/40'
    },
    {
      name: 'Euro',
      code: 'EUR',
      symbol: '€',
      flag: '🇪🇺',
      notes: '€5, €10, €20, €50, €100, €200, €500',
      badge: 'All Denominations',
      accent: 'border-purple-500/40 text-purple-400 bg-purple-950/40'
    },
    {
      name: 'British Pounds',
      code: 'GBP',
      symbol: '£',
      flag: '🇬🇧',
      notes: '£5, £10, £20, £50 Polymer',
      badge: 'Bank of England Style',
      accent: 'border-rose-500/40 text-rose-400 bg-rose-950/40'
    },
    {
      name: 'Australian Dollars',
      code: 'AUD',
      symbol: '$',
      flag: '🇦🇺',
      notes: '$5, $10, $20, $50, $100 & Cases',
      badge: 'Domestic Flagship',
      accent: 'border-amber-500/40 text-amber-400 bg-amber-950/40'
    },
    {
      name: 'Canadian Dollars',
      code: 'CAD',
      symbol: 'C$',
      flag: '🇨🇦',
      notes: '$5, $10, $20, $50, $100 Frontier',
      badge: 'Polymer Precision',
      accent: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40'
    }
  ];

  const staticNavLinks = [
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' }
  ];

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#121417] border-b border-[#23272E] text-xs py-2 px-4 text-center text-stone-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono">
          <div className="hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">25% Fixed Delivery Rate</span>
            <span className="text-stone-600">·</span>
            <span className="text-stone-300">Pay 25% of prop money face value delivered</span>
          </div>
          
          <div className="mx-auto sm:mx-0 flex items-center gap-2.5">
            <span className="text-[#C87D55] font-semibold bg-[#1D2024] border border-[#8C4A2F]/50 px-2.5 py-0.5 rounded text-[11px]">
              Min. Price $500 AUD (Delivers $2,000+)
            </span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="text-amber-400 font-semibold">10% Crypto Discount</span>
            <span className="text-stone-600 hidden sm:inline">·</span>
            <span className="hidden sm:inline text-stone-300">Free Express Shipping</span>
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
              className="group flex items-center gap-2 text-left cursor-pointer focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#C87D55] to-[#8C4A2F] flex items-center justify-center shadow-lg shadow-[#8C4A2F]/20 text-white font-mono font-black text-sm">
                APM
              </div>
              <span className="font-display font-black text-lg sm:text-xl uppercase tracking-wider text-white group-hover:text-[#C87D55] transition-colors whitespace-nowrap">
                Australia Prop Money
              </span>
            </Link>
          </div>

          {/* Zone 2: Navigation links with Shop Category Dropdown */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
            {/* Shop Item with Categories Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative group py-2"
              onMouseEnter={() => setShopDropdownOpen(true)}
              onMouseLeave={() => setShopDropdownOpen(false)}
            >
              <button
                onClick={() => setShopDropdownOpen((prev) => !prev)}
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer whitespace-nowrap focus:outline-none ${
                  location.pathname === '/shop' || shopDropdownOpen
                    ? 'text-[#C87D55] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
                aria-expanded={shopDropdownOpen}
                aria-haspopup="true"
              >
                <span>Shop</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    shopDropdownOpen ? 'rotate-180 text-[#C87D55]' : 'text-stone-400 group-hover:text-white'
                  }`} 
                />
              </button>

              {/* Flyout Dropdown Menu */}
              {shopDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#17191C] border border-[#2B2F36] rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-xl overflow-hidden p-3.5">
                    
                    {/* Dropdown Header */}
                    <div className="px-3 py-2 border-b border-[#23272E] flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C87D55]" />
                        <span className="text-[11px] font-bold tracking-wider uppercase font-mono text-[#C87D55]">
                          Currencies & Prop Notes
                        </span>
                      </div>
                      <Link
                        to="/shop"
                        onClick={() => setShopDropdownOpen(false)}
                        className="text-xs text-[#C87D55] hover:text-amber-300 hover:underline flex items-center gap-1 font-bold"
                      >
                        <span>View All Inventory</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* Category Items List */}
                    <div className="py-2 space-y-1">
                      {currencyCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={`/shop?category=${encodeURIComponent(cat.name)}`}
                          onClick={() => setShopDropdownOpen(false)}
                          className="group/item flex items-center justify-between p-2.5 rounded-xl hover:bg-[#20242A] border border-transparent hover:border-[#2B2F36] transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-xl leading-none" role="img" aria-label={cat.name}>
                              {cat.flag}
                            </span>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-sm text-white group-hover/item:text-[#C87D55] transition-colors">
                                  {cat.name}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#121417] text-stone-400 font-medium">
                                  {cat.code}
                                </span>
                              </div>
                              <p className="text-xs text-stone-400 font-mono">
                                {cat.notes}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border border-[#2B2F36] bg-[#121417] text-[#C87D55]">
                              {cat.badge}
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover/item:text-[#C87D55] group-hover/item:translate-x-0.5 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom Quick Feature Strip */}
                    <div className="pt-2.5 mt-1 border-t border-[#23272E] px-3 flex items-center justify-between text-[11px] font-mono text-stone-400">
                      <span className="text-[#C87D55]">
                        Min Pack Price $500 AUD · 25% Rate
                      </span>
                      <Link
                        to="/compliance"
                        onClick={() => setShopDropdownOpen(false)}
                        className="hover:text-white transition-colors"
                      >
                        100% Legal RBA Props
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Static links */}
            {staticNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors relative py-1 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-wider ${
                    isActive
                      ? 'text-[#C87D55] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#8C4A2F]'
                      : 'text-stone-300 hover:text-[#C87D55]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
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
              className="md:hidden p-2 text-stone-300 hover:text-white rounded-lg cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Expandable Shop Categories */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121417] border-b border-[#23272E] px-4 pt-2 pb-6 space-y-3">
            <div className="flex flex-col space-y-2">
              
              {/* Mobile Shop Collapsible Header */}
              <div className="border border-[#2B2F36] rounded-xl overflow-hidden bg-[#17191C]">
                <div className="flex items-center justify-between p-3">
                  <Link
                    to="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-bold text-[#C87D55] text-base"
                  >
                    Shop All Currencies
                  </Link>
                  <button
                    onClick={() => setMobileShopOpen(!mobileShopOpen)}
                    className="p-1 text-stone-400 hover:text-white cursor-pointer"
                    aria-label="Toggle currency categories"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileShopOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Mobile Currency Sub-Links */}
                {mobileShopOpen && (
                  <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-[#23272E]">
                    <span className="text-[11px] font-bold text-stone-400 uppercase tracking-wider block px-1 font-mono">
                      Currency Categories:
                    </span>
                    {currencyCategories.map((cat) => (
                      <Link
                        key={cat.name}
                        to={`/shop?category=${encodeURIComponent(cat.name)}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#141619] hover:bg-[#20242A] text-stone-200 text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <span>{cat.flag}</span>
                          <span className="font-medium">{cat.name}</span>
                        </div>
                        <span className="text-xs text-[#C87D55] font-mono">
                          {cat.code}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              {staticNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-left px-3 py-2 rounded-md text-sm font-mono font-bold uppercase tracking-wider cursor-pointer ${
                      isActive
                        ? 'bg-[#8C4A2F]/20 text-[#C87D55]'
                        : 'text-stone-300 hover:bg-[#17191C] hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#23272E] flex items-center justify-between text-xs text-stone-400 font-mono">
              <Link 
                to="/compliance"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 text-[#C87D55] hover:underline"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>RBA Compliance Guidelines</span>
              </Link>
              <span>AUD Currency</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
