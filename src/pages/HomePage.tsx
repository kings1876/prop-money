import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  Truck,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Star,
  CheckCircle2,
  Clock,
  Layers,
  Film,
  Tv,
  Music2,
  HelpCircle,
  Eye,
  ShoppingBag,
  ExternalLink,
  Sliders,
  DollarSign,
  AlertCircle
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductVariant } from '../types';
import { ProductImage } from '../components/ProductImage';
import { priceForNotes } from '../lib/pricing';
import { TRUSTPILOT_STATS, REVIEWS } from '../data/reviews';
import { BLOG_POSTS } from '../data/blog';
import { CurrencyCode } from '../types';

// Product photo to show for a currency/denomination (falls back to any note in that currency).
const productFor = (currency: CurrencyCode, denomination: Product['denomination']) =>
  PRODUCTS.find((p) => p.currency === currency && p.denomination === denomination) ??
  PRODUCTS.find((p) => p.currency === currency) ??
  PRODUCTS[0];

// Product photo shown on each blog article card.
const ARTICLE_IMAGE: Record<string, string> = {
  'legal-guide-prop-money-australia-rba-compliance': '100-aud-prop-stack-10000',
  'how-directors-stage-million-dollar-cash-stacks-camera': '100-usd-blue-ribbon-prop-stack',
  'hollywood-secrets-stretching-prop-money-budget': '50-eur-prop-stack-5000',
  'why-security-academies-use-polymer-prop-currency': '50-aud-prop-stack-5000'
};
const articleProduct = (slug: string) => PRODUCTS.find((p) => p.slug === ARTICLE_IMAGE[slug]) ?? PRODUCTS[0];

