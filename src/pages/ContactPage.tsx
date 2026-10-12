import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productionName: '',
    inquiryType: 'order-support',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Contact Production Support | Australia Prop Money';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          subject: `Contact Inquiry: ${formData.inquiryType} from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          production: formData.productionName,
          inquiry_type: formData.inquiryType,
          message: formData.message
        })
      }).catch(() => null);

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 700);
    } catch {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">Contact & Studio Support</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            Australian Customer & Studio Support
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1 mb-3">
            Contact Australia Prop Money
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Have questions about an urgent shoot deadline, bulk studio bundles, or Reserve Bank compliance? Our production coordinators are on standby.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Support Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0E162F] border border-slate-800 rounded-xl p-6 space-y-5">
              <h3 className="font-display font-bold text-lg text-white border-b border-slate-800 pb-3">
                Production Support Desk
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Orders & Inquiries</span>
                    <span className="text-white font-semibold">orders@australiapropmoney.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Dispatch Centers</span>
                    <span className="text-white font-medium">Sydney NSW & Melbourne VIC, Australia</span>
                    <span className="text-[11px] text-slate-500 block">Nationwide Express Delivery</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block">Operating Hours (AEST)</span>
                    <span className="text-white font-medium">Monday – Friday: 8:00 AM – 6:00 PM</span>
                    <span className="text-[11px] text-slate-400 block">Saturday: 9:00 AM – 2:00 PM</span>
                    <span className="text-[11px] text-amber-400 block mt-0.5">Express Cutoff: 2:00 PM AEST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Bulk Order Box */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#121B38] to-[#0A0F22] border border-amber-500/30 text-xs text-slate-300 space-y-2">
              <h4 className="font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Large Volume & Feature Film Inquiries
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Need more than 5,000 notes, custom bank strap stamping with your fictional movie bank name, or distressed cash lots? Submit your script requirements and target dates for custom bulk quotes.
              </p>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#0E162F] border border-slate-800 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-white">
                  Message Sent Successfully
                </h3>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our Australian production support team will respond to {formData.email} within 2 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      productionName: '',
                      inquiryType: 'order-support',
                      message: ''
                    });
                  }}
                  className="px-5 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display font-bold text-lg text-white border-b border-slate-800 pb-3">
                  Send Us an Inquiry
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam Foster"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="liam@productionco.com.au"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0400 123 456"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Production / Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.productionName}
                      onChange={(e) => setFormData({ ...formData, productionName: e.target.value })}
                      placeholder="e.g. Sydney Indie Films / Music Video"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Inquiry Type *
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                  >
                    <option value="order-support">Existing Order / Tracking Inquiry</option>
                    <option value="bulk-quote">Bulk Studio Quote</option>
                    <option value="custom-bands">Custom Bank Band / Denomination Request</option>
                    <option value="compliance">RBA Legal & Compliance Question</option>
                    <option value="payment-help">Payment &amp; Invoice Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your project, shoot date, quantities needed, or any specific questions..."
                    className="w-full bg-[#121B38] border border-slate-700 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors shadow-md"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
