import React from 'react';
import { X, ShieldAlert, CheckCircle, Scale, FileText } from 'lucide-react';

interface LegalNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalNoticeModal: React.FC<LegalNoticeModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="relative w-full max-w-3xl bg-[#0D1630] border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="bg-[#121B38] px-6 py-5 border-b border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                RBA Prop Money Legal Compliance
              </h2>
              <p className="text-xs text-slate-400">
                Commonwealth of Australia · Crimes (Currency) Act 1981
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close legal notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-xs text-slate-300 leading-relaxed max-h-[75vh] overflow-y-auto">
          
          {/* Important Warning Banner */}
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-start gap-3 text-rose-200">
            <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-sm text-rose-100">
                STRICT LEGAL NOTICE: NOT LEGAL TENDER
              </span>
              <p>
                All products sold by Australia Prop Money are strictly manufactured as artistic props for film, television, theatre, photography, and training. It is a severe federal criminal offence under the <strong>Crimes (Currency) Act 1981</strong> to pass, utter, or attempt to spend reproduction banknotes as genuine currency in Australia.
              </p>
            </div>
          </div>

          {/* Section 1: Reserve Bank of Australia Reproduction Rules */}
          <div className="space-y-2">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400" />
              1. Reserve Bank of Australia (RBA) Reproduction Guidelines
            </h3>
            <p>
              The Reserve Bank of Australia regulates reproductions of Australian banknotes to prevent counterfeiting and fraud. To remain fully lawful, prop banknotes must be readily distinguishable from genuine currency. Australia Prop Money adheres to these standards:
            </p>
            <ul className="space-y-1.5 pl-3 border-l-2 border-amber-400/40 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Mandatory Disclaimers:</strong> Every prop note is indelibly printed with "PROP COPY", "NOT LEGAL TENDER", or "REPLICA" on obverse and reverse faces.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Security Feature Omission:</strong> We omit genuine micro-print security features, genuine optically variable ink, tactile raised braille bumps, and genuine Governor signatures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Architectural & Portrait Variations:</strong> All internal line-work is custom-drawn scenic art adapted specifically for on-camera staging.</span>
              </li>
            </ul>
          </div>

          {/* Section 2: On-Set Handling & Best Practices */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              2. Best Practices for Australian Film Crews & Prop Masters
            </h3>
            <p>
              When using prop money on location or in public areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="bg-[#121B38] p-3 rounded-lg border border-slate-700">
                <strong className="text-white block mb-1">Production Documentation</strong>
                <span>Always keep your Australia Prop Money receipt and official production call sheet alongside prop cash cases when shooting on location.</span>
              </div>
              <div className="bg-[#121B38] p-3 rounded-lg border border-slate-700">
                <strong className="text-white block mb-1">Secure Transportation</strong>
                <span>Never carry loose prop stacks in open public view (e.g. coffee shops or retail stores) to avoid public alarm or police callouts.</span>
              </div>
            </div>
          </div>

          {/* Section 3: Buyer Responsibility */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              3. Buyer Representation & Warranties
            </h3>
            <p>
              By ordering from this site, you certify under penalty of law that you are purchasing these props solely for theatrical, cinematic, educational, training, or artistic purposes, and that you will not use them in any unlawful financial transaction.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#121B38] px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer"
          >
            I Understand & Agree
          </button>
        </div>

      </div>
    </div>
  );
};