interface HomePageProps {
  onAddToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  onQuickView: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onAddToCart, onQuickView }) => {
  const navigate = useNavigate();

  // Hero carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroSlides = [
    {
      title: "PREMIUM THEATRICAL PROP MONEY",
      highlight: "RANGE IN AUSTRALIA",
      tagline: "AUSTRALIA'S #1 PROP MONEY SPECIALISTS • 4.9/5 ON TRUSTPILOT",
      description: "From $39 AUD single stacks to 1,000-note studio lots — one-sided, 75% scale polymer-feel notes with large PROP COPY markings, 24hr dispatch.",
      stagedSample: "$10,000 AUD",
      priceSample: "$39 AUD",
      notesSample: "100x $100 Banknotes",
      denomination: 100 as const,
      currency: 'AUD' as const,
      badge: "NEXT-GEN POLYMER"
    },
    {
      title: "HOLLYWOOD FILM GRADE",
      highlight: "USD CURRENCY STACKS",
      tagline: "CINEMA STANDARD • 4K & 8K CAMERA CALIBRATED • ONE-SIDED",
      description: "Crisp US dollar-style prop bills at 75% scale. Fitted with official currency straps, designed specifically for close-up cinema camera framing.",
      stagedSample: "$20,000 USD",
      priceSample: "$69 AUD",
      notesSample: "200x $100 Franklin Notes",
      denomination: 100 as const,
      currency: 'USD' as const,
      badge: "HOLLYWOOD SERIES"
    },
    {
      title: "EUROPEAN CINEMA EDITIONS",
      highlight: "€5 TO €500 DENOMINATIONS",
      tagline: "EURO SERIES • HIGH GLOSS FILM COATING • LEGAL SCALE",
      description: "Full European banknote denominations engineered for international co-productions, high-fashion commercials, and streaming series filmed in Australia.",
      stagedSample: "€10,000 EUR",
      priceSample: "$69 AUD",
      notesSample: "200x €50 Europa Notes",
      denomination: 50 as const,
      currency: 'EUR' as const,
      badge: "EUROPA SERIES"
    }
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Section 1: Categories definition matching AEMC category cards
  const categories = [
    {
      id: 'aud',
      name: 'Australian Dollars (AUD)',
      categoryParam: 'Australian Dollars',
      kicker: 'Next-Gen Polymer',
      count: '4 Models',
      desc: '$10, $20, $50, and $100 polymer-feel stacks, one-sided at 75% scale with large PROP COPY markings.',
      currency: 'AUD' as const,
      denom: 100 as const,
      startingPrice: '$39 AUD'
    },
    {
      id: 'usd',
      name: 'US Dollars (USD)',
      categoryParam: 'US Dollars',
      kicker: 'Hollywood Film Series',
      count: '6 Models',
      desc: '$1, $5, $10, $20, $50, and $100 bills with cinema straps and aged finishes.',
      currency: 'USD' as const,
      denom: 100 as const,
      startingPrice: '$39 AUD'
    },
    {
      id: 'eur',
      name: 'European Euros (EUR)',
      categoryParam: 'Euro',
      kicker: 'Continental Cinema',
      count: '7 Models',
      desc: '€5, €10, €20, €50, €100, €200 and €500 notes for international movie productions.',
      currency: 'EUR' as const,
      denom: 50 as const,
      startingPrice: '$39 AUD'
    },
    {
      id: 'gbp',
      name: 'British Pounds (GBP)',
      categoryParam: 'British Pounds',
      kicker: 'UK Film & TV Stacks',
      count: '4 Models',
      desc: '£5, £10, £20, and £50 prop notes with an original Westminster design, one-sided with PROP COPY markings.',
      currency: 'GBP' as const,
      denom: 50 as const,
      startingPrice: '$39 AUD'
    },
    {
      id: 'cad',
      name: 'Canadian Dollars (CAD)',
      categoryParam: 'Canadian Dollars',
      kicker: 'Vertical Polymer Series',
      count: '5 Models',
      desc: '$5, $10, $20, $50, and $100 Canadian polymer bills for cross-border streaming productions.',
      currency: 'CAD' as const,
      denom: 100 as const,
      startingPrice: '$39 AUD'
    },
    {
      id: 'training',
      name: 'Teller & Training Stacks',
      categoryParam: 'Australian Dollars',
      kicker: 'Institutional Testing',
      count: '4 Sets',
      desc: 'High-volume prop bundles for bank teller simulation, cash-in-transit security, and police drills.',
      currency: 'AUD' as const,
      denom: 50 as const,
      startingPrice: '$39 AUD'
    }
  ];

  // Section 2: Featured products filter
  const [featuredTab, setFeaturedTab] = useState<'all' | 'aud' | 'usd' | 'eur_gbp'>('all');

  const filteredFeatured = PRODUCTS.filter((p) => {
    if (featuredTab === 'aud') return p.currency === 'AUD';
    if (featuredTab === 'usd') return p.currency === 'USD';
    if (featuredTab === 'eur_gbp') return p.currency === 'EUR' || p.currency === 'GBP';
    return true;
  }).slice(0, 8);

  // Section 3: Trustpilot Reviews filter state
  const [reviewTab, setReviewTab] = useState<'all' | 'film' | 'music' | 'theatre' | 'commercial' | 'training'>('all');

  const trustpilotReviews = [
    {
      id: 'rev-1',
      author: 'Mark Campbell',
      role: 'Key Grip & Scenic Coordinator',
      location: 'Sydney, NSW',
      production: 'Stan Original Series',
      rating: 5,
      type: 'film' as const,
      headline: 'Outstanding camera presence on our Sydney crime drama shoot',
      text: 'We needed approximately $250k in staged currency for a safe cracking scene. The polymer feel and anti-glare finish meant our lighting team had zero issues with blown-out reflections under the Arri SkyPanels. The legal markings are subtle enough that in tight macro shots they look completely authentic while keeping our legal counsel happy.',
      date: '2 weeks ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-2',
      author: 'Sarah Jenkins',
      role: 'Art Director',
      location: 'Melbourne, VIC',
      production: 'Docklands Studios Feature Drama',
      rating: 5,
      type: 'film' as const,
      headline: 'Best prop money in Australia by a mile',
      text: 'Having ordered props from overseas in the past that got seized by Australian Customs or looked like cheap monopoly money, Australia Prop Money is a lifesaver. Arrived in Melbourne within 24 hours via Express. Handled by our lead actors during a tense bank counter scene with zero tearing.',
      date: '1 month ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-3',
      author: 'Liam Henderson',
      role: 'Music Video Director',
      location: 'Brisbane, QLD',
      production: 'Sony Music Australia Artist Video',
      rating: 5,
      type: 'music' as const,
      headline: 'The Stunt Pack runs through money guns like butter',
      text: 'Grabbed the 500-note Music Video Stunt Pack. If you have ever tried running ordinary paper through a money cannon, you know it jams immediately. These polymer notes did not jam once during four separate 240fps slow-motion takes. Our artist and label were stoked with the final cut.',
      date: '3 weeks ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-4',
      author: 'David Kowalski',
      role: 'Lead Experience Designer',
      location: 'Gold Coast, QLD',
      production: 'Heist Escape Rooms Australia',
      rating: 5,
      type: 'theatre' as const,
      headline: 'Durable enough to survive hundreds of escape room puzzle teams',
      text: 'Our players literally tear through rooms looking for clues. Most paper props get shredded within a week. We ordered 10 stacks of the $100 and $50 notes eight months ago and they are still in pristine condition inside our vault props. Excellent quality.',
      date: '2 months ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-5',
      author: 'Olivia Torres',
      role: 'Independent Producer',
      location: 'Adelaide, SA',
      production: 'SA Screen Short Film Award Nominee',
      rating: 5,
      type: 'film' as const,
      headline: '10% Crypto discount and guaranteed 25% pricing',
      text: 'Paid with USDT and got the 10% instant discount. Order was dispatched same afternoon and arrived in Adelaide on Wednesday morning. The packaging was discrete and weather-sealed. Highly recommend for any indie budget looking for maximum production value.',
      date: '1 month ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-6',
      author: 'Tyson McCarthy',
      role: 'Theatrical Stage Manager',
      location: 'Perth, WA',
      production: 'His Majesty’s Theatre Production',
      rating: 5,
      type: 'theatre' as const,
      headline: 'Flawless stage presence and compliant legal markings',
      text: 'Stage lighting is brutal on cheap props. These notes have the exact distinctive translucent look of real Australian banknotes from the third row. The Reserve Bank reproduction disclaimers protect our company completely.',
      date: '2 months ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-7',
      author: 'Chloe Vance',
      role: 'Security Training Coordinator',
      location: 'Canberra, ACT',
      production: 'Financial Services Institute of Australia',
      rating: 5,
      type: 'training' as const,
      headline: 'Ideal for anti-robbery cashier training workshops',
      text: 'We simulate sudden cash snatching and register counts during our corporate retail safety courses. These props let our trainees practice accurate counting cadence and bundle handling without the immense security risk of real currency.',
      date: '3 months ago',
      verifiedTrustpilot: true
    },
    {
      id: 'rev-8',
      author: 'Liam O’Connor',
      role: 'Executive Producer',
      location: 'Gold Coast, QLD',
      production: 'Revolver Films Commercials',
      rating: 5,
      type: 'commercial' as const,
      headline: 'Full Reserve Bank Act 1981 compliance documentation',
      text: 'Shooting commercial television campaigns requires bulletproof legal clearance. APM provides clear documentation and compliant disclaimers on every note that sailed through network legal clearance with zero friction.',
      date: '2 months ago',
      verifiedTrustpilot: true
    }
  ];

  const filteredReviews = trustpilotReviews.filter((r) => reviewTab === 'all' || r.type === reviewTab);

  // Section 5: Interactive Scene Cash Calculator State
  const [stagedAmount, setStagedAmount] = useState<number>(10000);
  const noteCount = Math.round(stagedAmount / 100);
  const stackCount = Math.ceil(noteCount / 100);
  const scenePrice = priceForNotes(noteCount);

  // Section 7: Accordion FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is prop money and how does it comply with Australian law?",
      a: "Australia Prop Money manufactures simulated banknotes engineered exclusively for motion pictures, theatrical productions, training, and broadcast television. Under Section 27 of the Reserve Bank Act 1981 and the Crimes (Currency) Act 1981, all our notes are printed on one side only at 75% of genuine size, carry large 'PROP COPY - NOT LEGAL TENDER' markings across the face, and reproduce no security features."
    },
    {
      q: "How is prop money priced?",
      a: "Prices are based on the number of notes, not the denomination printed on them. A 100-note stack is $39 AUD whether it shows $5 or $100 notes, and larger packs get a lower per-note rate. Shipping is $12.95 AUD tracked, free on orders over $150."
    },
    {
      q: "Why are the notes one-sided and smaller than real money?",
      a: "Reserve Bank of Australia guidelines on reproducing banknotes call for reproductions that cannot be mistaken for genuine currency. Our notes are printed on one side only at 75% scale, with large PROP COPY markings. On camera, fanned or stacked notes still read as cash, and our matte synthetic stock is designed not to glare under studio lighting."
    },
    {
      q: "How fast is delivery across Sydney, Melbourne, Brisbane and regional Australia?",
      a: "All orders are dispatched within 24 hours on business days from our Sydney and Melbourne distribution centers. We utilize Australia Post Express and StarTrack Priority Couriers with full end-to-end tracking. Metro deliveries arrive in 1 to 2 business days; regional areas arrive in 2 to 4 business days."
    },
    {
      q: "What payment methods are supported?",
      a: "We accept Visa, Mastercard and American Express through our secure card checkout. Production companies can also request a tax invoice payable by EFT."
    },
    {
      q: "Can you provide custom serial numbers or large-scale heist vault quantities?",
      a: "Yes. For major television broadcasts, feature films, and casino sequences, we regularly supply bulk quantities of banded prop stacks, complete with lockable aluminum security cases and custom bank straps. Contact our production logistics desk for bespoke orders."
    }
  ];

  return (
    <div className="bg-[#0f1012] text-stone-100 min-h-screen">
      
      {/* =========================================================================
          SECTION 0: HERO SECTION (Pixel-faithful format to AEMC)
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0f1012] border-b border-[#23272E]">
        
        {/* Cinematic Backdrop & Ambient Mesh */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1012]/60 via-[#0f1012]/30 to-[#0f1012]/95 z-10" />
          
          {/* Subtle atmospheric glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8C4A2F]/15 blur-[140px] rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full" />
          
          {/* Visual stage backdrop */}
          <div className="absolute inset-0 flex items-center justify-center opacity-15">
            <div className="w-[1200px] h-[600px] border border-[#2B2F36] rounded-3xl [background:radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17191C] via-[#0f1012] to-transparent" />
          </div>
        </div>

        {/* Carousel Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Show hero slide ${idx + 1}`}
              className="flex h-6 items-center justify-center cursor-pointer p-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-7 bg-[#C87D55]' : 'w-1.5 bg-white/35 hover:bg-white/60'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-24 text-center">
          <div className="mx-auto max-w-3xl space-y-6 sm:space-y-8 [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]">
            
            {/* Top Pill / Kicker with Pulsing Green Dot */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8C4A2F]/50 bg-[#1D2024]/90 px-3.5 py-1.5 font-mono text-xs text-[#C87D55] backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>{heroSlides[currentSlide].tagline}</span>
            </div>

            {/* Giant Bold Headline with Gradient Accent */}
            <h1 className="text-4xl font-black uppercase leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {heroSlides[currentSlide].title}{' '}
              <span className="bg-gradient-to-r from-amber-400 via-[#C87D55] to-[#8C4A2F] bg-clip-text text-transparent">
                {heroSlides[currentSlide].highlight}
              </span>
            </h1>

            {/* Subheading / Narrative */}
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
              {heroSlides[currentSlide].description}
            </p>

            {/* Live Interactive Hero Preview Card */}
            <div className="mx-auto max-w-md p-4 rounded-2xl bg-[#17191C]/90 border border-[#2B2F36] shadow-2xl backdrop-blur-md text-left space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#C87D55] font-bold uppercase tracking-wider">{heroSlides[currentSlide].badge}</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  NOT LEGAL TENDER
                </span>
              </div>
              <div className="aspect-[3/2] rounded-lg overflow-hidden border border-[#23272E]">
                <ProductImage product={productFor(heroSlides[currentSlide].currency, heroSlides[currentSlide].denomination)} />
              </div>
              <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs pt-1 border-t border-[#23272E]">
                <div>
                  <span className="text-stone-400 text-[10px] block">Strap Label</span>
                  <span className="text-white font-bold">{heroSlides[currentSlide].stagedSample}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">Banknotes</span>
                  <span className="text-amber-400 font-bold">{heroSlides[currentSlide].notesSample.split(' ')[0]}</span>
                </div>
                <div>
                  <span className="text-stone-400 text-[10px] block">Price</span>
                  <span className="text-emerald-400 font-bold">{heroSlides[currentSlide].priceSample}</span>
                </div>
              </div>
            </div>

            {/* Two Action Buttons side by side */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
              <Link
                to="/shop"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#8C4A2F] px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#8C4A2F]/20 transition-all hover:bg-[#A35839] sm:w-auto cursor-pointer"
              >
                <span>Explore Prop Stacks</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/compliance"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#2B2F36] bg-[#1D2024] px-8 py-4 text-base font-bold text-stone-200 transition-colors hover:bg-[#252930] sm:w-auto cursor-pointer"
              >
                <span>Legal & RBA Guidelines</span>
              </Link>
            </div>

            {/* 4-Card Specification / Trust Metric Bar (AEMC Exact Format) */}
            <div className="mx-auto hidden max-w-3xl grid-cols-2 gap-4 border-t border-[#23272E]/60 pt-8 text-center font-mono sm:grid sm:grid-cols-4">
              <div className="rounded-lg border border-[#23272E] bg-[#17191C]/80 p-3">
                <div className="text-xs text-stone-400">Note Scale</div>
                <div className="text-lg font-bold text-amber-400">75%</div>
              </div>
              <div className="rounded-lg border border-[#23272E] bg-[#17191C]/80 p-3">
                <div className="text-xs text-stone-400">Stacks From</div>
                <div className="text-lg font-bold text-white">$39 AUD</div>
              </div>
              <div className="rounded-lg border border-[#23272E] bg-[#17191C]/80 p-3">
                <div className="text-xs text-stone-400">Trustpilot Score</div>
                <div className="text-lg font-bold text-[#00B67A]">4.9 / 5.0</div>
              </div>
              <div className="rounded-lg border border-[#23272E] bg-[#17191C]/80 p-3">
                <div className="text-xs text-stone-400">National Courier</div>
                <div className="text-lg font-bold text-white">24h Express</div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 1: SHOP BY CATEGORY (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0f1012]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow and Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Theatrical Lineup & Gear
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Every denomination and currency edition in one place — Next-Gen Australian Polymer, Hollywood US Dollars, European Cinema Euros, British Pounds, and Canadian Dollars.
            </p>
          </div>

          {/* 8-Card Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/shop?category=${encodeURIComponent(cat.categoryParam)}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#2B2F36] bg-[#17191C] transition-all hover:border-[#8C4A2F] hover:shadow-xl hover:shadow-black/50 cursor-pointer"
              >
                {/* 4:3 Visual container with fallback banknote showcase */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECECEE]">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <ProductImage product={productFor(cat.currency, cat.denom)} />
                  </div>

                  {/* Top-Left Category Kicker Badge */}
                  <span className="absolute left-3 top-3 z-20 rounded bg-[#17191C]/90 px-2.5 py-1 font-mono text-[10px] font-bold text-[#C87D55] border border-white/5">
                    {cat.kicker}
                  </span>

                  {/* Top-Right Count Badge */}
                  <span className="absolute right-3 top-3 z-20 rounded bg-black/60 px-2.5 py-1 font-mono text-[11px] font-bold text-white shadow">
                    {cat.count}
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between space-y-3 p-5">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white transition-colors group-hover:text-[#C87D55]">
                      {cat.name}
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-stone-400">
                      {cat.desc}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#23272E] text-xs">
                    <span className="font-mono text-stone-400">From <strong className="text-white">{cat.startingPrice}</strong></span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#C87D55]">
                      <span>Explore</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: FEATURED PROP MONEY STACKS (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#121417] border-y border-[#1E2228]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow and Section Header */}
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Ready for Immediate Dispatch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Featured Prop Money Collections
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Hand-picked studio packs in stock now — every price GST inclusive, stacks from $39 AUD, free tracked shipping over $150.
            </p>
          </div>

          {/* Interactive Filter Tabs matching AEMC */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            {[
              { id: 'all', label: 'All Collections' },
              { id: 'aud', label: 'Australian Dollars' },
              { id: 'usd', label: 'US Dollars' },
              { id: 'eur_gbp', label: 'Euro & GBP' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFeaturedTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                  featuredTab === tab.id
                    ? 'bg-[#8C4A2F] text-white shadow-lg shadow-[#8C4A2F]/20'
                    : 'bg-[#17191C] text-stone-300 border border-[#2B2F36] hover:border-[#8C4A2F]/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 8-Product Card Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {filteredFeatured.map((prod) => {
              const defaultVariant = prod.variants?.find((v) => v.isDefault) || prod.variants?.[0];
              const price = defaultVariant ? defaultVariant.price : prod.price;

              return (
                <div
                  key={prod.id}
                  className="group flex flex-col justify-between bg-[#17191C] rounded-2xl border border-[#2B2F36] overflow-hidden hover:border-[#8C4A2F]/80 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    {/* Aspect-square visual container */}
                    <div 
                      onClick={() => onQuickView(prod)}
                      className="relative block aspect-square overflow-hidden bg-[#121417] p-4 cursor-pointer"
                    >
                      <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <ProductImage product={prod} />
                      </div>

                      <span className="absolute left-3 top-3 font-mono text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-[#17191C]/90 text-amber-400 border border-white/10 shadow-md">
                        PROP COPY
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#C87D55] block">
                        {prod.category} · {prod.currency}
                      </span>
                      <h3
                        onClick={() => onQuickView(prod)}
                        className="text-base font-bold text-white leading-snug line-clamp-2 cursor-pointer transition-colors group-hover:text-[#C87D55]"
                      >
                        {prod.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-stone-400">
                        <span><strong className="text-emerald-400">{prod.noteCount.toLocaleString()}</strong> prop notes · 75% scale</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Row */}
                  <div className="p-5 pt-0 space-y-3">
                    <div className="flex items-baseline justify-between pt-3 border-t border-[#23272E]">
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold font-mono text-white">${price} AUD</span>
                        </div>
                        <span className="text-[10px] font-mono text-[#C87D55] block">GST included</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onQuickView(prod)}
                        className="py-2.5 rounded-xl border border-[#2B2F36] bg-[#141619] hover:bg-[#1D2024] text-xs font-bold text-stone-200 transition-colors cursor-pointer flex items-center justify-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Specs</span>
                      </button>
                      <button
                        onClick={() => onAddToCart(prod, 1, defaultVariant)}
                        className="py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#A35839] text-xs font-bold text-white transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-md shadow-[#8C4A2F]/20"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Center CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#2B2F36] bg-[#17191C] px-6 py-3 text-sm font-bold text-stone-100 transition-colors hover:border-[#8C4A2F] hover:text-[#C87D55] cursor-pointer"
            >
              <span>Shop All Inventory ({PRODUCTS.length} Models)</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: WHAT AUSTRALIAN DIRECTORS SAY (TRUSTPILOT VERIFIED REVIEWS)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0f1012]">
        <div id="verified-production-reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#17191C] border border-[#2B2F36] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00B67A]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8C4A2F]/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header with Trustpilot Brand Lockup and TrustScore */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#23272E] relative z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121417] border border-[#2B2F36] text-[11px] font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-[#00B67A] animate-pulse" />
                  <span className="font-bold">TRUSTPILOT VERIFIED REVIEWS</span>
                  <span className="text-stone-500">•</span>
                  <span className="text-stone-300">EXCELLENT 4.9 OUT OF 5</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                  What Australian Creators Say on Trustpilot
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 max-w-xl leading-relaxed">
                  Real reviews from film directors, scenic prop masters, art departments, and television producers across Australia.
                </p>
              </div>

              {/* Trustpilot Scoreboard Header Box */}
              <div className="bg-[#121417] border border-[#2B2F36] rounded-2xl p-5 self-start lg:self-auto space-y-3 shadow-lg">
                <div className="flex items-center gap-3 border-b border-[#23272E] pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 bg-[#00B67A] rounded-[3px] flex items-center justify-center">
                      <Star className="w-4 h-4 fill-white text-white" />
                    </div>
                    <span className="font-bold text-white tracking-tight text-base">Trustpilot</span>
                  </div>
                  <span className="text-stone-500">·</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">Rated Excellent</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl sm:text-4xl font-mono font-black text-white">{TRUSTPILOT_STATS.averageRating}</div>
                  <div className="space-y-1">
                    {/* Trustpilot 5 Star Green Blocks */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-[#00B67A] rounded-[2px] flex items-center justify-center shadow-xs">
                          <Star className="w-3.5 h-3.5 fill-white text-white" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[11px] font-mono text-stone-400">
                      Based on <strong className="text-white">{TRUSTPILOT_STATS.totalReviews.toLocaleString()}</strong> Trustpilot reviews
                    </div>
                  </div>
                </div>

                {/* Star rating breakdown mini bars */}
                <div className="space-y-1 pt-1 text-[10px] font-mono text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="w-10">5 Stars</span>
                    <div className="flex-1 h-1.5 rounded-full bg-[#17191C] overflow-hidden">
                      <div className="h-full bg-[#00B67A] rounded-full" style={{ width: `${TRUSTPILOT_STATS.starDistribution.fiveStar}%` }} />
                    </div>
                    <span className="w-7 text-right">{TRUSTPILOT_STATS.starDistribution.fiveStar}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10">4 Stars</span>
                    <div className="flex-1 h-1.5 rounded-full bg-[#17191C] overflow-hidden">
                      <div className="h-full bg-[#00B67A] rounded-full" style={{ width: `${TRUSTPILOT_STATS.starDistribution.fourStar}%` }} />
                    </div>
                    <span className="w-7 text-right">{TRUSTPILOT_STATS.starDistribution.fourStar}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 flex-wrap pt-6 pb-8">
              {[
                { id: 'all', label: `All Trustpilot (${TRUSTPILOT_STATS.totalReviews.toLocaleString()})` },
                { id: 'film', label: 'Feature Film & Drama' },
                { id: 'music', label: 'Music Videos' },
                { id: 'theatre', label: 'Theatre & Stage' },
                { id: 'commercial', label: 'TV Commercials' },
                { id: 'training', label: 'Security Training' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setReviewTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    reviewTab === tab.id
                      ? 'bg-[#00B67A] text-slate-950 font-black shadow-lg shadow-[#00B67A]/20'
                      : 'bg-[#121417] text-stone-300 border border-[#23272E] hover:border-emerald-500/50 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Reviews Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-[#141619] border border-[#23272E] rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-[#00B67A]/60 transition-colors"
                >
                  <div className="space-y-3">
                    {/* Trustpilot Review Header */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      {/* Trustpilot Green Star Squares */}
                      <div className="flex items-center gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <div key={i} className="w-4 h-4 bg-[#00B67A] rounded-[2px] flex items-center justify-center">
                            <Star className="w-3 h-3 fill-white text-white" />
                          </div>
                        ))}
                      </div>
                      <span className="text-stone-400 text-[11px]">{rev.date}</span>
                    </div>

                    {/* Trustpilot Verified Review Tag */}
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00B67A]" />
                      <span className="font-semibold">Verified Trustpilot Review</span>
                    </div>

                    <h3 className="font-bold text-base text-white leading-snug">
                      "{rev.headline}"
                    </h3>

                    <p className="text-xs leading-relaxed text-stone-400">
                      {rev.text}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#23272E] flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                      </div>
                      <div className="text-[11px] text-stone-400">{rev.role}</div>
                      {rev.production && (
                        <div className="text-[10px] text-stone-500 font-mono">{rev.production}</div>
                      )}
                    </div>
                    <span className="font-mono text-[10px] text-[#C87D55] px-2 py-0.5 rounded bg-[#17191C] border border-[#2B2F36] shrink-0 self-end">
                      {rev.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Trustpilot External Banner */}
            <div className="mt-10 pt-6 border-t border-[#23272E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#00B67A] rounded-[2px] flex items-center justify-center">
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                </div>
                <span>Trustpilot Score: <strong className="text-white">4.9 / 5.0</strong> ({TRUSTPILOT_STATS.totalReviews.toLocaleString()} verified Australian reviews)</span>
              </div>
              <a
                href="#verified-production-reviews"
                onClick={(e) => {
                  e.preventDefault();
                  setReviewTab('all');
                }}
                className="inline-flex items-center gap-1 text-[#00B67A] hover:underline font-bold"
              >
                <span>Read all reviews on Trustpilot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 4: BRAND STORY & ENGINEERING SPECIFICATIONS (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#121417] border-y border-[#1E2228]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow and Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Australian Prop Engineering Since 2019 • Reserve Bank Act 1981 Compliant
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Engineered for Australia. Tuned for Raw Realism.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Australia Prop Money engineers and supplies competition-grade theatrical currency, high-durability synthetic polymer substrates, large one-sided PROP COPY markings, and studio-grade bank bands designed for high-resolution cameras under intense studio lights. Registered for GST in NSW with nationwide express courier logistics.
            </p>
          </div>

          {/* 4-Card Feature Grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            
            <div className="rounded-2xl border border-[#2B2F36] bg-[#17191C] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#8C4A2F]/20 text-[#C87D55] border border-[#8C4A2F]/40">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Reserve Bank Act 1981 Compliance</h3>
              </div>
              <p className="text-xs leading-relaxed text-stone-400">
                Every note is one-sided, 75% of genuine size, and marked "PROP COPY - NOT LEGAL TENDER" across the face, following RBA reproduction guidelines and the Crimes (Currency) Act 1981.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2B2F36] bg-[#17191C] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Simple Per-Stack Pricing</h3>
              </div>
              <p className="text-xs leading-relaxed text-stone-400">
                Pay per note, not per face value: a 100-note stack is $39 AUD whatever the denomination, with lower rates on bigger packs. Clear, predictable production budgeting.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2B2F36] bg-[#17191C] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">Dual-Sided 8K Camera Ready</h3>
              </div>
              <p className="text-xs leading-relaxed text-stone-400">
                Printed on specialized matte synthetic polymer with anti-reflective micro-textures. No artificial plastic reflections under ARRI SkyPanels, RED Monstro, or Sony Venice cinematography setups.
              </p>
            </div>

            <div className="rounded-2xl border border-[#2B2F36] bg-[#17191C] p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">24-Hour Express Nationwide Dispatch</h3>
              </div>
              <p className="text-xs leading-relaxed text-stone-400">
                Dispatched from Sydney and Melbourne logistics hubs in discreet tamper-evident packaging. End-to-end tracked courier with priority same-day dispatch on urgent production call-outs.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: INTERACTIVE SCENE CASH CALCULATOR (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0f1012]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[#23272E] bg-[#141619] p-8 text-center sm:p-12 shadow-2xl">
            
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Side-by-Side Specs & Sizing
            </span>
            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
              Need Help Sizing Your Staged Cash Scene?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400">
              Pick the amount your scene needs to show on screen and see how many $100 prop notes and stacks that takes, and what it costs.
            </p>

            {/* Interactive Sizing Widget */}
            <div className="mt-8 space-y-6 text-left bg-[#17191C] p-6 rounded-2xl border border-[#2B2F36]">
              
              {/* Preset buttons */}
              <div>
                <label className="font-mono text-xs text-stone-400 uppercase tracking-wider block mb-2">
                  Select Production Scene Preset:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: '$2,000 AUD Drop', val: 2000 },
                    { label: '$10,000 AUD Stack', val: 10000 },
                    { label: '$50,000 AUD Bag', val: 50000 },
                    { label: '$1,000,000 Heist', val: 1000000 }
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      onClick={() => setStagedAmount(preset.val)}
                      className={`px-3 py-2 rounded-lg font-mono text-xs font-bold transition-colors cursor-pointer ${
                        stagedAmount === preset.val
                          ? 'bg-[#8C4A2F] text-white'
                          : 'bg-[#121417] text-stone-300 border border-[#23272E] hover:border-stone-500'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-xs">
                  <span className="text-stone-400">Amount Shown On Screen:</span>
                  <span className="text-amber-400 font-bold">${stagedAmount.toLocaleString()} AUD</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="1000000"
                  step="2000"
                  value={stagedAmount}
                  onChange={(e) => setStagedAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#23272E] rounded-lg appearance-none cursor-pointer accent-[#C87D55]"
                />
              </div>

              {/* Calculation Output Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono pt-2">
                <div className="p-3 rounded-xl bg-[#121417] border border-[#23272E]">
                  <div className="text-[10px] text-stone-400">On-Screen Amount</div>
                  <div className="text-base font-bold text-white">${stagedAmount.toLocaleString()}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121417] border border-[#23272E]">
                  <div className="text-[10px] text-stone-400">Total Banknotes</div>
                  <div className="text-base font-bold text-amber-400">{noteCount.toLocaleString()}x $100</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121417] border border-[#23272E]">
                  <div className="text-[10px] text-stone-400">Strapped Stacks</div>
                  <div className="text-base font-bold text-emerald-400">{stackCount.toLocaleString()} x 100</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121417] border border-[#23272E]">
                  <div className="text-[10px] text-stone-400">Estimated Price</div>
                  <div className="text-base font-bold text-[#C87D55]">${scenePrice.toLocaleString()} AUD</div>
                </div>
              </div>

            </div>

            {/* Launch CTA */}
            <div className="mt-8">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8C4A2F] px-8 py-4 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#A35839] cursor-pointer"
              >
                <span>Launch Full Shop Catalog</span>
                <span>→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 6: STUDIO TECH & ON-SET INSIGHTS (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#121417] border-y border-[#1E2228]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow and Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Field Reports & Tech Guides
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Studio Tech & On-Set Insights
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Technical guides, lighting advice for synthetic polymer currency, and legal compliance insights from our Australian production team.
            </p>
          </div>

          {/* 3-Article Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => ({
              slug: post.slug,
              tag: post.category,
              date: post.date,
              readTime: post.readTime,
              title: post.title,
              desc: post.excerpt
            })).map((art) => (
              <Link
                key={art.slug}
                to={`/blog/${art.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#2B2F36] bg-[#17191C] transition-all hover:border-[#8C4A2F] hover:shadow-xl hover:shadow-black/50 cursor-pointer"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECECEE]">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <ProductImage product={articleProduct(art.slug)} />
                  </div>
                  <span className="absolute left-3 top-3 rounded bg-[#17191C]/90 px-2.5 py-1 font-mono text-[10px] font-bold text-[#C87D55] border border-white/5">
                    {art.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between space-y-3 p-6">
                  <div className="space-y-2">
                    <div className="font-mono text-[11px] text-stone-400">
                      {art.date} • {art.readTime}
                    </div>
                    <h3 className="line-clamp-2 text-base font-bold text-white transition-colors group-hover:text-[#C87D55]">
                      {art.title}
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-stone-400">
                      {art.desc}
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-1 pt-2 text-xs font-bold text-[#C87D55]">
                    <span>Read Article</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Link */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-xl border border-[#2B2F36] bg-[#17191C] px-6 py-3 text-sm font-bold text-stone-100 transition-colors hover:border-[#8C4A2F] hover:text-[#C87D55] cursor-pointer"
            >
              <span>Read All Production Guides</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 7: FREQUENTLY ASKED QUESTIONS (AEMC Exact Format)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-[#0f1012]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* Eyebrow and Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C87D55]">
              Director & Production Knowledge Base
            </span>
            <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-stone-400 sm:text-base">
              Direct, factual answers on pricing, Australian legal compliance, payment, and shipping.
            </p>
          </div>

          {/* Accordion Questions List */}
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border bg-[#17191C] transition-colors border-[#2B2F36] hover:border-[#8C4A2F]/60"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 cursor-pointer"
                    >
                      <span className="flex items-start gap-3 text-sm font-bold text-white sm:text-base">
                        <span className="font-mono text-[#C87D55]">Q.</span>
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#C87D55]' : ''
                        }`}
                      />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="border-t border-[#23272E] px-5 py-4 sm:px-6 text-xs sm:text-sm leading-relaxed text-stone-400 bg-[#141619]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom FAQ Assistance Card */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-[#2B2F36] bg-[#141619] p-6 text-center space-y-3">
            <h4 className="text-base font-bold text-white">Have a Bespoke Shoot Requirement or Custom Order?</h4>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              Our Sydney prop masters can assemble custom-banded crates, aged vintage notes, or armored truck deliveries for major productions.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-xl bg-[#8C4A2F] hover:bg-[#A35839] text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Contact Production Desk
              </Link>
              <Link
                to="/faq"
                className="px-6 py-2.5 rounded-xl border border-[#2B2F36] bg-[#17191C] hover:bg-[#20242A] text-xs font-bold text-stone-200 transition-colors cursor-pointer"
              >
                View Full FAQ Page
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
