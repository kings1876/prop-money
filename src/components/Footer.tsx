import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Lock, Star, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f1012] border-t border-[#23272E] text-stone-400 text-xs">
      
      {/* Pre-footer Value Bar */}
      <div className="border-b border-[#23272E] py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#8C4A2F]/15 border border-[#8C4A2F]/30 text-[#C87D55] flex items-center justify-center shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs font-mono uppercase">Free Tracked Courier</h4>
              <p className="text-[11px] text-stone-400">Australia Post Express dispatched daily</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs font-mono uppercase">100% RBA Compliant</h4>
              <p className="text-[11px] text-stone-400">Crimes (Currency) Act 1981 safe</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#17191C] border border-[#2B2F36] text-amber-400 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs font-mono uppercase">25% Pricing & Crypto</h4>
              <p className="text-[11px] text-stone-400">Min $500 AUD · 10% off BTC/USDT</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-xl bg-[#00B67A]/10 border border-[#00B67A]/30 text-[#00B67A] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-[#00B67A]" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs font-mono uppercase">4.9 / 5.0 Rating</h4>
              <p className="text-[11px] text-stone-400">Over 3,000+ verified film orders</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-3 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C87D55] to-[#8C4A2F] text-white flex items-center justify-center font-mono font-black text-xs">
                APM
              </div>
              <span className="font-display font-black text-base uppercase tracking-wider text-white">
                Australia Prop Money
              </span>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed">
              Founded 17 May 2018 in Australia. Dedicated to providing authentic, cinema-grade Australian polymer reproduction currency for film, television, theatre, photography, and training nationwide.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-mono text-stone-500 block">
                Dispatched from Sydney & Melbourne facilities nationwide.
              </span>
            </div>
          </div>

          {/* Navigation Links with distinct URLs */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/shop', label: 'Shop Catalog' },
                { to: '/blog', label: 'Blog & Articles' },
                { to: '/about', label: 'About APM' },
                { to: '/contact', label: 'Contact Support' },
                { to: '/faq', label: 'FAQs' }
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-slate-300 block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Currency Categories */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Currencies
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/shop?category=US+Dollars" className="hover:text-amber-400 transition-colors block">
                  🇺🇸 US Dollars (USD)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Euro" className="hover:text-amber-400 transition-colors block">
                  🇪🇺 Euro (EUR)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=British+Pounds" className="hover:text-amber-400 transition-colors block">
                  🇬🇧 British Pounds (GBP)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Australian+Dollars" className="hover:text-amber-400 transition-colors block">
                  🇦🇺 Australian Dollars (AUD)
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Canadian+Dollars" className="hover:text-amber-400 transition-colors block">
                  🇨🇦 Canadian Dollars (CAD)
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies with distinct URLs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Compliance & Policies
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/compliance"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-amber-300 font-medium flex items-center gap-1"
                >
                  <span>RBA Legal Compliance</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-slate-300 block"
                >
                  Shipping & Delivery Information
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-slate-300 block"
                >
                  Refund & Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-slate-300 block"
                >
                  Privacy Policy & Data Security
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-amber-400 transition-colors cursor-pointer text-slate-300 block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Accepted Payments & Keywords */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">
              Accepted Currencies
            </h4>
            <div className="space-y-2">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                <span className="px-2 py-1 rounded bg-[#17191C] border border-[#2B2F36] text-stone-300">AUD ($)</span>
                <span className="px-2 py-1 rounded bg-[#17191C] border border-[#8C4A2F]/40 text-[#C87D55]">USDT (-10%)</span>
                <span className="px-2 py-1 rounded bg-[#17191C] border border-[#8C4A2F]/40 text-[#C87D55]">BTC (-10%)</span>
                <span className="px-2 py-1 rounded bg-[#17191C] border border-[#8C4A2F]/40 text-[#C87D55]">ETH (-10%)</span>
                <span className="px-2 py-1 rounded bg-[#17191C] border border-[#8C4A2F]/40 text-[#C87D55]">SOL (-10%)</span>
              </div>
              <p className="text-[11px] text-stone-400 pt-1">
                Prices include Australian GST. Fast same-day order processing.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-10 p-5 rounded-2xl bg-[#141619] border border-[#23272E] text-[11px] text-stone-400 leading-relaxed font-mono">
          <strong className="text-stone-200">FEDERAL LEGAL NOTICE:</strong> All prop notes produced and sold by Australia Prop Money are strictly created for cinematography, television production, artistic performance, and training simulations. Each bill is clearly stamped with "PROP COPY / REPLICA / NOT LEGAL TENDER" and contains intentional size and design variations compliant with the Australian Reserve Bank guidelines. Passing, attempting to spend, or misrepresenting reproduction notes as genuine legal currency is a severe federal offence under the <em>Crimes (Currency) Act 1981 (Cth)</em> punishable by imprisonment.
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-[#23272E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-mono">
          <div>
            © {new Date().getFullYear()} Australia Prop Money. All rights reserved. Founded 17 May 2018 in Australia.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>AUD Currency</span>
            <span>·</span>
            <span>Nationwide Express Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
