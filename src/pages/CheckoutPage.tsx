import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';
import { BanknoteVisual } from '../components/BanknoteVisual';
import { 
  X, Check, Copy, ShieldCheck, AlertCircle, ArrowLeft, ArrowRight,
  Send, Sparkles, Truck, Lock, ShoppingBag 
} from 'lucide-react';

interface CheckoutPageProps {
  items: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  items,
  onOrderSuccess
}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    suburb: '',
    state: 'NSW',
    postcode: '',
    deliveryNotes: '',
    paymentMethod: 'crypto' as 'crypto' | 'direct_invoice',
    cryptoCoin: 'USDT_TRC20' as 'BTC' | 'ETH' | 'USDT_TRC20' | 'SOL',
    cryptoTxHash: '',
    agreeCompliance: false
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [generatedOrderNumber, setGeneratedOrderNumber] = useState('');

  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Order Form & Checkout | Australia Prop Money';
  }, []);

  const getItemPrice = (item: CartItem) => item.selectedVariant?.price || item.product.price;
  const subtotal = items.reduce((sum, item) => sum + getItemPrice(item) * item.quantity, 0);
  const isCrypto = formData.paymentMethod === 'crypto';
  const discountAmount = isCrypto ? Math.round(subtotal * 0.1) : 0;
  const shippingFee = 0; // Free express shipping nationwide
  const finalTotal = subtotal - discountAmount + shippingFee;

  const CRYPTO_WALLETS = {
    USDT_TRC20: {
      name: 'Tether USDT (TRC-20 Network)',
      address: 'TQk8v5Xw9P2M4z7L8Y1jE5sD3cF6aB9N2m',
      network: 'TRON (TRC20) - Low Network Fee ($1-$2)'
    },
    BTC: {
      name: 'Bitcoin (BTC)',
      address: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
      network: 'Native SegWit (Bitcoin Core)'
    },
    ETH: {
      name: 'Ethereum (ETH / ERC-20)',
      address: '0x71C8360538965f3d45543594892c949826F8f906',
      network: 'Ethereum Mainnet'
    },
    SOL: {
      name: 'Solana (SOL)',
      address: '7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU',
      network: 'Solana Network'
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!formData.agreeCompliance) {
      setFormError('Please tick the compliance confirmation below confirming these prop notes will be used strictly for film, television, theatre, or authorized training.');
      return;
    }

    setSubmitting(true);
    const orderNum = `APM-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedOrderNumber(orderNum);

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          subject: `New Prop Money Order ${orderNum} - Australia Prop Money`,
          from_name: formData.fullName,
          order_id: orderNum,
          customer_email: formData.email,
          customer_phone: formData.phone,
          shipping_address: `${formData.address}, ${formData.suburb} ${formData.state} ${formData.postcode}, Australia`,
          payment_method: formData.paymentMethod,
          crypto_selected: formData.cryptoCoin,
          tx_hash: formData.cryptoTxHash || 'Pending Transfer',
          subtotal: `$${subtotal} AUD`,
          discount: `-$${discountAmount} AUD (10% Crypto)`,
          total: `$${finalTotal} AUD`,
          items: items.map(i => `${i.product.name} [${i.selectedVariant?.name || 'Standard'}] (Qty: ${i.quantity}) - $${getItemPrice(i) * i.quantity} AUD`).join('\n')
        })
      }).catch(() => null);

      setTimeout(() => {
        setSubmitting(false);
        setOrderComplete(true);
        onOrderSuccess();
      }, 700);
    } catch {
      setSubmitting(false);
      setOrderComplete(true);
      onOrderSuccess();
    }
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="py-20 px-4 text-center bg-[#0B132B] min-h-screen text-slate-200">
        <div className="max-w-md mx-auto space-y-4">
          <ShoppingBag className="w-12 h-12 text-slate-500 mx-auto" />
          <h1 className="font-display font-bold text-2xl text-white">Your Order Bag is Empty</h1>
          <p className="text-xs text-slate-400">
            Please add Australian prop money stacks to your bag before proceeding to checkout.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <Link to="/shop" className="hover:text-amber-400 transition-colors">Shop</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium">Order Form Checkout</span>
        </nav>

        {orderComplete ? (
          /* Confirmation Screen */
          <div className="bg-[#0E162F] border border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Order Received Successfully
              </span>
              <h1 className="font-display text-3xl font-extrabold text-white">
                Order #{generatedOrderNumber}
              </h1>
              <p className="text-sm text-slate-300">
                Thank you, <strong>{formData.fullName}</strong>. Your Australian prop order has been logged into our Sydney dispatch queue.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#121B38] border border-slate-700/80 rounded-xl p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between pb-2 border-b border-slate-700">
                <span className="text-slate-400">Recipient Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-700">
                <span className="text-slate-400">Delivery Address:</span>
                <span className="text-white font-medium text-right">
                  {formData.address}, {formData.suburb} {formData.state} {formData.postcode}
                </span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-700">
                <span className="text-slate-400">Payment Selected:</span>
                <span className="text-amber-400 font-medium capitalize">
                  {isCrypto ? `Crypto (${formData.cryptoCoin}) - 10% Discount Applied` : 'Direct Production Invoice'}
                </span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-bold text-white">
                <span>Total Amount:</span>
                <span className="font-mono text-amber-300">${finalTotal} AUD</span>
              </div>
            </div>

            {isCrypto && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left text-xs space-y-2">
                <div className="font-semibold text-amber-300">
                  Next Step: Complete Crypto Transfer
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Please send <strong>${finalTotal} AUD</strong> equivalent to the {formData.cryptoCoin} wallet address provided. Our dispatch team cross-references blockchain transfers immediately.
                </p>
              </div>
            )}

            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors"
              >
                <span>Continue Browsing Shop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Main 2-Column Checkout Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Details */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              {/* Step 1: Customer Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center">1</span>
                    Australian Shipping Address
                  </h2>
                  <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5" />
                    Free Express Tracked
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Liam Campbell"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email Address (for tracking & receipt) *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="production@studio.com.au"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Mobile Phone (for AusPost SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Level 2, 45 Studio Lane"
                      className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:col-span-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        City / Suburb *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="Surry Hills"
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        State *
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="NSW">NSW</option>
                        <option value="VIC">VIC</option>
                        <option value="QLD">QLD</option>
                        <option value="WA">WA</option>
                        <option value="SA">SA</option>
                        <option value="TAS">TAS</option>
                        <option value="ACT">ACT</option>
                        <option value="NT">NT</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.postcode}
                        onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                        placeholder="2010"
                        className="w-full bg-[#121B38] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center justify-center">2</span>
                    Payment Method
                  </h2>
                  <span className="text-xs text-amber-400 font-bold">10% Crypto Discount</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'crypto' })}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'crypto'
                        ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                        : 'border-slate-800 bg-[#121B38] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white">Cryptocurrency</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950">
                        SAVE 10%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Instant checkout with USDT, BTC, ETH, or SOL.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'direct_invoice' })}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                      formData.paymentMethod === 'direct_invoice'
                        ? 'border-amber-400 bg-amber-500/10 text-white shadow-md'
                        : 'border-slate-800 bg-[#121B38] text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-xs text-white">Direct Production Invoice</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      We email a formal tax invoice payable by Australian PayID / EFT.
                    </p>
                  </button>
                </div>

                {/* Crypto Wallet Details */}
                {isCrypto && (
                  <div className="bg-[#090E20] border border-amber-500/30 rounded-xl p-4 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-300 font-medium">Select Crypto:</span>
                      {(['USDT_TRC20', 'BTC', 'ETH', 'SOL'] as const).map((coin) => (
                        <button
                          key={coin}
                          type="button"
                          onClick={() => setFormData({ ...formData, cryptoCoin: coin })}
                          className={`px-3 py-1 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                            formData.cryptoCoin === coin
                              ? 'bg-amber-400 text-slate-950 font-bold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          {coin === 'USDT_TRC20' ? 'USDT (TRC-20)' : coin}
                        </button>
                      ))}
                    </div>

                    <div className="p-3 bg-[#0E162F] rounded-lg border border-slate-700/80 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-amber-300">
                          {CRYPTO_WALLETS[formData.cryptoCoin].name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {CRYPTO_WALLETS[formData.cryptoCoin].network}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 bg-[#080C1B] p-2 rounded border border-slate-800">
                        <span className="font-mono text-[11px] text-white break-all flex-1 select-all">
                          {CRYPTO_WALLETS[formData.cryptoCoin].address}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(CRYPTO_WALLETS[formData.cryptoCoin].address, 'wallet')}
                          className="px-2.5 py-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded text-[11px] flex items-center gap-1 cursor-pointer shrink-0"
                        >
                          {copiedKey === 'wallet' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                          <span>{copiedKey === 'wallet' ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-400 mt-2 mb-1">
                          Transaction Hash / ID (Optional - or reply to email)
                        </label>
                        <input
                          type="text"
                          value={formData.cryptoTxHash}
                          onChange={(e) => setFormData({ ...formData, cryptoTxHash: e.target.value })}
                          placeholder="e.g. 7e9b... or 'Sending now'"
                          className="w-full bg-[#121B38] border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Legal Compliance Agreement */}
              <div className="pt-2 border-t border-slate-800 space-y-4">
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer p-3 bg-slate-900/60 border border-slate-800 rounded-lg">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreeCompliance}
                    onChange={(e) => {
                      setFormData({ ...formData, agreeCompliance: e.target.checked });
                      if (e.target.checked) setFormError(null);
                    }}
                    className="mt-0.5 rounded border-slate-700 text-amber-400 focus:ring-amber-400"
                  />
                  <span>
                    <strong>Legal Compliance Acknowledgement:</strong> I confirm that these prop banknotes are purchased solely for film, television, theatre, photography, or training purposes. I acknowledge that passing or attempting to spend prop reproduction currency as genuine money is a Commonwealth offence under the <em>Crimes (Currency) Act 1981</em>.
                  </span>
                </label>
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  {submitting ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm & Place Order (${finalTotal} AUD)</span>
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Right Column: Order Summary & Item List */}
            <div className="lg:col-span-5 bg-[#0E162F] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl sticky top-24">
              <h2 className="font-display font-bold text-lg text-white border-b border-slate-800 pb-3">
                Order Summary ({items.reduce((a, b) => a + b.quantity, 0)} Items)
              </h2>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => {
                  const itemPrice = getItemPrice(item);
                  const variantKey = item.selectedVariant?.id || 'std';
                  return (
                    <div key={`${item.product.id}-${variantKey}`} className="flex gap-3 items-center py-2 border-b border-slate-800/80 last:border-b-0">
                      <div className="w-16 h-12 rounded bg-[#0A0F22] overflow-hidden shrink-0">
                        <BanknoteVisual
                          currency={item.product.currency}
                          denomination={item.product.denomination}
                          isStack={false}
                          className="!aspect-auto h-full !p-0.5"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-white truncate">{item.product.name}</h4>
                        {item.selectedVariant && (
                          <p className="text-[11px] text-amber-300 font-medium truncate">{item.selectedVariant.name}</p>
                        )}
                        <span className="text-[11px] text-slate-400">Qty: {item.quantity}</span>
                      </div>
                      <span className="font-display font-bold text-xs text-white tabular-nums">
                        ${itemPrice * item.quantity} AUD
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Price Calculation Box */}
              <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1.5 px-2.5 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-300">
                  <span className="font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Prop Money Delivered:
                  </span>
                  <span className="font-mono font-bold">${subtotal * 4} Staged Value</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Pricing (25% Rate):</span>
                  <span className="font-mono text-white font-bold">${subtotal} AUD</span>
                </div>
                {isCrypto && (
                  <div className="flex justify-between text-amber-400 font-semibold">
                    <span>10% Crypto Discount:</span>
                    <span className="font-mono">-${discountAmount} AUD</span>
                  </div>
                )}
                <div className="flex justify-between text-emerald-400">
                  <span>Australia Post Express:</span>
                  <span className="font-semibold">FREE</span>
                </div>
                <div className="pt-3 border-t border-slate-800 flex justify-between items-baseline font-bold text-white text-base">
                  <span>Total Due:</span>
                  <span className="font-display font-extrabold text-2xl text-amber-300 tabular-nums">
                    ${finalTotal} <span className="text-xs font-normal text-slate-400">AUD</span>
                  </span>
                </div>
              </div>

              {/* Security note */}
              <div className="p-3 rounded-lg bg-[#121B38] border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST Included · Plain Unmarked Packaging Guarantee</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
