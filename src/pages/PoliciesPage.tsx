import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Truck, RotateCcw, Lock, FileText, ArrowLeft } from 'lucide-react';

interface PoliciesPageProps {
  policyType: 'shipping' | 'refund' | 'privacy' | 'terms';
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ policyType }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const titles = {
      shipping: 'Shipping & Delivery Information | Australia Prop Money',
      refund: 'Refund & Return Policy | Australia Prop Money',
      privacy: 'Privacy Policy | Australia Prop Money',
      terms: 'Terms of Service | Australia Prop Money'
    };
    document.title = titles[policyType];
  }, [policyType]);

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium capitalize">{policyType} Policy</span>
        </nav>

        {/* Tab Controls with real individual URLs */}
        <div className="flex flex-wrap gap-2 p-1 bg-[#121B38] border border-slate-800 rounded-xl text-xs">
          <NavLink
            to="/shipping"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`
            }
          >
            <Truck className="w-3.5 h-3.5" />
            <span>Shipping Policy</span>
          </NavLink>

          <NavLink
            to="/refund"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`
            }
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Refund Policy</span>
          </NavLink>

          <NavLink
            to="/privacy"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`
            }
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Privacy Policy</span>
          </NavLink>

          <NavLink
            to="/terms"
            className={({ isActive }) =>
              `flex items-center gap-1.5 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
                isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'text-slate-300 hover:text-white'
              }`
            }
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Terms of Service</span>
          </NavLink>
        </div>

        {/* Policy Content */}
        <div className="bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-10 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed shadow-xl">
          
          {policyType === 'shipping' && (
            <div className="space-y-4">
              <h1 className="font-display font-bold text-2xl text-white">
                Australian Shipping & Express Delivery
              </h1>
              <p>
                At <strong>Australia Prop Money</strong>, we understand that production deadlines and call times are non-negotiable. That is why we provide fast, tracked Australian dispatch directly from our facilities in Sydney and Melbourne.
              </p>
              
              <h2 className="font-bold text-white text-base pt-2">1. Free Nationwide Express Shipping</h2>
              <p>
                Every order placed on Australia Prop Money qualifies for complimentary <strong>Australia Post Express Post</strong> shipping with full online tracking and SMS milestone alerts.
              </p>

              <h2 className="font-bold text-white text-base pt-2">2. Same-Day Dispatch Cutoff</h2>
              <p>
                Orders confirmed before <strong>2:00 PM Australian Eastern Standard Time (AEST)</strong> on business days (Monday through Friday) are dispatched on the same day. Orders received after 2:00 PM or on weekends will be dispatched the next business morning.
              </p>

              <h2 className="font-bold text-white text-base pt-2">3. Transit Time Estimates</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Sydney, Melbourne, Brisbane & Canberra Metro:</strong> 1 to 2 business days.</li>
                <li><strong>Adelaide, Perth & Hobart Metro:</strong> 2 to 3 business days.</li>
                <li><strong>Regional & Remote Australia (including NT & WA Country):</strong> 2 to 4 business days.</li>
              </ul>

              <h2 className="font-bold text-white text-base pt-2">4. Discreet Packaging Guarantee</h2>
              <p>
                All prop money shipments are enclosed in opaque, tamper-evident plain postal satchels or unmarked heavy cardboard boxes. There are zero external labels indicating "cash" or "prop currency", ensuring total discretion and security for your crew.
              </p>
            </div>
          )}

          {policyType === 'refund' && (
            <div className="space-y-4">
              <h1 className="font-display font-bold text-2xl text-white">
                Refund & Return Policy
              </h1>
              <p>
                Due to the specialized nature of film, television, and theatrical props, please review our return and replacement terms:
              </p>

              <h2 className="font-bold text-white text-base pt-2">1. Defective or Damaged In Transit</h2>
              <p>
                If your order arrives damaged, torn, or with any manufacturing flaw, contact us within 48 hours of delivery at <strong>orders@australiapropmoney.com</strong> with photos of the damaged items and postal packaging. We will rush an immediate Express replacement at zero cost to you.
              </p>

              <h2 className="font-bold text-white text-base pt-2">2. Order Cancellations Prior to Dispatch</h2>
              <p>
                You may cancel your order for a 100% refund provided it has not yet been processed and handed over to Australia Post. Because orders placed before 2:00 PM AEST are packed rapidly, please contact our support desk immediately if you need to modify your order.
              </p>

              <h2 className="font-bold text-white text-base pt-2">3. Used Props On Set</h2>
              <p>
                Items that have been opened, handled on camera, exposed to simulated rain, or creased during film shoots cannot be returned for change of mind due to Australian hygiene and security standards for reproduction currency.
              </p>
            </div>
          )}

          {policyType === 'privacy' && (
            <div className="space-y-4">
              <h1 className="font-display font-bold text-2xl text-white">
                Privacy Policy & Data Security
              </h1>
              <p>
                Australia Prop Money strictly respects the privacy of filmmakers, talent, and production companies. We comply with the <em>Australian Privacy Principles (APPs)</em> contained in the <em>Privacy Act 1988 (Cth)</em>.
              </p>

              <h2 className="font-bold text-white text-base pt-2">1. Information We Collect</h2>
              <p>
                We only collect information strictly required to process and deliver your order: your name, shipping address, contact email, and telephone number for carrier tracking updates.
              </p>

              <h2 className="font-bold text-white text-base pt-2">2. No Storage of Payment Credentials</h2>
              <p>
                We never see or store your card details. Card payments are processed securely by Stripe, a PCI DSS Level 1 certified payment provider.
              </p>

              <h2 className="font-bold text-white text-base pt-2">3. Non-Disclosure & Confidentiality</h2>
              <p>
                We never sell, rent, or disclose customer identities, script names, or production titles to any third-party marketing companies.
              </p>
            </div>
          )}

          {policyType === 'terms' && (
            <div className="space-y-4">
              <h1 className="font-display font-bold text-2xl text-white">
                Terms of Service & Buyer Compliance
              </h1>
              <p>
                By placing an order with <strong>Australia Prop Money</strong>, you enter into a legally binding agreement confirming the following warranties and covenants:
              </p>

              <h2 className="font-bold text-white text-base pt-2">1. Theatrical & Educational Use Only</h2>
              <p>
                You warrant that you are purchasing reproduction prop currency exclusively for artistic, cinematic, television, theatrical, educational, or training purposes.
              </p>

              <h2 className="font-bold text-white text-base pt-2">2. Crimes (Currency) Act 1981 Compliance</h2>
              <p>
                You acknowledge and agree that it is a serious Commonwealth criminal offence under the <em>Crimes (Currency) Act 1981</em> to pass, utter, tender, or attempt to use reproduction currency in any financial transaction or with intention to defraud. Australia Prop Money cooperates fully with Commonwealth and State law enforcement agencies where misuse is detected.
              </p>

              <h2 className="font-bold text-white text-base pt-2">3. Intellectual Property & Design</h2>
              <p>
                All custom artwork, typography, and anti-glare textures developed for Australia Prop Money are the proprietary property of the business and may not be scanned, reprinted, or mass-produced without express written license.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
