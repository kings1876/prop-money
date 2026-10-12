import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ShieldCheck, HelpCircle } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Frequently Asked Questions | Australia Prop Money';
  }, []);

  const faqs = [
    {
      q: 'Are these prop notes 100% legal to buy and possess in Australia?',
      a: 'Yes. All prop banknotes produced by Australia Prop Money strictly adhere to the Commonwealth Crimes (Currency) Act 1981 and Reserve Bank of Australia (RBA) reproduction guidelines. Every bill is clearly and indelibly stamped with "PROP COPY / REPLICA / NOT LEGAL TENDER", does not contain genuine security watermarks or governor signatures, and differs in technical dimensions. They are manufactured solely for film, TV, theatre, training, and photography.'
    },
    {
      q: 'How fast is nationwide delivery across Australia?',
      a: 'Tracked shipping is $12.95 AUD, free on orders over $150. Orders placed before 2:00 PM AEST on business days are dispatched on the same day from our Sydney or Melbourne facilities. Metro areas (Sydney, Melbourne, Brisbane, Canberra, Adelaide) typically arrive in 1 to 2 business days. Regional areas and WA/NT take 2 to 4 business days.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept Visa, Mastercard and American Express through our secure card checkout, powered by Stripe. Production companies can also choose "Production Invoice" at checkout and we will email a tax invoice payable by EFT before dispatch.'
    },
    {
      q: 'What is the difference between "Full-Print Stacks" and "Blank-Filler Stacks"?',
      a: 'Full-Print Stacks contain 100 individual one-sided, 75% scale prop notes. Actors can fan them out, count them individually, or toss them in front of the lens. Blank-Filler Stacks feature authentic printed top and bottom $100 prop notes with 98 color-matched edge paper fillers in the middle, wrapped in an official bank strap. Blank fillers give you the exact look and thickness of a $10,000 stack at nearly half the price, making them ideal for stuffing duffel bags, briefcases, or background safes.'
    },
    {
      q: 'Will these notes jam inside a money gun (cash blaster)?',
      a: 'Standard office paper builds static and jams money guns within seconds. Our Director’s Music Video Stunt & Rain Pack is manufactured using an anti-static treated synthetic polymer that glides smoothly through motorized cash cannons at speeds up to 15 bills per second without clinging or jamming.'
    },
    {
      q: 'What happens if I try to spend or pass this prop money as real cash?',
      a: 'Passing, uttering, or attempting to use prop or reproduction money in any financial transaction is a serious federal crime in Australia under the Crimes (Currency) Act 1981, punishable by substantial fines and imprisonment. Never attempt to spend prop money or leave it in public spaces.'
    },
    {
      q: 'Is the packaging discreet?',
      a: 'Yes. All orders are shipped in plain, tamper-evident Australia Post Express mailers or unbranded sturdy corrugated boxes. There is no external mention of "prop money" or "cash" on the packaging to ensure total security and privacy during transit.'
    },
    {
      q: 'How is prop money priced?',
      a: 'Prices are based on the number of notes, not the denomination printed on them. A 100-note stack is $39 AUD whether it shows $5 or $100 notes, and larger packs get a lower per-note rate.'
    },
    {
      q: 'Can I order custom prop currency or bank wrappers for my production?',
      a: 'Yes! For feature films, streaming series, or corporate training academies ordering in bulk, we offer custom bank strap stamping (e.g. your fictional film bank name) and customized distressed lots. Contact our production desk via the Contact page.'
    }
  ];

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">FAQ & Help Center</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Customer & Prop Master Knowledge Base
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Everything you need to know about purchasing, using, and legally handling Australian prop currency.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0E162F] border border-slate-800 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="p-8 rounded-2xl bg-[#121B38] border border-slate-800 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="font-display font-bold text-lg text-white">
            Have a question not listed here?
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Our Australian prop technicians and support team respond promptly to production inquiries, rush orders, and custom script requests.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs cursor-pointer shadow-md"
            >
              Contact Support Desk
            </Link>
            <Link
              to="/compliance"
              className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-medium cursor-pointer"
            >
              Read Legal Guidelines
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
