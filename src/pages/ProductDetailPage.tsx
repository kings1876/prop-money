import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, ProductVariant } from '../types';
import { BanknoteVisual } from '../components/BanknoteVisual';
import { 
  ShieldCheck, Truck, Sparkles, Plus, Minus, ArrowRight, 
  ArrowLeft, Check, AlertCircle, Share2, Layers, CheckCircle2 
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  onAddToCart: (product: Product, quantity: number, variant?: ProductVariant) => void;
  onBuyNow: (product: Product, quantity: number, variant?: ProductVariant) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  onBuyNow
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const product = PRODUCTS.find((p) => p.slug === slug);

  // Selected variable variant
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      document.title = `${product.name} | Australia Prop Money`;

      // Update meta tags for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.name}. ${product.shortDescription} Buy realistic motion picture prop money online with discreet tracked dispatch.`);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords && product.seoKeywords) {
        metaKeywords.setAttribute('content', product.seoKeywords.join(', '));
      }

      // Dynamic JSON-LD structured data for Product
      const scriptId = 'product-json-ld';
      let jsonLdScript = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.id = scriptId;
        jsonLdScript.type = 'application/ld+json';
        document.head.appendChild(jsonLdScript);
      }

      const defaultVar = product.variants?.find((v) => v.isDefault) || product.variants?.[0] || {
        id: 'default',
        name: `Single Stack (${product.noteCount} Notes)`,
        price: product.price,
        comparePrice: product.comparePrice,
        noteCount: product.noteCount,
        stagedValue: product.stagedValue
      };
      setSelectedVariant(defaultVar);

      jsonLdScript.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        category: product.category,
        sku: product.id,
        keywords: product.seoKeywords?.join(', '),
        brand: {
          '@type': 'Brand',
          name: 'Australia Prop Money'
        },
        offers: {
          '@type': 'Offer',
          url: window.location.href,
          priceCurrency: 'AUD',
          price: defaultVar.price,
          itemCondition: 'https://schema.org/NewCondition',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Australia Prop Money'
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '138',
          bestRating: '5',
          worstRating: '1'
        }
      });
    }

    return () => {
      const script = document.getElementById('product-json-ld');
      if (script) {
        script.remove();
      }
    };
  }, [slug, product]);

  if (!product) {
    return (
      <div className="py-20 px-4 text-center bg-[#0B132B] min-h-screen text-slate-200">
        <div className="max-w-md mx-auto space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
          <h1 className="font-display font-bold text-2xl text-white">Product Not Found</h1>
          <p className="text-xs text-slate-400">
            The requested prop money item could not be found.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Shop Catalog</span>
          </Link>
        </div>
      </div>
    );
  }

  const currentVariant = selectedVariant || {
    id: 'default',
    name: `Standard (${product.noteCount} Notes)`,
    price: product.price,
    comparePrice: product.comparePrice,
    noteCount: product.noteCount,
    stagedValue: product.stagedValue
  };

  const currentPrice = currentVariant.price;

  const handleAdd = () => {
    onAddToCart(product, quantity, currentVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuy = () => {
    onBuyNow(product, quantity, currentVariant);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related products from same currency category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <div className="py-10 bg-[#0B132B] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation with explicit URLs */}
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <Link to="/shop" className="hover:text-amber-400 transition-colors">Shop</Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-amber-400 transition-colors">
            {product.category}
          </Link>
          <span aria-hidden="true" className="text-slate-600">/</span>
          <span className="text-slate-200 font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
        </nav>

        {/* Product Purchase Grid */}
        <div className="bg-[#0E162F] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left: Product Visual Presentation */}
          <div className="lg:col-span-6 bg-[#080D1D] p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
                <span className="font-mono text-amber-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  AUTHENTIC {product.currency} FILM SPECIMEN
                </span>
                <span className="text-slate-400">SKU: {product.id}</span>
              </div>

              {/* Banknote visual render */}
              <div className="py-6">
                <BanknoteVisual
                  currency={product.currency}
                  denomination={product.denomination}
                  isStack={true}
                  stagedValue={currentVariant.stagedValue || product.stagedValue}
                  badge={product.badge}
                />
              </div>
            </div>

            {/* Trust and Compliance details under visual */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Legal Compliance Guarantee:</strong> Double-sided printed with indelible "PROP COPY / NOT LEGAL TENDER" disclaimers.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Free Express Tracked Delivery:</strong> Ships nationwide across Australia with discreet plain packaging.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Contiguous Purchase Module with Variable Pricing */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category, Subcategory & Share */}
              <div className="flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Link 
                    to={`/shop?category=${encodeURIComponent(product.category)}`}
                    className="uppercase tracking-widest text-[11px] font-bold text-amber-400 hover:underline"
                  >
                    {product.category}
                  </Link>
                  <span>·</span>
                  <span>{product.subcategory}</span>
                  {product.badge && (
                    <>
                      <span>·</span>
                      <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold text-[10px]">
                        {product.badge}
                      </span>
                    </>
                  )}
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer text-xs"
                  title="Share product link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              {/* Title & Staged Value */}
              <div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                  {product.name}
                </h1>
                <div className="mt-1.5 text-sm text-amber-300 font-mono font-medium">
                  Staged Cinematic Value: {currentVariant.stagedValue} ({currentVariant.noteCount} Notes)
                </div>
              </div>

              {/* Guaranteed 25% Delivery Pricing Box */}
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Fixed 25% Delivery Rate:
                  </span>
                  <span className="text-emerald-300 font-mono text-[11px] font-semibold bg-emerald-900/60 px-2 py-0.5 rounded border border-emerald-700/50">
                    Pay 25% of Delivered Value
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1.5 border-t border-emerald-900/60">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Prop Cash to be Delivered:</span>
                    <span className="font-bold text-white font-mono text-base">{currentVariant.stagedValue}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Delivery Price (25%):</span>
                    <span className="font-bold text-amber-400 font-mono text-base">${currentPrice} AUD</span>
                  </div>
                </div>
              </div>

              {/* Price & Crypto Discount Highlight */}
              <div className="pt-2 border-t border-slate-800">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tabular-nums">
                    ${currentPrice} <span className="text-sm font-sans font-normal text-slate-400">AUD</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                    Free Express Shipping
                  </span>
                  <span className="text-xs text-amber-300 font-medium px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/40">
                    Min. Price $500 AUD
                  </span>
                </div>

                {/* 10% Crypto Discount Notice */}
                <div className="mt-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Pay with Crypto & Save 10%:</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200 text-sm tabular-nums">
                    ${Math.round(currentPrice * 0.9)} AUD
                  </span>
                </div>
              </div>

              {/* Variable Price Variant Selection Box */}
              {product.variants && product.variants.length > 1 && (
                <div className="pt-2 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-amber-400" />
                      Select Quantity & Staging Tier (Variable Price):
                    </span>
                    <span className="text-amber-400 font-medium">
                      Selected: {currentVariant.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.variants.map((v) => {
                      const isSelected = currentVariant.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                            isSelected
                              ? 'bg-amber-500/15 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                              : 'bg-[#121B38] border-slate-700/80 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs text-white">{v.name}</span>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />}
                          </div>
                          <div className="mt-1 flex items-baseline justify-between">
                            <span className="text-[11px] text-amber-300 font-mono">{v.stagedValue}</span>
                            <span className="font-display font-extrabold text-xs text-white">${v.price} AUD</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {product.description}
              </p>

              {/* Production Features */}
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Features & On-Set Capabilities
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-[#121B38] border border-slate-800 rounded-xl p-4 text-xs text-slate-300 space-y-2">
                <div className="flex justify-between pb-1.5 border-b border-slate-700/80">
                  <span className="text-slate-400">Dimensions:</span>
                  <span className="text-white font-medium">{product.specs.dimensions}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-700/80">
                  <span className="text-slate-400">Substrate Material:</span>
                  <span className="text-white font-medium">{product.specs.material}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-700/80">
                  <span className="text-slate-400">Print Finish:</span>
                  <span className="text-white font-medium">{product.specs.printType}</span>
                </div>
                <div className="flex justify-between pb-1.5 border-b border-slate-700/80">
                  <span className="text-slate-400">Legal Markings:</span>
                  <span className="text-white font-medium">{product.specs.legalMarkings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Currency Strap:</span>
                  <span className="text-white font-medium">{product.specs.strapType}</span>
                </div>
              </div>

              {/* SEO Target Keywords & Production Search Tags */}
              {product.seoKeywords && product.seoKeywords.length > 0 && (
                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>SEO Target Keywords & Search Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.seoKeywords.map((kw, i) => (
                      <Link
                        key={i}
                        to={`/shop?q=${encodeURIComponent(kw)}`}
                        className="px-2.5 py-1 rounded-md bg-[#121B38] hover:bg-amber-400 hover:text-slate-950 text-slate-300 text-[11px] font-medium transition-colors border border-slate-700/80"
                      >
                        #{kw}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-slate-300">Packs Quantity:</span>
                  <div className="flex items-center border border-slate-700 rounded-lg bg-[#121B38] overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold tabular-nums text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2.5 text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total:</span>
                  <span className="font-display font-bold text-lg text-white tabular-nums">
                    ${currentPrice * quantity} AUD
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={handleAdd}
                  className={`py-3.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    added
                      ? 'bg-emerald-500 text-white shadow-lg'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      <span>Add to Order Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuy}
                  className="py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <span>Order Now via Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-center">
                <Link
                  to="/compliance"
                  className="text-[11px] text-slate-400 hover:text-amber-400 underline underline-offset-4 transition-colors"
                >
                  View Reserve Bank & Crimes (Currency) Act 1981 Compliance Guide
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Related Products Section from same currency category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  More {product.category} Prop Notes
                </h3>
                <p className="text-xs text-slate-400">
                  Complete your currency set for multi-scene film dressing.
                </p>
              </div>
              <Link
                to={`/shop?category=${encodeURIComponent(product.category)}`}
                className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1"
              >
                <span>View All {product.category}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onQuickView={() => navigate(`/product/${p.slug}`)}
                  onAddToCart={(prod, v) => onAddToCart(prod, 1, v)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
