import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Film, Truck, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'About Australia Prop Money | Australia’s Premier Prop Currency';
  }, []);

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">About Australia Prop Money</span>
        </nav>

        {/* Hero Section */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Established 17 May 2018 · Australia
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Crafting Australia’s Most Realistic & Compliant Prop Currency
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Founded in Australia to provide local art departments, indie filmmakers, theatre companies, and security trainers with authentic, compliant polymer prop money delivered fast nationwide.
          </p>
        </div>

        {/* Milestone & Founding Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-bold text-white">
              Why Australia Prop Money Was Founded
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Back in early 2018, Australian filmmakers faced a frustrating dilemma when shooting cash scenes: either import cheap paper foreign replicas that frequently got flagged or seized by Australian Border Force, or settle for cartoonish counterfeit notes that looked completely fake in high-definition 4K camera close-ups.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              On <strong>17 May 2018</strong>, our scenic art team launched <strong>Australia Prop Money</strong>. We engineered a proprietary synthetic polymer substrate with the flex and matte finish that reads well on camera, printed one-sided at 75% scale, while rigorously complying with the Commonwealth <em>Crimes (Currency) Act 1981</em> and Reserve Bank guidelines.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-amber-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Over 2,140+ 5-Star Reviews
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Australian Dispatched
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Border Seizure Risk
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121B38] border border-slate-700/80 rounded-xl p-6 space-y-4">
            <h3 className="font-display font-bold text-base text-white border-b border-slate-700 pb-2">
              Key Milestones
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex gap-3">
                <span className="font-mono font-bold text-amber-400 shrink-0">17 May 2018</span>
                <span className="text-slate-300">Founded in Australia by professional film prop coordinators.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono font-bold text-amber-400 shrink-0">2019</span>
                <span className="text-slate-300">Introduced anti-glare polymer coating, eliminating studio lighting flare.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono font-bold text-amber-400 shrink-0">2021</span>
                <span className="text-slate-300">Became primary prop currency supplier for major Australian streaming productions.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono font-bold text-amber-400 shrink-0">2024</span>
                <span className="text-slate-300">Surpassed 2,000 verified Trustpilot reviews with a 4.9/5 rating.</span>
              </div>
              <div className="flex gap-3">
                <span className="font-mono font-bold text-amber-400 shrink-0">2026</span>
                <span className="text-slate-300">Upgraded to nationwide express dispatch and secure card checkout.</span>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              The Production Standard
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              What Sets Australia Prop Money Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0E162F] border border-slate-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Film className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Camera-Tuned Anti-Glare Finish</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Genuine polymer banknotes reflect studio lighting, causing blown-out highlights. Our props feature an anti-reflective matte coating that preserves rich colors under 4K lenses.
              </p>
            </div>

            <div className="bg-[#0E162F] border border-slate-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Total RBA Legal Compliance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Every note is stamped with mandatory legal disclaimers compliant with the Crimes (Currency) Act 1981, giving producers complete peace of mind on set.
              </p>
            </div>

            <div className="bg-[#0E162F] border border-slate-800 rounded-xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base">Discreet Tracked Australian Express</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                All orders are packed in unmarked, tamper-evident mailers and dispatched directly from Australia, avoiding international customs delays or seizures.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#121B38] to-[#1C2541] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              Ready to stage your next production?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Order individual stacks or full director briefcase kits with free nationwide express shipping.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/shop"
              className="px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer shadow-md"
            >
              Explore Shop
            </Link>
            <Link
              to="/compliance"
              className="px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium cursor-pointer"
            >
              Legal Specs
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
