import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, CheckCircle, Scale, FileText, ArrowLeft, ArrowRight, Truck } from 'lucide-react';

export const CompliancePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'RBA Prop Money Legal Compliance | Australia Prop Money';
  }, []);

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">RBA Legal Compliance</span>
        </nav>

        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 font-bold">
            <Scale className="w-4 h-4" />
            <span>Commonwealth of Australia · Crimes (Currency) Act 1981</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Reserve Bank of Australia & Prop Money Reproduction Guidelines
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Australia Prop Money operates with strict adherence to Commonwealth reproduction laws. Learn why our cinema-grade props are 100% legal for film, television, theatre, photography, and training.
          </p>
        </header>

        {/* Warning Banner */}
        <div className="p-6 rounded-2xl bg-rose-950/40 border border-rose-500/40 space-y-3 text-rose-200 shadow-xl">
          <div className="flex items-center gap-2 text-rose-300 font-bold text-sm sm:text-base">
            <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0" />
            <span>CRITICAL STATUTORY NOTICE: NOT LEGAL TENDER</span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            All prop banknotes sold on <strong>Australia Prop Money</strong> are exclusively manufactured for artistic, cinematic, educational, training, and stage purposes. It is a severe federal criminal offence under the <em>Crimes (Currency) Act 1981 (Cth)</em> to pass, tender, utter, or attempt to use reproduction banknotes as genuine currency in Australia. Penalties include substantial criminal fines and imprisonment.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed shadow-xl">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center">1</span>
              Reserve Bank of Australia (RBA) Reproduction Criteria
            </h2>
            <p>
              Under Australian law, the Reserve Bank of Australia (RBA) administers reproduction policies designed to protect the integrity of the national currency. For a prop banknote to be lawful, it must be readily distinguishable from genuine currency:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Mandatory Overprinting:</strong> Every note produced by Australia Prop Money is permanently and indelibly printed with prominent words including "PROP COPY", "NOT LEGAL TENDER", or "REPLICA" on both the front (obverse) and back (reverse).</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Deliberate Omission of Security Features:</strong> Genuine Australian currency incorporates micro-printing, optically variable color-shifting ink, rolling magnetic patches, raised tactile braille bumps, and authentic Governor/Secretary signatures. None of these security features are reproduced on our props.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Simulated Clear Window:</strong> The transparent window area on our prop notes features decorative film staging artwork rather than genuine holographic Reserve Bank optical devices.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-6 border-t border-slate-800">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center">2</span>
              Best Practices for Prop Masters & Film Crews On Location
            </h2>
            <p>
              When handling prop cash on Australian sets, location managers and prop masters should observe these professional safety protocols:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="bg-[#121B38] p-4 rounded-xl border border-slate-700 space-y-1">
                <strong className="text-white block text-sm">Keep Official Documentation</strong>
                <p className="text-xs text-slate-400">
                  Always store your Australia Prop Money purchase receipt, packing slip, and current production call sheet inside the prop briefcase or transport kit.
                </p>
              </div>

              <div className="bg-[#121B38] p-4 rounded-xl border border-slate-700 space-y-1">
                <strong className="text-white block text-sm">Designated Prop Custody</strong>
                <p className="text-xs text-slate-400">
                  Appoint an assistant director or prop master responsible for checking in and locking away prop money at wrap time to prevent accidental dispersal.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-6 border-t border-slate-800">
            <h2 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-400 text-slate-950 text-xs font-bold flex items-center justify-center">3</span>
              Nationwide Delivery & No Border Seizures
            </h2>
            <p>
              Many filmmakers who order cheap prop money from overseas suppliers discover that their packages get detained or destroyed by Australian Border Force (ABF) due to non-compliant dimensions or foreign counterfeiting flags.
            </p>
            <p>
              Because <strong>Australia Prop Money</strong> manufactures and dispatches directly from within Australia (Sydney & Melbourne), your orders travel securely via Australia Post Express Post with zero customs delays or seizure risks.
            </p>
          </section>

        </div>

        {/* Footer Actions */}
        <div className="p-8 rounded-2xl bg-[#121B38] border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Questions regarding legal compliance for your shoot?
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Our scenic coordinators are happy to assist production counsel and art directors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
            >
              Contact Support
            </Link>
            <Link
              to="/shop"
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium cursor-pointer"
            >
              View Shop
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
