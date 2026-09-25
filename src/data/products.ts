import { Product, CurrencyCategory } from '../types';

export const CATEGORIES: CurrencyCategory[] = [
  'US Dollars',
  'Euro',
  'British Pounds',
  'Australian Dollars',
  'Canadian Dollars'
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // AUSTRALIAN DOLLARS (AUD)
  // ==========================================
  {
    id: 'prop-aud-100-stack',
    name: 'Realistic $100 AUD Prop Money Polymer Banknote Stack ($10,000 Staged) - Full Print Film & TV Cash',
    slug: '100-aud-prop-stack-10000',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: '$',
    price: 2500,
    comparePrice: 3200,
    stagedValue: '$10,000 AUD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 full-print polymer-feel Australian $100 prop notes with authentic bank strap band.',
    description: 'Our flagship cinema prop worldwide. Designed specifically for high-definition 4K/8K Australian film, TV, and theatre productions. Double-sided printed notes replicating the vibrant emerald green tone of genuine Australian $100 notes with compliant RBA disclaimer markings and simulated clear window.',
    features: [
      '100 individual double-sided printed notes with authentic paper currency strap',
      'Realistic polymer texture with matte finish to prevent studio camera glare',
      'Compliant with Australian Crimes (Currency) Act 1981',
      'Marked "PROP COPY ONLY - NOT LEGAL TENDER"'
    ],
    specs: {
      dimensions: '158mm x 65mm',
      material: 'Synthetic polymer paper (120gsm)',
      printType: 'Double-sided offset CMYK with non-reflective matte finish',
      legalMarkings: 'Marked "PROP COPY / REPLICA / NOT LEGAL TENDER"',
      strapType: 'Official kraft paper bank band with stamped value'
    },
    inStock: true,
    colorScheme: { primary: '#00843D', accent: '#FFCD00', label: 'Emerald Green' },
    seoKeywords: [
      'realistic prop money',
      'prop money australia',
      '100 aud prop money',
      'fake australian 100 dollar bills',
      'movie money australia',
      'polymer prop banknotes',
      'australian crimes act compliant prop money'
    ],
    variants: [
      { id: 'aud100-100', name: 'Single Stack (100 Notes)', price: 2500, comparePrice: 3200, noteCount: 100, stagedValue: '$10,000 AUD', isDefault: true },
      { id: 'aud100-200', name: 'Double Stack (200 Notes)', price: 5000, comparePrice: 6400, noteCount: 200, stagedValue: '$20,000 AUD' },
      { id: 'aud100-500', name: '5x Stunt Pack (500 Notes)', price: 12500, comparePrice: 16000, noteCount: 500, stagedValue: '$50,000 AUD' },
      { id: 'aud100-1000', name: '10x Vault Brick (1,000 Notes)', price: 25000, comparePrice: 32000, noteCount: 1000, stagedValue: '$100,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-50-stack',
    name: 'Realistic $50 AUD Prop Money Polymer Banknote Stack ($5,000 Staged) - Cinema Grade Prop Cash',
    slug: '50-aud-prop-stack-5000',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: '$',
    price: 1250,
    comparePrice: 1650,
    stagedValue: '$5,000 AUD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 double-sided Australian $50 prop notes strapped with an authentic $5,000 bank seal wrapper.',
    description: 'The workhorse of Australian cinematic drama and crime productions. Captures the iconic vivid golden-ochre and yellow hues of the Australian $50 note. Perfect for high-stakes card tables and briefcase handoffs.',
    features: [
      '100 double-sided Australian $50 replica notes',
      'Iconic golden yellow hue with micro-line artistic detail',
      'Includes $5,000 labeled bank strap band',
      'Legal reproduction markings on both obverse and reverse faces'
    ],
    specs: {
      dimensions: '151mm x 65mm',
      material: 'Synthetic polymer blend with natural tactile flex',
      printType: 'Double-sided commercial cinema grade print',
      legalMarkings: 'Marked "REPLICA PROP MONEY - FOR TV & FILM ONLY"',
      strapType: 'High-tensile kraft bank wrapper'
    },
    inStock: true,
    colorScheme: { primary: '#E09F3E', accent: '#335C67', label: 'Golden Ochre' },
    seoKeywords: [
      'realistic prop money',
      '50 aud prop money',
      'fake 50 dollar bills australia',
      'cinema prop money',
      'australian movie money stacks',
      'prop cash 50 aud'
    ],
    variants: [
      { id: 'aud50-100', name: 'Single Stack (100 Notes)', price: 1250, comparePrice: 1650, noteCount: 100, stagedValue: '$5,000 AUD', isDefault: true },
      { id: 'aud50-200', name: 'Double Stack (200 Notes)', price: 2500, comparePrice: 3200, noteCount: 200, stagedValue: '$10,000 AUD' },
      { id: 'aud50-500', name: '5x Stunt Pack (500 Notes)', price: 6250, comparePrice: 8000, noteCount: 500, stagedValue: '$25,000 AUD' },
      { id: 'aud50-1000', name: '10x Vault Brick (1,000 Notes)', price: 12500, comparePrice: 16000, noteCount: 1000, stagedValue: '$50,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-20-stack',
    name: 'Realistic $20 AUD Prop Money Polymer Banknote Stack ($2,000 Staged) - Double Sided Movie Money',
    slug: '20-aud-prop-stack-2000',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 AUD',
    noteCount: 100,
    badge: 'Sale',
    shortDescription: '100 vivid red $20 Australian prop banknotes bundled with $2,000 cash band.',
    description: 'Instantly recognizable on camera thanks to the bold crimson-red palette. Essential for street-level transactions, cash register drawer dressing, and pub/nightclub film sets.',
    features: [
      '100 precision cut $20 prop notes',
      'Vivid red and orange color balance calibrated for camera sensors',
      'Includes official $2,000 bank wrapper band'
    ],
    specs: {
      dimensions: '144mm x 65mm',
      material: 'Synthetic polymer paper blend',
      printType: 'Double-sided CMYK with non-reflective coating',
      legalMarkings: 'Marked "PROP COPY ONLY / NON-NEGOTIABLE"',
      strapType: 'Red-accented paper bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#C9184A', accent: '#FF758F', label: 'Crimson Red' },
    seoKeywords: [
      'realistic prop money',
      '20 aud prop money',
      'fake 20 dollar notes australia',
      'movie money',
      'film props australia',
      'theatrical money'
    ],
    variants: [
      { id: 'aud20-100', name: 'Single Stack (100 Notes)', price: 500, comparePrice: 650, noteCount: 100, stagedValue: '$2,000 AUD', isDefault: true },
      { id: 'aud20-200', name: 'Double Stack (200 Notes)', price: 1000, comparePrice: 1300, noteCount: 200, stagedValue: '$4,000 AUD' },
      { id: 'aud20-500', name: '5x Stunt Pack (500 Notes)', price: 2500, comparePrice: 3200, noteCount: 500, stagedValue: '$10,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-10-stack',
    name: 'Realistic $10 AUD Prop Money Polymer Banknote Stack ($2,000 Staged) - Theatrical Prop Notes',
    slug: '10-aud-prop-stack-1000',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 AUD',
    noteCount: 200,
    shortDescription: '200 sky & ocean blue $10 Australian prop notes (2 Strapped Stacks) with $2,000 staged currency value.',
    description: 'Faithfully reproduced with Australian ocean-blue tones and intricate decorative line-work. Ideal for cash drawers, market stall scenes, educational tellers training, and indie theatre.',
    features: ['200 notes per bundle (2 x $1,000 bands)', 'Sky blue styling', 'Complies with RBA size and legal disclaimer rules'],
    specs: {
      dimensions: '137mm x 65mm',
      material: 'High-density synthetic polymer paper',
      printType: 'Double-sided matte litho print',
      legalMarkings: 'Marked "PROP NOTE / REPLICA / NOT LEGAL CURRENCY"',
      strapType: 'Sky blue bank wrapper'
    },
    inStock: true,
    colorScheme: { primary: '#0077B6', accent: '#90E0EF', label: 'Ocean Blue' },
    seoKeywords: [
      'realistic prop money',
      '10 aud prop money',
      'fake 10 dollar bills australia',
      'stage money',
      'film cash props',
      'australian prop notes'
    ],
    variants: [
      { id: 'aud10-200', name: 'Double Stack (200 Notes)', price: 500, comparePrice: 650, noteCount: 200, stagedValue: '$2,000 AUD', isDefault: true },
      { id: 'aud10-500', name: '5x Pack (500 Notes)', price: 1250, comparePrice: 1650, noteCount: 500, stagedValue: '$5,000 AUD' },
      { id: 'aud10-1000', name: '10x Studio Lot (1,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 1000, stagedValue: '$10,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-5-stack',
    name: 'Realistic $5 AUD Prop Money Polymer Banknote Stack ($2,000 Staged) - Production Stage Money',
    slug: '5-aud-prop-stack-500',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$5 Denominations',
    denomination: 5,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 AUD',
    noteCount: 400,
    shortDescription: '400 violet-mauve $5 Australian prop banknotes (4 Strapped Stacks) with $2,000 staged currency value.',
    description: 'The smallest Australian banknote denomination, featuring signature soft violet and lilac tones. Perfect for retail scene dressing, vending machines on film sets, and small change props.',
    features: ['400 violet prop notes (4 x $500 bands)', 'Synthetic polymer feel', 'Includes $500 bank wrapper bands'],
    specs: {
      dimensions: '130mm x 65mm',
      material: 'Synthetic polymer paper blend',
      printType: 'Double-sided matte finish',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Lilac paper bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#7209B7', accent: '#B5179E', label: 'Violet Mauve' },
    seoKeywords: [
      'realistic prop money',
      '5 aud prop money',
      'fake 5 dollar bills australia',
      'prop money small bills',
      'theatrical prop money',
      'motion picture currency'
    ],
    variants: [
      { id: 'aud5-400', name: 'Quad Stack (400 Notes)', price: 500, comparePrice: 650, noteCount: 400, stagedValue: '$2,000 AUD', isDefault: true },
      { id: 'aud5-1000', name: '10x Production Pack (1,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 1000, stagedValue: '$5,000 AUD' },
      { id: 'aud5-2000', name: '20x Studio Lot (2,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 2000, stagedValue: '$10,000 AUD' }
    ]
  },
  {
    id: 'bundle-high-roller-briefcase',
    name: 'Heist Movie Aluminum Briefcase Set - $250,000 Staged Realistic AUD Prop Money Stacks',
    slug: 'high-roller-briefcase-bundle',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: 'Director Briefcase Sets',
    denomination: 'Mixed',
    currencySymbol: '$',
    price: 62500,
    comparePrice: 75000,
    stagedValue: '$250,000 AUD',
    noteCount: 2500,
    badge: 'Premium',
    shortDescription: 'Lockable brushed aluminum production case loaded with 25 strapped stacks of $100 & $50 prop notes.',
    description: 'The ultimate set piece for blockbuster heists and music videos. Comes complete with a genuine locking aluminum briefcase fitted with custom velvet-lined foam compartments and 25 strapped stacks (twenty $10,000 stacks of $100s and five $5,000 stacks of $50s, representing $250,000 staged currency).',
    features: [
      'Brushed aerospace-grade aluminum briefcase with dual combination locks',
      '20 x $10,000 strapped stacks of $100 prop notes (2,000 notes)',
      '5 x $5,000 strapped stacks of $50 prop notes (500 notes)',
      'Total 2,500 individual notes representing $250,000 staged currency'
    ],
    specs: {
      dimensions: 'Briefcase: 460mm x 330mm x 110mm',
      material: 'Aluminum casing + Synthetic polymer currency replicas',
      printType: 'Full production double-sided CMYK',
      legalMarkings: 'Every note marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Heavyweight bank-certified kraft bands'
    },
    inStock: true,
    colorScheme: { primary: '#0F172A', accent: '#F59E0B', label: 'Brushed Aluminum' },
    seoKeywords: [
      'prop money briefcase',
      'briefcase of fake money',
      'heist movie props',
      'realistic prop money stacks',
      'prop money bundle',
      'film production cash case'
    ],
    variants: [
      { id: 'aud-case-std', name: 'Standard Case ($250k Staged / 25 Stacks)', price: 62500, comparePrice: 75000, noteCount: 2500, stagedValue: '$250,000 AUD', isDefault: true },
      { id: 'aud-case-deluxe', name: 'Deluxe Double Deck ($500k Staged / 50 Stacks)', price: 125000, comparePrice: 150000, noteCount: 5000, stagedValue: '$500,000 AUD' }
    ]
  },

  // ==========================================
  // US DOLLARS (USD)
  // ==========================================
  {
    id: 'prop-usd-100-stack',
    name: 'Realistic $100 Prop Money Bills Stack ($10,000 Staged) - New Series Blue Ribbon Movie Money',
    slug: '100-usd-blue-ribbon-prop-stack',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: '$',
    price: 2500,
    comparePrice: 3200,
    stagedValue: '$10,000 USD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 authentic US $100 "Blue Ribbon" prop bills with realistic bank cash strap.',
    description: 'The global standard for Hollywood heist movies, music videos, and TV drama. Features the modern series $100 design with simulated 3D blue security ribbon, Benjamin Franklin portrait, and Federal Reserve currency band. Stamped with legal prop markings.',
    features: [
      '100 double-sided printed US $100 prop notes',
      'Iconic 3D blue security ribbon simulation',
      'Standard $10,000 mustard-gold bank currency strap',
      'Matte linen-textured paper that handles and shuffles like real US currency'
    ],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'High-density linen cotton paper blend',
      printType: 'Double-sided offset CMYK anti-glare finish',
      legalMarkings: 'Marked "THIS NOTE IS NOT LEGAL TENDER - FOR MOTION PICTURE USE ONLY"',
      strapType: 'Federal style $10,000 currency strap'
    },
    inStock: true,
    colorScheme: { primary: '#2D3748', accent: '#00D2D3', label: 'Blue Ribbon 3D' },
    seoKeywords: [
      'realistic prop money',
      'fake 100 dollar bills',
      '100 dollar bill prop money',
      'movie money stacks',
      'motion picture prop money',
      'prop money 100',
      'full print double sided prop money'
    ],
    variants: [
      { id: 'usd100-100', name: 'Single Stack (100 Notes)', price: 2500, comparePrice: 3200, noteCount: 100, stagedValue: '$10,000 USD', isDefault: true },
      { id: 'usd100-200', name: 'Double Stack (200 Notes)', price: 5000, comparePrice: 6500, noteCount: 200, stagedValue: '$20,000 USD' },
      { id: 'usd100-500', name: '5x Stunt Pack (500 Notes)', price: 12500, comparePrice: 16000, noteCount: 500, stagedValue: '$50,000 USD' },
      { id: 'usd100-1000', name: '10x Bank Brick (1,000 Notes)', price: 25000, comparePrice: 32000, noteCount: 1000, stagedValue: '$100,000 USD' }
    ]
  },
  {
    id: 'prop-usd-50-stack',
    name: 'Realistic $50 Prop Money Bills Stack ($5,000 Staged) - Grant Modern Series Motion Picture Cash',
    slug: '50-usd-prop-stack-5000',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: '$',
    price: 1250,
    comparePrice: 1650,
    stagedValue: '$5,000 USD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 US $50 prop banknotes with Grant portrait and red $5,000 currency strap.',
    description: 'Essential for high-stakes casino poker scenes, ransom drops, and mobster handoffs. Double-sided print with subtle violet-blue and peach gradient hues and compliant film prop disclaimers.',
    features: ['100 double-sided US $50 notes', 'Red-bordered $5,000 bank strap', 'Film production anti-glare finish'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Linen cotton blend paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "FOR MOTION PICTURE USE ONLY"',
      strapType: 'Standard bank paper band'
    },
    inStock: true,
    colorScheme: { primary: '#334155', accent: '#818CF8', label: 'Violet Slate' },
    seoKeywords: [
      'realistic prop money',
      'fake 50 dollar bills',
      '50 dollar bill prop money',
      'movie money 50',
      'film prop cash',
      'stage money 50 bills'
    ],
    variants: [
      { id: 'usd50-100', name: 'Single Stack (100 Notes)', price: 1250, comparePrice: 1650, noteCount: 100, stagedValue: '$5,000 USD', isDefault: true },
      { id: 'usd50-200', name: 'Double Stack (200 Notes)', price: 2500, comparePrice: 3200, noteCount: 200, stagedValue: '$10,000 USD' },
      { id: 'usd50-500', name: '5x Pack (500 Notes)', price: 6250, comparePrice: 8000, noteCount: 500, stagedValue: '$25,000 USD' }
    ]
  },
  {
    id: 'prop-usd-20-stack',
    name: 'Realistic $20 Prop Money Bills Stack ($2,000 Staged) - Andrew Jackson Movie Money for Filming',
    slug: '20-usd-prop-stack-2000',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 USD',
    noteCount: 100,
    shortDescription: '100 US $20 prop notes banded with authentic violet $2,000 strap.',
    description: 'The quintessential street cash denomination in American cinema. Widely used for convenience store robberies, street hustle scenes, wallet props, and cash envelope handoffs.',
    features: ['100 double-sided US $20 bills', 'Violet $2,000 strap band', 'Non-reflective studio paper'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Linen paper blend',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / MOTION PICTURE USE"',
      strapType: 'Violet paper currency strap'
    },
    inStock: true,
    colorScheme: { primary: '#1E293B', accent: '#10B981', label: 'Jackson Green' },
    seoKeywords: [
      'realistic prop money',
      'fake 20 dollar bills',
      '20 dollar bill prop money',
      'movie money for music videos',
      'prop money bills',
      'street cash prop'
    ],
    variants: [
      { id: 'usd20-100', name: 'Single Stack (100 Notes)', price: 500, comparePrice: 650, noteCount: 100, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd20-200', name: 'Double Stack (200 Notes)', price: 1000, comparePrice: 1300, noteCount: 200, stagedValue: '$4,000 USD' },
      { id: 'usd20-500', name: '5x Stunt Pack (500 Notes)', price: 2500, comparePrice: 3200, noteCount: 500, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-10-stack',
    name: 'Realistic $10 Prop Money Bills Stack ($2,000 Staged) - Hamilton Cinema Grade Prop Cash',
    slug: '10-usd-prop-stack-1000',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 USD',
    noteCount: 200,
    shortDescription: '200 US $10 prop bills (2 Strapped Stacks) bundled with yellow $1,000 currency straps. Staged value: $2,000 USD.',
    description: 'Faithfully styled US ten-dollar prop notes featuring Hamilton portrait and torch motifs. Perfect for cash drawers, tip jars, and minor currency exchanges on set.',
    features: ['200 precision cut notes (2 x $1,000 bands)', 'Yellow $1,000 bank bands', 'Legal motion picture copy'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Linen paper blend',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "MOTION PICTURE USE ONLY"',
      strapType: 'Yellow paper currency band'
    },
    inStock: true,
    colorScheme: { primary: '#334155', accent: '#F59E0B', label: 'Hamilton Amber' },
    seoKeywords: [
      'realistic prop money',
      'fake 10 dollar bills',
      '10 dollar bill prop money',
      'motion picture cash',
      'cinema props',
      'prop money stacks'
    ],
    variants: [
      { id: 'usd10-200', name: 'Double Stack (200 Notes)', price: 500, comparePrice: 650, noteCount: 200, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd10-500', name: '5x Production Pack (500 Notes)', price: 1250, comparePrice: 1650, noteCount: 500, stagedValue: '$5,000 USD' },
      { id: 'usd10-1000', name: '10x Studio Lot (1,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 1000, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-5-stack',
    name: 'Realistic $5 Prop Money Bills Stack ($2,000 Staged) - Lincoln Double Sided Prop Bills',
    slug: '5-usd-prop-stack-500',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$5 Denominations',
    denomination: 5,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 USD',
    noteCount: 400,
    shortDescription: '400 US $5 prop notes (4 Strapped Stacks) with Lincoln Memorial and purple $500 bank bands. Staged value: $2,000 USD.',
    description: 'Double-sided prop reproduction of the US five-dollar bill. Essential for realistic cash register drawers and wallet dressing.',
    features: ['400 notes (4 x $500 bands)', 'Purple bank strap bands', 'Complies with US motion picture prop rules'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Linen paper blend',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "REPLICA / FOR MOTION PICTURE USE"',
      strapType: 'Purple paper bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#1E293B', accent: '#8B5CF6', label: 'Lincoln Purple' },
    seoKeywords: [
      'realistic prop money',
      'fake 5 dollar bills',
      '5 dollar bill prop money',
      'movie money props',
      'film production money',
      'fake cash for videos'
    ],
    variants: [
      { id: 'usd5-400', name: 'Quad Stack (400 Notes)', price: 500, comparePrice: 650, noteCount: 400, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd5-1000', name: '10x Production Pack (1,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 1000, stagedValue: '$5,000 USD' },
      { id: 'usd5-2000', name: '20x Studio Lot (2,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 2000, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-1-stack',
    name: 'Realistic $1 Dollar Bills Prop Money Stack ($2,000 Staged) - Classic Greenback Movie Cash',
    slug: '1-usd-prop-stack-100',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$1 Denominations',
    denomination: 1,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 USD',
    noteCount: 2000,
    shortDescription: '2,000 classic greenback US $1 prop bills (20 Strapped Stacks) for rain scenes, music videos, and film. Staged value: $2,000 USD.',
    description: 'The timeless American one-dollar greenback prop note. The staple for nightclub rain scenes, tip scenes, and vintage cinematic sequences.',
    features: ['2,000 classic single bills (20 x $100 bands)', 'Blue $100 strap bands', 'Authentic greenback reverse'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Textured linen paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "FOR MOTION PICTURE USE ONLY"',
      strapType: 'Blue paper band'
    },
    inStock: true,
    colorScheme: { primary: '#143224', accent: '#34D399', label: 'Classic Greenback' },
    seoKeywords: [
      'realistic prop money',
      'fake 1 dollar bills',
      '1 dollar bill prop money',
      'prop money for rain scenes',
      'classic greenback movie money',
      'prop money singles'
    ],
    variants: [
      { id: 'usd1-2000', name: 'Studio Brick (2,000 Notes)', price: 500, comparePrice: 650, noteCount: 2000, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd1-5000', name: 'Vault Pack (5,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 5000, stagedValue: '$5,000 USD' },
      { id: 'usd1-10000', name: 'Cinema Mega Pack (10,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 10000, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-2-stack',
    name: 'Realistic $2 Dollar Bills Prop Money Stack ($2,000 Staged) - Thomas Jefferson Classic Film Cash',
    slug: '2-usd-prop-stack-200',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$2 Denominations',
    denomination: 2,
    currencySymbol: '$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 USD',
    noteCount: 1000,
    badge: 'New',
    shortDescription: '1,000 authentic US $2 bill prop notes (10 Strapped Stacks) with Thomas Jefferson portrait and green bands. Staged value: $2,000 USD.',
    description: 'The iconic US two-dollar bill prop note featuring the historic Declaration of Independence presentation painting on the reverse and Thomas Jefferson on the obverse. Highly sought after for cinema period props, novelty cash scenes, and gangster collections.',
    features: ['1,000 precision cut double-sided $2 bills', 'Green $200 bank currency bands', 'Declaration of Independence reverse engraving styling', 'Marked "FOR MOTION PICTURE USE ONLY"'],
    specs: {
      dimensions: '156mm x 66mm',
      material: 'Linen cotton blend textured paper',
      printType: 'Double-sided CMYK matte finish',
      legalMarkings: 'Marked "REPLICA / FOR MOTION PICTURE USE ONLY"',
      strapType: 'Green paper currency band'
    },
    inStock: true,
    colorScheme: { primary: '#1B382B', accent: '#4ADE80', label: 'Declaration Green' },
    seoKeywords: [
      'realistic prop money',
      'fake 2 dollar bills',
      '2 dollar bill prop money',
      'rare prop money',
      'vintage movie money',
      'novelty film prop cash'
    ],
    variants: [
      { id: 'usd2-1000', name: 'Studio Brick (1,000 Notes)', price: 500, comparePrice: 650, noteCount: 1000, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd2-2500', name: 'Vault Pack (2,500 Notes)', price: 1250, comparePrice: 1650, noteCount: 2500, stagedValue: '$5,000 USD' },
      { id: 'usd2-5000', name: 'Cinema Mega Pack (5,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 5000, stagedValue: '$10,000 USD' }
    ]
  },

  // ==========================================
  // EURO (EUR)
  // ==========================================
  {
    id: 'prop-eur-500-stack',
    name: 'Realistic €500 Euro Prop Money Banknote Stack (€50,000 Staged) - Majestic Purple Movie Money',
    slug: '500-eur-prop-stack-50000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€500 Denominations',
    denomination: 500,
    currencySymbol: '€',
    price: 12500,
    comparePrice: 16000,
    stagedValue: '€50,000 EUR',
    noteCount: 100,
    badge: 'Premium',
    shortDescription: '100 regal purple €500 Euro prop notes banded with €50,000 bank currency band.',
    description: 'The legendary "Bin Laden" note of European crime cinema. Though withdrawn from circulation in real banking, the €500 note remains the top choice for luxury heist films, Monaco casino thrillers, and international spy dramas.',
    features: ['100 full-print €500 replica notes', 'Rich violet-purple styling', 'Official €50,000 labeled bank wrapper', 'Compliant European film prop legal disclaimer'],
    specs: {
      dimensions: '160mm x 82mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER / FOR FILM & TV ONLY"',
      strapType: 'Purple bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#581C87', accent: '#C084FC', label: 'Majestic Violet' },
    seoKeywords: [
      'realistic euro prop money',
      '500 euro prop money',
      'fake 500 euro bills',
      'euro movie money',
      'prop money euro notes',
      'monaco heist prop cash'
    ],
    variants: [
      { id: 'eur500-100', name: 'Single Stack (100 Notes)', price: 12500, comparePrice: 16000, noteCount: 100, stagedValue: '€50,000 EUR', isDefault: true },
      { id: 'eur500-200', name: 'Double Stack (200 Notes)', price: 25000, comparePrice: 32000, noteCount: 200, stagedValue: '€100,000 EUR' },
      { id: 'eur500-500', name: '5x Stunt Pack (500 Notes)', price: 62500, comparePrice: 80000, noteCount: 500, stagedValue: '€250,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-200-stack',
    name: 'Realistic €200 Euro Prop Money Banknote Stack (€20,000 Staged) - Amber Gold European Film Cash',
    slug: '200-eur-prop-stack-20000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€200 Denominations',
    denomination: 200,
    currencySymbol: '€',
    price: 5000,
    comparePrice: 6500,
    stagedValue: '€20,000 EUR',
    noteCount: 100,
    shortDescription: '100 golden-yellow €200 Euro prop notes with €20,000 bank band.',
    description: 'Vibrant yellow and brown European architecture styling. Perfect for high-value European briefcase handoffs and private banking set pieces.',
    features: ['100 precision cut €200 notes', 'Yellow-brown bank wrapper', 'Film production anti-glare finish'],
    specs: {
      dimensions: '153mm x 77mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / REPLICA ONLY"',
      strapType: 'Yellow bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#B45309', accent: '#FDE047', label: 'Amber Gold' },
    seoKeywords: [
      'realistic euro prop money',
      '200 euro prop money',
      'fake 200 euro bills',
      'european film prop money',
      'cinema grade euro props'
    ],
    variants: [
      { id: 'eur200-100', name: 'Single Stack (100 Notes)', price: 5000, comparePrice: 6500, noteCount: 100, stagedValue: '€20,000 EUR', isDefault: true },
      { id: 'eur200-200', name: 'Double Stack (200 Notes)', price: 10000, comparePrice: 13000, noteCount: 200, stagedValue: '€40,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-100-stack',
    name: 'Realistic €100 Euro Prop Money Banknote Stack (€10,000 Staged) - Baroque Green European Cinema Props',
    slug: '100-eur-prop-stack-10000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€100 Denominations',
    denomination: 100,
    currencySymbol: '€',
    price: 2500,
    comparePrice: 3200,
    stagedValue: '€10,000 EUR',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 vibrant green €100 Euro prop banknotes bundled in €10,000 cash band.',
    description: 'The most popular Euro banknote on European television. Crisp green Baroque architectural motifs with clear simulated window details and authentic bank strap.',
    features: ['100 double-sided €100 replica notes', 'Green bank wrapper band', 'Matte anti-glare finish for 4K video'],
    specs: {
      dimensions: '147mm x 77mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Green bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#047857', accent: '#34D399', label: 'Baroque Green' },
    seoKeywords: [
      'realistic euro prop money',
      '100 euro prop money',
      'fake 100 euro bills',
      'euro movie cash',
      'prop money for film',
      'stage money euro'
    ],
    variants: [
      { id: 'eur100-100', name: 'Single Stack (100 Notes)', price: 2500, comparePrice: 3200, noteCount: 100, stagedValue: '€10,000 EUR', isDefault: true },
      { id: 'eur100-200', name: 'Double Stack (200 Notes)', price: 5000, comparePrice: 6500, noteCount: 200, stagedValue: '€20,000 EUR' },
      { id: 'eur100-500', name: '5x Stunt Pack (500 Notes)', price: 12500, comparePrice: 16000, noteCount: 500, stagedValue: '€50,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-50-stack',
    name: 'Realistic €50 Euro Prop Money Banknote Stack (€5,000 Staged) - Renaissance Orange Prop Bills',
    slug: '50-eur-prop-stack-5000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€50 Denominations',
    denomination: 50,
    currencySymbol: '€',
    price: 1250,
    comparePrice: 1650,
    stagedValue: '€5,000 EUR',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 orange Renaissance €50 Euro prop bills strapped with €5,000 band.',
    description: 'The most widely circulated banknote across the eurozone. Warm orange and terracotta hues calibrated for cinema sensors.',
    features: ['100 notes per bundle', 'Orange €5,000 bank band', 'Durable synthetic paper'],
    specs: {
      dimensions: '140mm x 77mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / REPLICA"',
      strapType: 'Orange bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#C2410C', accent: '#FB923C', label: 'Renaissance Orange' },
    seoKeywords: [
      'realistic euro prop money',
      '50 euro prop money',
      'fake 50 euro bills',
      'double sided euro props',
      'film production euro notes'
    ],
    variants: [
      { id: 'eur50-100', name: 'Single Stack (100 Notes)', price: 1250, comparePrice: 1650, noteCount: 100, stagedValue: '€5,000 EUR', isDefault: true },
      { id: 'eur50-200', name: 'Double Stack (200 Notes)', price: 2500, comparePrice: 3200, noteCount: 200, stagedValue: '€10,000 EUR' },
      { id: 'eur50-500', name: '5x Stunt Pack (500 Notes)', price: 6250, comparePrice: 8000, noteCount: 500, stagedValue: '€25,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-20-stack',
    name: 'Realistic €20 Euro Prop Money Banknote Stack (€2,000 Staged) - Gothic Blue Film & TV Prop Notes',
    slug: '20-eur-prop-stack-2000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€20 Denominations',
    denomination: 20,
    currencySymbol: '€',
    price: 500,
    comparePrice: 650,
    stagedValue: '€2,000 EUR',
    noteCount: 100,
    shortDescription: '100 sky blue €20 Euro prop notes with €2,000 bank band.',
    description: 'Gothic architecture motifs in vibrant sky and cobalt blue. Great for European cafe scenes, hotel lobby transactions, and wallet props.',
    features: ['100 notes', 'Blue bank wrapper band', 'Compliant European reproduction markings'],
    specs: {
      dimensions: '133mm x 72mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Blue bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#0284C7', accent: '#38BDF8', label: 'Gothic Blue' },
    seoKeywords: [
      'realistic euro prop money',
      '20 euro prop money',
      'fake 20 euro notes',
      'theatrical euro money',
      'movie money europe'
    ],
    variants: [
      { id: 'eur20-100', name: 'Single Stack (100 Notes)', price: 500, comparePrice: 650, noteCount: 100, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur20-200', name: 'Double Stack (200 Notes)', price: 1000, comparePrice: 1300, noteCount: 200, stagedValue: '€4,000 EUR' },
      { id: 'eur20-500', name: '5x Stunt Pack (500 Notes)', price: 2500, comparePrice: 3200, noteCount: 500, stagedValue: '€10,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-10-stack',
    name: 'Realistic €10 Euro Prop Money Banknote Stack (€2,000 Staged) - Romanesque Red Film Prop Bills',
    slug: '10-eur-prop-stack-1000',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€10 Denominations',
    denomination: 10,
    currencySymbol: '€',
    price: 500,
    comparePrice: 650,
    stagedValue: '€2,000 EUR',
    noteCount: 200,
    shortDescription: '200 Romanesque red €10 Euro prop notes (2 Strapped Stacks) with €2,000 currency value.',
    description: 'Crisp double-sided €10 European prop banknotes showcasing Romanesque architecture bridges and arches in deep coral red. Ideal for European restaurant scenes, tipping, and cash registers.',
    features: ['200 precision cut €10 replica notes (2 x €1,000 bands)', 'Coral red bank wrapper bands', 'Compliant European film prop legal disclaimer'],
    specs: {
      dimensions: '127mm x 67mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK matte',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Coral red paper bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#BE123C', accent: '#FB7185', label: 'Romanesque Red' },
    seoKeywords: [
      'realistic euro prop money',
      '10 euro prop money',
      'fake 10 euro bills',
      'european cinema prop notes',
      'tv prop money'
    ],
    variants: [
      { id: 'eur10-200', name: 'Double Stack (200 Notes)', price: 500, comparePrice: 650, noteCount: 200, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur10-500', name: '5x Stunt Pack (500 Notes)', price: 1250, comparePrice: 1650, noteCount: 500, stagedValue: '€5,000 EUR' },
      { id: 'eur10-1000', name: '10x Studio Lot (1,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 1000, stagedValue: '€10,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-5-stack',
    name: 'Realistic €5 Euro Prop Money Banknote Stack (€2,000 Staged) - Classical Grey European Movie Cash',
    slug: '5-eur-prop-stack-500',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€5 Denominations',
    denomination: 5,
    currencySymbol: '€',
    price: 500,
    comparePrice: 650,
    stagedValue: '€2,000 EUR',
    noteCount: 400,
    shortDescription: '400 classical grey €5 Euro prop banknotes (4 Strapped Stacks) bundled with €2,000 staged currency value.',
    description: 'The entry-level Euro denomination featuring classical architecture motifs in refined slate-grey. Perfect for street market scenes, train ticket purchases, and everyday Euro cash transactions.',
    features: ['400 classical grey notes (4 x €500 bands)', 'Slate €500 bank strap bands', 'Non-reflective camera coating'],
    specs: {
      dimensions: '120mm x 62mm',
      material: 'Synthetic matte paper',
      printType: 'Double-sided CMYK matte finish',
      legalMarkings: 'Marked "PROP COPY / REPLICA ONLY"',
      strapType: 'Slate grey paper bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#4B5563', accent: '#9CA3AF', label: 'Classical Grey' },
    seoKeywords: [
      'realistic euro prop money',
      '5 euro prop money',
      'fake 5 euro bills',
      'theatrical props euro',
      'motion picture euro notes'
    ],
    variants: [
      { id: 'eur5-400', name: 'Quad Stack (400 Notes)', price: 500, comparePrice: 650, noteCount: 400, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur5-1000', name: '10x Production Pack (1,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 1000, stagedValue: '€5,000 EUR' },
      { id: 'eur5-2000', name: '20x Studio Lot (2,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 2000, stagedValue: '€10,000 EUR' }
    ]
  },

  // ==========================================
  // BRITISH POUNDS (GBP)
  // ==========================================
  {
    id: 'prop-gbp-50-stack',
    name: 'Realistic £50 GBP Prop Money Polymer Note Stack (£5,000 Staged) - Alan Turing Series Movie Cash',
    slug: '50-gbp-alan-turing-prop-stack',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£50 Denominations',
    denomination: 50,
    currencySymbol: '£',
    price: 1250,
    comparePrice: 1650,
    stagedValue: '£5,000 GBP',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 Bank of England £50 red polymer prop notes featuring Alan Turing tribute.',
    description: 'The pinnacle of modern British currency styling. Features the bold red-salmon polymer aesthetic celebrating computing pioneer Alan Turing, ticker tape motifs, and £5,000 bank band.',
    features: ['100 double-sided British £50 polymer replica notes', 'Salmon-red color calibrated for film cameras', 'Marked "PROP COPY / NOT LEGAL TENDER"'],
    specs: {
      dimensions: '146mm x 77mm',
      material: 'Synthetic polymer paper blend',
      printType: 'Double-sided CMYK matte finish',
      legalMarkings: 'Marked "PROP COPY ONLY / NOT LEGAL TENDER"',
      strapType: 'Red Bank of England style currency wrapper'
    },
    inStock: true,
    colorScheme: { primary: '#BE123C', accent: '#F87171', label: 'Turing Red' },
    seoKeywords: [
      'realistic british pound prop money',
      'fake 50 pound notes',
      '50 gbp prop money',
      'uk movie money',
      'alan turing prop notes',
      'bank of england prop money'
    ],
    variants: [
      { id: 'gbp50-100', name: 'Single Stack (100 Notes)', price: 1250, comparePrice: 1650, noteCount: 100, stagedValue: '£5,000 GBP', isDefault: true },
      { id: 'gbp50-200', name: 'Double Stack (200 Notes)', price: 2500, comparePrice: 3200, noteCount: 200, stagedValue: '£10,000 GBP' },
      { id: 'gbp50-500', name: '5x Stunt Pack (500 Notes)', price: 6250, comparePrice: 8000, noteCount: 500, stagedValue: '£25,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-20-stack',
    name: 'Realistic £20 GBP Prop Money Polymer Note Stack (£2,000 Staged) - J.M.W. Turner UK Film Prop Notes',
    slug: '20-gbp-turner-prop-stack',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£20 Denominations',
    denomination: 20,
    currencySymbol: '£',
    price: 500,
    comparePrice: 650,
    stagedValue: '£2,000 GBP',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 purple Bank of England £20 polymer prop bills with Turner Fighting Temeraire artwork.',
    description: 'The most common high-value banknote in British television and cinema. Captures the rich royal purple tones of the UK £20 note with compliant replica stamps.',
    features: ['100 double-sided British £20 notes', 'Purple polymer look and feel', 'Includes £2,000 bank band'],
    specs: {
      dimensions: '139mm x 73mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP NOTE / REPLICA"',
      strapType: 'Purple bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#6B21A8', accent: '#C084FC', label: 'Turner Purple' },
    seoKeywords: [
      'realistic british pound prop money',
      'fake 20 pound notes',
      '20 gbp prop money',
      'british film prop cash',
      'polymer prop pounds',
      'london movie money'
    ],
    variants: [
      { id: 'gbp20-100', name: 'Single Stack (100 Notes)', price: 500, comparePrice: 650, noteCount: 100, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp20-200', name: 'Double Stack (200 Notes)', price: 1000, comparePrice: 1300, noteCount: 200, stagedValue: '£4,000 GBP' },
      { id: 'gbp20-500', name: '5x Stunt Pack (500 Notes)', price: 2500, comparePrice: 3200, noteCount: 500, stagedValue: '£10,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-10-stack',
    name: 'Realistic £10 GBP Prop Money Polymer Note Stack (£2,000 Staged) - Jane Austen Cinema Prop Pounds',
    slug: '10-gbp-austen-prop-stack',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£10 Denominations',
    denomination: 10,
    currencySymbol: '£',
    price: 500,
    comparePrice: 650,
    stagedValue: '£2,000 GBP',
    noteCount: 200,
    shortDescription: '200 warm orange-brown British £10 polymer prop notes (2 Strapped Stacks) with £2,000 staged value.',
    description: 'Faithful reproduction of the British ten-pound note honoring author Jane Austen. Essential for London pub scenes, taxi fares, and shop registers.',
    features: ['200 polymer notes (2 x £1,000 bands)', 'Orange-brown bank bands', 'Matte anti-glare finish'],
    specs: {
      dimensions: '132mm x 69mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY ONLY"',
      strapType: 'Orange bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#9A3412', accent: '#FB923C', label: 'Austen Ochre' },
    seoKeywords: [
      'realistic british pound prop money',
      'fake 10 pound notes',
      '10 gbp prop money',
      'jane austen prop notes',
      'theatre prop money uk'
    ],
    variants: [
      { id: 'gbp10-200', name: 'Double Stack (200 Notes)', price: 500, comparePrice: 650, noteCount: 200, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp10-500', name: '5x Stunt Pack (500 Notes)', price: 1250, comparePrice: 1650, noteCount: 500, stagedValue: '£5,000 GBP' },
      { id: 'gbp10-1000', name: '10x Studio Lot (1,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 1000, stagedValue: '£10,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-5-stack',
    name: 'Realistic £5 GBP Prop Money Polymer Note Stack (£2,000 Staged) - Winston Churchill Teal Movie Banknotes',
    slug: '5-gbp-churchill-prop-stack',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£5 Denominations',
    denomination: 5,
    currencySymbol: '£',
    price: 500,
    comparePrice: 650,
    stagedValue: '£2,000 GBP',
    noteCount: 400,
    shortDescription: '400 bright cyan-teal British £5 polymer prop notes (4 Strapped Stacks) with £2,000 staged value.',
    description: 'The compact British five-pound note with Churchill portrait and Elizabeth Tower clock face. Engineered for quick on-camera handling.',
    features: ['400 cyan notes (4 x £500 bands)', 'Cyan bank straps', 'Tactile polymer flex'],
    specs: {
      dimensions: '125mm x 65mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP NOTE / NOT LEGAL TENDER"',
      strapType: 'Cyan bank strap'
    },
    inStock: true,
    colorScheme: { primary: '#0E7490', accent: '#22D3EE', label: 'Churchill Teal' },
    seoKeywords: [
      'realistic british pound prop money',
      'fake 5 pound notes',
      '5 gbp prop money',
      'winston churchill prop notes',
      'uk film props'
    ],
    variants: [
      { id: 'gbp5-400', name: 'Quad Stack (400 Notes)', price: 500, comparePrice: 650, noteCount: 400, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp5-1000', name: '10x Production Pack (1,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 1000, stagedValue: '£5,000 GBP' },
      { id: 'gbp5-2000', name: '20x Studio Lot (2,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 2000, stagedValue: '£10,000 GBP' }
    ]
  },

  // ==========================================
  // CANADIAN DOLLARS (CAD)
  // ==========================================
  {
    id: 'prop-cad-100-stack',
    name: 'Realistic $100 CAD Canadian Prop Money Polymer Stack ($10,000 Staged) - Robert Borden Movie Cash',
    slug: '100-cad-borden-prop-stack',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: 'C$',
    price: 2500,
    comparePrice: 3200,
    stagedValue: '$10,000 CAD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 Canadian $100 brown polymer prop notes with authentic Bank of Canada bank band.',
    description: 'Designed for Canadian cinema, Toronto & Vancouver sound stages, and Hollywood North productions. Features the rich brown polymer Frontier Series design celebrating medical innovation with clear window simulation.',
    features: ['100 Canadian polymer $100 notes', 'Frontier series brown styling', 'Includes $10,000 bank band', 'Compliant Canadian prop markings'],
    specs: {
      dimensions: '152.4mm x 69.85mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK anti-glare finish',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER / POUR CINEMA SEULEMENT"',
      strapType: 'Brown kraft currency band'
    },
    inStock: true,
    colorScheme: { primary: '#78350F', accent: '#FBBF24', label: 'Frontier Brown' },
    seoKeywords: [
      'realistic canadian prop money',
      'fake 100 dollar bills canada',
      '100 cad prop money',
      'canadian movie money',
      'film props vancouver toronto'
    ],
    variants: [
      { id: 'cad100-100', name: 'Single Stack (100 Notes)', price: 2500, comparePrice: 3200, noteCount: 100, stagedValue: '$10,000 CAD', isDefault: true },
      { id: 'cad100-200', name: 'Double Stack (200 Notes)', price: 5000, comparePrice: 6500, noteCount: 200, stagedValue: '$20,000 CAD' },
      { id: 'cad100-500', name: '5x Stunt Pack (500 Notes)', price: 12500, comparePrice: 16000, noteCount: 500, stagedValue: '$50,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-50-stack',
    name: 'Realistic $50 CAD Canadian Prop Money Polymer Stack ($5,000 Staged) - Arctic Red Film Prop Cash',
    slug: '50-cad-prop-stack-5000',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: 'C$',
    price: 1250,
    comparePrice: 1650,
    stagedValue: '$5,000 CAD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 bold red Canadian $50 polymer prop bills with CCGS Amundsen arctic icebreaker motif.',
    description: 'Iconic vivid red Canadian fifty-dollar prop notes. Perfect for winter drama shoots, bank robbery sequences, and corporate bribery set pieces in Vancouver or Montreal.',
    features: ['100 double-sided red polymer notes', 'Red $5,000 bank strap', 'Non-reflective studio coating'],
    specs: {
      dimensions: '152.4mm x 69.85mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / REPLICA"',
      strapType: 'Red bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#991B1B', accent: '#F87171', label: 'Arctic Red' },
    seoKeywords: [
      'realistic canadian prop money',
      'fake 50 dollar bills canada',
      '50 cad prop money',
      'canadian film prop money',
      'cinema props canada'
    ],
    variants: [
      { id: 'cad50-100', name: 'Single Stack (100 Notes)', price: 1250, comparePrice: 1650, noteCount: 100, stagedValue: '$5,000 CAD', isDefault: true },
      { id: 'cad50-200', name: 'Double Stack (200 Notes)', price: 2500, comparePrice: 3200, noteCount: 200, stagedValue: '$10,000 CAD' },
      { id: 'cad50-500', name: '5x Stunt Pack (500 Notes)', price: 6250, comparePrice: 8000, noteCount: 500, stagedValue: '$25,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-20-stack',
    name: 'Realistic $20 CAD Canadian Prop Money Polymer Stack ($2,000 Staged) - Vimy Green Film & TV Prop Notes',
    slug: '20-cad-prop-stack-2000',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: 'C$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 CAD',
    noteCount: 100,
    shortDescription: '100 forest green Canadian $20 polymer prop bills with Vimy Memorial artwork.',
    description: 'The workhorse of Canadian film production sets. Vibrant forest green tones with compliant bilingual prop notices.',
    features: ['100 notes per bundle', 'Green $2,000 bank band', 'Polymer tactile flex'],
    specs: {
      dimensions: '152.4mm x 69.85mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Green bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#14532D', accent: '#4ADE80', label: 'Vimy Green' },
    seoKeywords: [
      'realistic canadian prop money',
      'fake 20 dollar bills canada',
      '20 cad prop money',
      'canadian stage money',
      'vancouver movie props'
    ],
    variants: [
      { id: 'cad20-100', name: 'Single Stack (100 Notes)', price: 500, comparePrice: 650, noteCount: 100, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad20-200', name: 'Double Stack (200 Notes)', price: 1000, comparePrice: 1300, noteCount: 200, stagedValue: '$4,000 CAD' },
      { id: 'cad20-500', name: '5x Stunt Pack (500 Notes)', price: 2500, comparePrice: 3200, noteCount: 500, stagedValue: '$10,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-10-stack',
    name: 'Realistic $10 CAD Canadian Prop Money Polymer Stack ($2,000 Staged) - Viola Desmond Vertical Movie Cash',
    slug: '10-cad-prop-stack-1000',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: 'C$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 CAD',
    noteCount: 200,
    shortDescription: '200 purple Canadian $10 vertical polymer prop notes (2 Strapped Stacks) with $2,000 staged value.',
    description: 'Canada’s groundbreaking vertical orientation banknote honoring civil rights activist Viola Desmond. Reproduced with authentic violet tones for film scenes.',
    features: ['200 vertical-format notes (2 x $1,000 bands)', 'Purple $1,000 bank bands', 'Bilingual French/English prop legal disclaimer'],
    specs: {
      dimensions: '152.4mm x 69.85mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / REPLICA / POUR CINEMA"',
      strapType: 'Purple bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#581C87', accent: '#C084FC', label: 'Vertical Purple' },
    seoKeywords: [
      'realistic canadian prop money',
      'fake 10 dollar bills canada',
      '10 cad prop money',
      'viola desmond prop notes',
      'vertical prop money'
    ],
    variants: [
      { id: 'cad10-200', name: 'Double Stack (200 Notes)', price: 500, comparePrice: 650, noteCount: 200, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad10-500', name: '5x Stunt Pack (500 Notes)', price: 1250, comparePrice: 1650, noteCount: 500, stagedValue: '$5,000 CAD' },
      { id: 'cad10-1000', name: '10x Studio Lot (1,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 1000, stagedValue: '$10,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-5-stack',
    name: 'Realistic $5 CAD Canadian Prop Money Polymer Stack ($2,000 Staged) - Canadarm2 Blue Prop Bills',
    slug: '5-cad-prop-stack-500',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$5 Denominations',
    denomination: 5,
    currencySymbol: 'C$',
    price: 500,
    comparePrice: 650,
    stagedValue: '$2,000 CAD',
    noteCount: 400,
    shortDescription: '400 bright blue Canadian $5 polymer prop notes (4 Strapped Stacks) with $2,000 staged currency value.',
    description: 'Canadian five-dollar polymer note featuring astronaut and Canadarm2 robotic arm motifs in royal blue.',
    features: ['400 blue polymer notes (4 x $500 bands)', 'Blue bank bands', 'Matte camera finish'],
    specs: {
      dimensions: '152.4mm x 69.85mm',
      material: 'Synthetic polymer paper',
      printType: 'Double-sided CMYK',
      legalMarkings: 'Marked "PROP COPY / NOT LEGAL TENDER"',
      strapType: 'Blue bank currency band'
    },
    inStock: true,
    colorScheme: { primary: '#0369A1', accent: '#38BDF8', label: 'Canadarm Blue' },
    seoKeywords: [
      'realistic canadian prop money',
      'fake 5 dollar bills canada',
      '5 cad prop money',
      'canadian prop banknotes',
      'canadarm prop money'
    ],
    variants: [
      { id: 'cad5-400', name: 'Quad Stack (400 Notes)', price: 500, comparePrice: 650, noteCount: 400, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad5-1000', name: '10x Production Pack (1,000 Notes)', price: 1250, comparePrice: 1650, noteCount: 1000, stagedValue: '$5,000 CAD' },
      { id: 'cad5-2000', name: '20x Studio Lot (2,000 Notes)', price: 2500, comparePrice: 3300, noteCount: 2000, stagedValue: '$10,000 CAD' }
    ]
  }
];
