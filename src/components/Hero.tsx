import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Sparkles, Star, ArrowRight } from 'lucide-react';
import { BanknoteVisual } from './BanknoteVisual';

interface HeroProps {
  onReviewsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReviewsClick }) => {
  const [activePreview, setActivePreview] = React.useState<100 | 50 | 20 | 'Mixed'>(100);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-slate-800 bg-gradient-to-b from-[#0B132B] via-[#0E1733] to-[#0B132B]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Trustpilot pill rating */}
            <div className="inline-flex items-center gap-2 text-xs text-slate-300">
              <button 
                onClick={onReviewsClick}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 hover:border-amber-400/50 transition-colors cursor-pointer"
              >
                <div className="flex text-emerald-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5</span>
                <span className="text-slate-400">· Trustpilot (2,148+ Reviews)</span>
              </button>
            </div>

            {/* Display Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              Australia’s Premier <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">Polymer Prop Money</span> for Film & Stage.
            </h1>

            {/* Subheading / Value Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Authentic Australian dollar prop currency engineered for high-definition 4K/8K film productions, television broadcasts, theatre, and training. Double-sided polymer finish with 100% Australian Reserve Bank compliance.
            </p>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Free Tracked Express</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RBA Act 1981 Compliant</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Min. Price $500 AUD (25% Rate)</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>10% Crypto Discount</span>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-amber-500/15 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                <span>Explore Prop Stacks</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/compliance"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Legal & RBA Guidelines</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Polymer Note Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md p-1 bg-gradient-to-b from-slate-700/60 to-slate-800/40 rounded-2xl shadow-2xl backdrop-blur-sm">
              <div className="bg-[#0B132B] rounded-[14px] p-4">
                
                {/* Visualizer header */}
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-800 text-xs text-slate-400">
                  <span className="font-medium text-slate-200">Interactive Prop Preview</span>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">4K CAMERA READY</span>
                </div>

                {/* Banknote visual render */}
                <BanknoteVisual
                  denomination={activePreview}
                  isStack={true}
                  stagedValue={
                    activePreview === 100 ? '$10,000 AUD' :
                    activePreview === 50 ? '$5,000 AUD' :
                    activePreview === 20 ? '$2,000 AUD' : '$250,000 AUD'
                  }
                  badge={activePreview === 100 ? 'Cinema Grade' : 'Studio Strap'}
                />

                {/* Denomination Selector Tabs */}
                <div className="grid grid-cols-4 gap-1.5 mt-3 pt-2">
                  <button
                    onClick={() => setActivePreview(100)}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activePreview === 100
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    $100 Stack
                  </button>
                  <button
                    onClick={() => setActivePreview(50)}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activePreview === 50
                        ? 'bg-amber-500 text-slate-950 shadow-md'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    $50 Stack
                  </button>
                  <button
                    onClick={() => setActivePreview(20)}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activePreview === 20
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    $20 Stack
                  </button>
                  <button
                    onClick={() => setActivePreview('Mixed')}
                    className={`py-1.5 px-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                      activePreview === 'Mixed'
                        ? 'bg-slate-200 text-slate-950 shadow-md'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Briefcase
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400">
                    High-density polymer finish with anti-glare cinema coating
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
