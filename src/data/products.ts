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
    name: '$100 AUD Prop Money Stack ($10,000 Staged) - Emerald Sydney Harbour Film & TV Prop Notes',
    slug: '100-aud-prop-stack-10000',
    image: '/products/photos/100-aud-prop-stack-10000.webp',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$10,000 AUD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 emerald-green Australian $100 prop notes featuring a Sydney Harbour scene, strapped in a PROP MONEY band.',
    description: 'Our flagship Australian prop stack for film, TV and theatre. Emerald-green notes show an original Sydney Opera House and Harbour Bridge scene framed by golden wattle, with a large red "PROP COPY" marking across the face. 75% scale, one-sided with a blank reverse.',
    features: [
      '100 one-sided $100 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Matte finish to prevent studio camera glare'
    ],
    specs: {
      dimensions: '119mm x 49mm (75% scale)',
      material: 'Synthetic polymer paper (120gsm)',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#00843D', accent: '#FFCD00', label: 'Emerald Green' },
    seoKeywords: [
      'prop money australia',
      '100 aud prop money',
      'movie money australia',
      'polymer prop banknotes',
      'australian crimes act compliant prop money'
    ],
    variants: [
      { id: 'aud100-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$10,000 AUD', isDefault: true },
      { id: 'aud100-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$20,000 AUD' },
      { id: 'aud100-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$50,000 AUD' },
      { id: 'aud100-1000', name: '10x Vault Brick (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$100,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-50-stack',
    name: '$50 AUD Prop Money Stack ($5,000 Staged) - Golden Sydney Harbour Cinema Prop Cash',
    slug: '50-aud-prop-stack-5000',
    image: '/products/photos/50-aud-prop-stack-5000.webp',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$5,000 AUD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 golden-ochre Australian $50 prop notes featuring a Sydney Harbour scene, strapped in a PROP MONEY band.',
    description: 'The workhorse of Australian drama and crime productions. Warm golden-ochre notes with an original Sydney Opera House and Harbour Bridge design and wattle sprigs. Perfect for card tables and briefcase handoffs.',
    features: [
      '100 one-sided $50 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Golden-ochre tones that read well on camera'
    ],
    specs: {
      dimensions: '113mm x 49mm (75% scale)',
      material: 'Synthetic polymer blend with natural tactile flex',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#E09F3E', accent: '#335C67', label: 'Golden Ochre' },
    seoKeywords: [
      '50 aud prop money',
      'cinema prop money',
      'australian movie money stacks',
      'prop cash 50 aud'
    ],
    variants: [
      { id: 'aud50-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$5,000 AUD', isDefault: true },
      { id: 'aud50-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$10,000 AUD' },
      { id: 'aud50-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$25,000 AUD' },
      { id: 'aud50-1000', name: '10x Vault Brick (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$50,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-20-stack',
    name: '$20 AUD Prop Money Stack ($2,000 Staged) - Coral Red Sydney Harbour Movie Money',
    slug: '20-aud-prop-stack-2000',
    image: '/products/photos/20-aud-prop-stack-2000.webp',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$2,000 AUD',
    noteCount: 100,
    shortDescription: '100 coral-red Australian $20 prop notes featuring a Sydney Harbour scene, strapped in a PROP MONEY band.',
    description: 'Instantly recognisable on camera thanks to the bold coral-red palette and original Sydney Harbour artwork. Essential for street-level transactions, cash register dressing, and pub or nightclub sets.',
    features: [
      '100 one-sided $20 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Red and orange colour balance calibrated for camera sensors'
    ],
    specs: {
      dimensions: '108mm x 49mm (75% scale)',
      material: 'Synthetic polymer paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#C9184A', accent: '#FF758F', label: 'Coral Red' },
    seoKeywords: [
      '20 aud prop money',
      'movie money',
      'film props australia',
      'theatrical money'
    ],
    variants: [
      { id: 'aud20-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$2,000 AUD', isDefault: true },
      { id: 'aud20-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$4,000 AUD' },
      { id: 'aud20-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$10,000 AUD' }
    ]
  },
  {
    id: 'prop-aud-10-stack',
    name: '$10 AUD Prop Money Stack ($2,000 Staged) - Ocean Blue Sydney Harbour Theatrical Prop Notes',
    slug: '10-aud-prop-stack-1000',
    image: '/products/photos/10-aud-prop-stack-1000.webp',
    currency: 'AUD',
    category: 'Australian Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: '$',
    price: 69,
    stagedValue: '$2,000 AUD',
    noteCount: 200,
    shortDescription: '200 ocean-blue Australian $10 prop notes (2 strapped stacks of 100) featuring a Sydney Harbour scene.',
    description: 'Ocean-blue notes with an original Sydney Opera House and Harbour Bridge design and wattle detail. Ideal for cash drawers, market stall scenes, teller training, and indie theatre.',
    features: [
      '200 one-sided $10 prop notes (2 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Designed to follow RBA reproduction guidelines'
    ],
    specs: {
      dimensions: '103mm x 49mm (75% scale)',
      material: 'High-density synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#0077B6', accent: '#90E0EF', label: 'Ocean Blue' },
    seoKeywords: [
      '10 aud prop money',
      'stage money',
      'film cash props',
      'australian prop notes'
    ],
    variants: [
      { id: 'aud10-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$2,000 AUD', isDefault: true },
      { id: 'aud10-500', name: '5x Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$5,000 AUD' },
      { id: 'aud10-1000', name: '10x Studio Lot (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$10,000 AUD' }
    ]
  },

  // ==========================================
  // US DOLLARS (USD)
  // ==========================================
  {
    id: 'prop-usd-100-stack',
    name: '$100 USD Prop Money Bills Stack ($10,000 Staged) - Clock Tower Hall Movie Money',
    slug: '100-usd-blue-ribbon-prop-stack',
    image: '/products/photos/100-usd-blue-ribbon-prop-stack.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$10,000 USD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 US $100-style prop bills featuring a clock-tower hall vignette, strapped in a PROP MONEY band.',
    description: 'A go-to stack for heist movies, music videos, and TV drama. Blue-grey and cream bills with an original clock-tower hall engraving, ornate "100" corners, and a large red "PROP COPY" marking. 75% scale, one-sided with a blank reverse.',
    features: [
      '100 one-sided US $100 prop bills',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Matte linen-textured paper for handling on set'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'High-density linen cotton paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#2D3748', accent: '#00D2D3', label: 'Liberty Blue-Grey' },
    seoKeywords: [
      '100 dollar bill prop money',
      'movie money stacks',
      'motion picture prop money',
      'prop money 100'
    ],
    variants: [
      { id: 'usd100-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$10,000 USD', isDefault: true },
      { id: 'usd100-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$20,000 USD' },
      { id: 'usd100-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$50,000 USD' },
      { id: 'usd100-1000', name: '10x Bank Brick (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$100,000 USD' }
    ]
  },
  {
    id: 'prop-usd-50-stack',
    name: '$50 USD Prop Money Bills Stack ($5,000 Staged) - Capitol Dome Motion Picture Cash',
    slug: '50-usd-prop-stack-5000',
    image: '/products/photos/50-usd-prop-stack-5000.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$5,000 USD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 US $50-style prop bills featuring a Capitol dome vignette, strapped in a PROP MONEY band.',
    description: 'Essential for casino poker scenes, ransom drops, and mobster handoffs. Soft peach-toned bills with an original Capitol dome engraving under a summer sky and a large red "PROP COPY" marking.',
    features: [
      '100 one-sided US $50 prop bills',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Film production anti-glare finish'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'Linen cotton blend paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#334155', accent: '#818CF8', label: 'Capitol Peach' },
    seoKeywords: [
      '50 dollar bill prop money',
      'movie money 50',
      'film prop cash',
      'stage money 50 bills'
    ],
    variants: [
      { id: 'usd50-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$5,000 USD', isDefault: true },
      { id: 'usd50-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$10,000 USD' },
      { id: 'usd50-500', name: '5x Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$25,000 USD' }
    ]
  },
  {
    id: 'prop-usd-20-stack',
    name: '$20 USD Prop Money Bills Stack ($2,000 Staged) - White House Movie Money for Filming',
    slug: '20-usd-prop-stack-2000',
    image: '/products/photos/20-usd-prop-stack-2000.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: '$',
    price: 39,
    stagedValue: '$2,000 USD',
    noteCount: 100,
    shortDescription: '100 US $20-style prop bills featuring a White House vignette, strapped in a PROP MONEY band.',
    description: 'The everyday street-cash denomination of American cinema. Green-and-cream bills with an original White House engraving. Widely used for convenience store scenes, wallet props, and cash envelope handoffs.',
    features: [
      '100 one-sided US $20 prop bills',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Non-reflective studio paper'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'Linen paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#1E293B', accent: '#10B981', label: 'Classic Green' },
    seoKeywords: [
      '20 dollar bill prop money',
      'movie money for music videos',
      'prop money bills',
      'street cash prop'
    ],
    variants: [
      { id: 'usd20-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd20-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$4,000 USD' },
      { id: 'usd20-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-10-stack',
    name: '$10 USD Prop Money Bills Stack ($2,000 Staged) - Portico Mansion Cinema Prop Cash',
    slug: '10-usd-prop-stack-1000',
    image: '/products/photos/10-usd-prop-stack-1000.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: '$',
    price: 69,
    stagedValue: '$2,000 USD',
    noteCount: 200,
    shortDescription: '200 US $10-style prop bills (2 strapped stacks of 100) featuring a columned mansion vignette.',
    description: 'Warm amber-cream bills with an original columned mansion engraving and gold "10" corner. Perfect for cash drawers, tip jars, and small exchanges on set.',
    features: [
      '200 one-sided US $10 prop bills (2 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Legal motion picture prop copy'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'Linen paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#334155', accent: '#F59E0B', label: 'Amber Cream' },
    seoKeywords: [
      '10 dollar bill prop money',
      'motion picture cash',
      'cinema props',
      'prop money stacks'
    ],
    variants: [
      { id: 'usd10-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd10-500', name: '5x Production Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$5,000 USD' },
      { id: 'usd10-1000', name: '10x Studio Lot (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-5-stack',
    name: '$5 USD Prop Money Bills Stack ($2,000 Staged) - Memorial Hall One-Sided Prop Bills',
    slug: '5-usd-prop-stack-500',
    image: '/products/photos/5-usd-prop-stack-500.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$5 Denominations',
    denomination: 5,
    currencySymbol: '$',
    price: 119,
    stagedValue: '$2,000 USD',
    noteCount: 400,
    shortDescription: '400 US $5-style prop bills (4 strapped stacks of 100) featuring a columned memorial hall vignette.',
    description: 'One-sided prop bills with an original columned memorial hall engraving in soft grey-green. Essential for cash register drawers and wallet dressing.',
    features: [
      '400 one-sided US $5 prop bills (4 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Follows US motion picture prop guidelines'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'Linen paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#1E293B', accent: '#8B5CF6', label: 'Memorial Grey-Green' },
    seoKeywords: [
      '5 dollar bill prop money',
      'movie money props',
      'film production money'
    ],
    variants: [
      { id: 'usd5-400', name: 'Quad Stack (400 Notes)', price: 119, noteCount: 400, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd5-1000', name: '10x Production Pack (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$5,000 USD' },
      { id: 'usd5-2000', name: '20x Studio Lot (2,000 Notes)', price: 399, noteCount: 2000, stagedValue: '$10,000 USD' }
    ]
  },
  {
    id: 'prop-usd-1-stack',
    name: '$1 USD Prop Money Bills Stack ($2,000 Staged) - Classic Greenback Movie Cash',
    slug: '1-usd-prop-stack-100',
    image: '/products/photos/1-usd-prop-stack-100.webp',
    currency: 'USD',
    category: 'US Dollars',
    subcategory: '$1 Denominations',
    denomination: 1,
    currencySymbol: '$',
    price: 399,
    stagedValue: '$2,000 USD',
    noteCount: 2000,
    shortDescription: '2,000 US $1-style prop bills (20 strapped stacks of 100) for rain scenes, music videos, and film.',
    description: 'Classic greenback-style prop bills with an original Capitol dome engraving and ornate "1" corners. The staple for nightclub rain scenes, tip scenes, and vintage sequences.',
    features: [
      '2,000 one-sided US $1 prop bills (20 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Light paper ideal for money-throw scenes'
    ],
    specs: {
      dimensions: '117mm x 50mm (75% scale)',
      material: 'Textured linen paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#143224', accent: '#34D399', label: 'Classic Greenback' },
    seoKeywords: [
      '1 dollar bill prop money',
      'prop money for rain scenes',
      'classic greenback movie money',
      'prop money singles'
    ],
    variants: [
      { id: 'usd1-2000', name: 'Studio Brick (2,000 Notes)', price: 399, noteCount: 2000, stagedValue: '$2,000 USD', isDefault: true },
      { id: 'usd1-5000', name: 'Vault Pack (5,000 Notes)', price: 749, noteCount: 5000, stagedValue: '$5,000 USD' },
      { id: 'usd1-10000', name: 'Cinema Mega Pack (10,000 Notes)', price: 1499, noteCount: 10000, stagedValue: '$10,000 USD' }
    ]
  },

  // ==========================================
  // EURO (EUR)
  // ==========================================
  {
    id: 'prop-eur-500-stack',
    name: '€500 Euro Prop Money Stack (€50,000 Staged) - Purple Modern Tower Movie Money',
    slug: '500-eur-prop-stack-50000',
    image: '/products/photos/500-eur-prop-stack-50000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€500 Denominations',
    denomination: 500,
    currencySymbol: '€',
    price: 39,
    stagedValue: '€50,000 EUR',
    noteCount: 100,
    badge: 'Premium',
    shortDescription: '100 purple €500 prop notes featuring modern glass-tower architecture, strapped in a PROP MONEY band.',
    description: 'The top choice for luxury heist films, Monaco casino thrillers, and international spy dramas. Rich purple notes with modern glass-tower architecture, gold stars, and a large red "PROP COPY" marking.',
    features: [
      '100 one-sided €500 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Rich violet-purple styling'
    ],
    specs: {
      dimensions: '120mm x 62mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#581C87', accent: '#C084FC', label: 'Majestic Violet' },
    seoKeywords: [
      '500 euro prop money',
      'euro movie money',
      'prop money euro notes',
      'monaco heist prop cash'
    ],
    variants: [
      { id: 'eur500-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '€50,000 EUR', isDefault: true },
      { id: 'eur500-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€100,000 EUR' },
      { id: 'eur500-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '€250,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-200-stack',
    name: '€200 Euro Prop Money Stack (€20,000 Staged) - Amber Gold Iron & Glass European Film Cash',
    slug: '200-eur-prop-stack-20000',
    image: '/products/photos/200-eur-prop-stack-20000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€200 Denominations',
    denomination: 200,
    currencySymbol: '€',
    price: 39,
    stagedValue: '€20,000 EUR',
    noteCount: 100,
    shortDescription: '100 golden-yellow €200 prop notes featuring iron-and-glass architecture, strapped in a PROP MONEY band.',
    description: 'Golden-yellow notes with 19th-century iron-and-glass arched windows. Perfect for high-value briefcase handoffs and private banking set pieces.',
    features: [
      '100 one-sided €200 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Film production anti-glare finish'
    ],
    specs: {
      dimensions: '115mm x 58mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#B45309', accent: '#FDE047', label: 'Amber Gold' },
    seoKeywords: [
      '200 euro prop money',
      'european film prop money',
      'cinema grade euro props'
    ],
    variants: [
      { id: 'eur200-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '€20,000 EUR', isDefault: true },
      { id: 'eur200-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€40,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-100-stack',
    name: '€100 Euro Prop Money Stack (€10,000 Staged) - Baroque Green European Cinema Props',
    slug: '100-eur-prop-stack-10000',
    image: '/products/photos/100-eur-prop-stack-10000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€100 Denominations',
    denomination: 100,
    currencySymbol: '€',
    price: 39,
    stagedValue: '€10,000 EUR',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 green €100 prop notes featuring a Baroque archway, strapped in a green-edged PROP MONEY band.',
    description: 'A favourite on European television. Fresh green notes with an ornate Baroque archway, gold stars, and a large red "PROP COPY" marking. 75% scale, one-sided.',
    features: [
      '100 one-sided €100 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Matte anti-glare finish for 4K video'
    ],
    specs: {
      dimensions: '110mm x 58mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with green edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#047857', accent: '#34D399', label: 'Baroque Green' },
    seoKeywords: [
      '100 euro prop money',
      'euro movie cash',
      'prop money for film',
      'stage money euro'
    ],
    variants: [
      { id: 'eur100-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '€10,000 EUR', isDefault: true },
      { id: 'eur100-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€20,000 EUR' },
      { id: 'eur100-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '€50,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-50-stack',
    name: '€50 Euro Prop Money Stack (€5,000 Staged) - Renaissance Orange Prop Bills',
    slug: '50-eur-prop-stack-5000',
    image: '/products/photos/50-eur-prop-stack-5000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€50 Denominations',
    denomination: 50,
    currencySymbol: '€',
    price: 39,
    stagedValue: '€5,000 EUR',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 orange €50 prop notes featuring Renaissance architecture, strapped in a PROP MONEY band.',
    description: 'Warm orange and terracotta notes with a Renaissance façade and arched windows, calibrated for cinema sensors.',
    features: [
      '100 one-sided €50 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Durable synthetic paper'
    ],
    specs: {
      dimensions: '105mm x 58mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#C2410C', accent: '#FB923C', label: 'Renaissance Orange' },
    seoKeywords: [
      '50 euro prop money',
      'film production euro notes'
    ],
    variants: [
      { id: 'eur50-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '€5,000 EUR', isDefault: true },
      { id: 'eur50-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€10,000 EUR' },
      { id: 'eur50-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '€25,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-20-stack',
    name: '€20 Euro Prop Money Stack (€2,000 Staged) - Gothic Blue Film & TV Prop Notes',
    slug: '20-eur-prop-stack-2000',
    image: '/products/photos/20-eur-prop-stack-2000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€20 Denominations',
    denomination: 20,
    currencySymbol: '€',
    price: 39,
    stagedValue: '€2,000 EUR',
    noteCount: 100,
    shortDescription: '100 blue €20 prop notes featuring Gothic window tracery, strapped in a PROP MONEY band.',
    description: 'Gothic window tracery in sky and cobalt blue. Great for European café scenes, hotel lobby transactions, and wallet props.',
    features: [
      '100 one-sided €20 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Compliant European reproduction markings'
    ],
    specs: {
      dimensions: '100mm x 54mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#0284C7', accent: '#38BDF8', label: 'Gothic Blue' },
    seoKeywords: [
      '20 euro prop money',
      'theatrical euro money',
      'movie money europe'
    ],
    variants: [
      { id: 'eur20-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur20-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€4,000 EUR' },
      { id: 'eur20-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '€10,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-10-stack',
    name: '€10 Euro Prop Money Stack (€2,000 Staged) - Romanesque Red Film Prop Bills',
    slug: '10-eur-prop-stack-1000',
    image: '/products/photos/10-eur-prop-stack-1000.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€10 Denominations',
    denomination: 10,
    currencySymbol: '€',
    price: 69,
    stagedValue: '€2,000 EUR',
    noteCount: 200,
    shortDescription: '200 coral-red €10 prop notes (2 strapped stacks of 100) featuring Romanesque arches.',
    description: 'Crisp one-sided €10 prop notes with Romanesque arches in deep coral red. Ideal for European restaurant scenes, tipping, and cash registers.',
    features: [
      '200 one-sided €10 prop notes (2 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Coral-red tones that read well on camera'
    ],
    specs: {
      dimensions: '95mm x 50mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#BE123C', accent: '#FB7185', label: 'Romanesque Red' },
    seoKeywords: [
      '10 euro prop money',
      'european cinema prop notes',
      'tv prop money'
    ],
    variants: [
      { id: 'eur10-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur10-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '€5,000 EUR' },
      { id: 'eur10-1000', name: '10x Studio Lot (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '€10,000 EUR' }
    ]
  },
  {
    id: 'prop-eur-5-stack',
    name: '€5 Euro Prop Money Stack (€2,000 Staged) - Classical Grey European Movie Cash',
    slug: '5-eur-prop-stack-500',
    image: '/products/photos/5-eur-prop-stack-500.webp',
    currency: 'EUR',
    category: 'Euro',
    subcategory: '€5 Denominations',
    denomination: 5,
    currencySymbol: '€',
    price: 119,
    stagedValue: '€2,000 EUR',
    noteCount: 400,
    shortDescription: '400 grey €5 prop notes (4 strapped stacks of 100) featuring a classical stone arch.',
    description: 'The entry-level euro denomination, with a classical stone arch in soft grey and pale yellow. Perfect for street market scenes, train tickets, and everyday cash transactions.',
    features: [
      '400 one-sided €5 prop notes (4 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Non-reflective camera finish'
    ],
    specs: {
      dimensions: '90mm x 47mm (75% scale)',
      material: 'Synthetic matte paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#4B5563', accent: '#9CA3AF', label: 'Classical Grey' },
    seoKeywords: [
      '5 euro prop money',
      'theatrical props euro',
      'motion picture euro notes'
    ],
    variants: [
      { id: 'eur5-400', name: 'Quad Stack (400 Notes)', price: 119, noteCount: 400, stagedValue: '€2,000 EUR', isDefault: true },
      { id: 'eur5-1000', name: '10x Production Pack (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '€5,000 EUR' },
      { id: 'eur5-2000', name: '20x Studio Lot (2,000 Notes)', price: 399, noteCount: 2000, stagedValue: '€10,000 EUR' }
    ]
  },

  // ==========================================
  // BRITISH POUNDS (GBP)
  // ==========================================
  {
    id: 'prop-gbp-50-stack',
    name: '£50 GBP Prop Money Stack (£5,000 Staged) - Rose Red Westminster Movie Cash',
    slug: '50-gbp-alan-turing-prop-stack',
    image: '/products/photos/50-gbp-alan-turing-prop-stack.webp',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£50 Denominations',
    denomination: 50,
    currencySymbol: '£',
    price: 39,
    stagedValue: '£5,000 GBP',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 rose-red British £50 prop notes featuring Westminster and Big Ben, strapped in a PROP MONEY band.',
    description: 'The top British denomination for film and TV. Rose-red and pink notes with an original Houses of Parliament, Big Ben and Westminster Bridge scene, plus a large red "PROP COPY" marking.',
    features: [
      '100 one-sided £50 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Rose-red colour calibrated for film cameras'
    ],
    specs: {
      dimensions: '110mm x 58mm (75% scale)',
      material: 'Synthetic polymer paper blend',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#BE123C', accent: '#F87171', label: 'Rose Red' },
    seoKeywords: [
      '50 gbp prop money',
      'uk movie money'
    ],
    variants: [
      { id: 'gbp50-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '£5,000 GBP', isDefault: true },
      { id: 'gbp50-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '£10,000 GBP' },
      { id: 'gbp50-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '£25,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-20-stack',
    name: '£20 GBP Prop Money Stack (£2,000 Staged) - Royal Purple Westminster UK Film Prop Notes',
    slug: '20-gbp-turner-prop-stack',
    image: '/products/photos/20-gbp-turner-prop-stack.webp',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£20 Denominations',
    denomination: 20,
    currencySymbol: '£',
    price: 39,
    stagedValue: '£2,000 GBP',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 purple British £20 prop notes featuring Westminster and Big Ben, strapped in a PROP MONEY band.',
    description: 'The most common high-value note in British television and cinema. Royal purple and lilac notes with an original Westminster skyline scene.',
    features: [
      '100 one-sided £20 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Purple tones that read well on camera'
    ],
    specs: {
      dimensions: '104mm x 55mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#6B21A8', accent: '#C084FC', label: 'Royal Purple' },
    seoKeywords: [
      '20 gbp prop money',
      'british film prop cash',
      'polymer prop pounds',
      'london movie money'
    ],
    variants: [
      { id: 'gbp20-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp20-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '£4,000 GBP' },
      { id: 'gbp20-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '£10,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-10-stack',
    name: '£10 GBP Prop Money Stack (£2,000 Staged) - Copper Westminster Cinema Prop Pounds',
    slug: '10-gbp-austen-prop-stack',
    image: '/products/photos/10-gbp-austen-prop-stack.webp',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£10 Denominations',
    denomination: 10,
    currencySymbol: '£',
    price: 69,
    stagedValue: '£2,000 GBP',
    noteCount: 200,
    shortDescription: '200 copper-orange British £10 prop notes (2 strapped stacks of 100) featuring Westminster and Big Ben.',
    description: 'Warm copper-orange notes with an original Houses of Parliament and Big Ben scene. Essential for London pub scenes, taxi fares, and shop registers.',
    features: [
      '200 one-sided £10 prop notes (2 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Matte anti-glare finish'
    ],
    specs: {
      dimensions: '99mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#9A3412', accent: '#FB923C', label: 'Copper Orange' },
    seoKeywords: [
      '10 gbp prop money',
      'theatre prop money uk'
    ],
    variants: [
      { id: 'gbp10-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp10-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '£5,000 GBP' },
      { id: 'gbp10-1000', name: '10x Studio Lot (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '£10,000 GBP' }
    ]
  },
  {
    id: 'prop-gbp-5-stack',
    name: '£5 GBP Prop Money Stack (£2,000 Staged) - Thames Blue Westminster Movie Banknotes',
    slug: '5-gbp-churchill-prop-stack',
    image: '/products/photos/5-gbp-churchill-prop-stack.webp',
    currency: 'GBP',
    category: 'British Pounds',
    subcategory: '£5 Denominations',
    denomination: 5,
    currencySymbol: '£',
    price: 119,
    stagedValue: '£2,000 GBP',
    noteCount: 400,
    shortDescription: '400 blue British £5 prop notes (4 strapped stacks of 100) featuring Westminster and Big Ben.',
    description: 'Compact British five-pound prop notes in Thames blue with an original Westminster and Big Ben scene. Made for quick on-camera handling.',
    features: [
      '400 one-sided £5 prop notes (4 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Flexible synthetic stock'
    ],
    specs: {
      dimensions: '94mm x 49mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#0E7490', accent: '#22D3EE', label: 'Thames Blue' },
    seoKeywords: [
      '5 gbp prop money',
      'uk film props'
    ],
    variants: [
      { id: 'gbp5-400', name: 'Quad Stack (400 Notes)', price: 119, noteCount: 400, stagedValue: '£2,000 GBP', isDefault: true },
      { id: 'gbp5-1000', name: '10x Production Pack (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '£5,000 GBP' },
      { id: 'gbp5-2000', name: '20x Studio Lot (2,000 Notes)', price: 399, noteCount: 2000, stagedValue: '£10,000 GBP' }
    ]
  },

  // ==========================================
  // CANADIAN DOLLARS (CAD)
  // ==========================================
  {
    id: 'prop-cad-100-stack',
    name: '$100 CAD Canadian Prop Money Stack ($10,000 Staged) - Autumn Mountain Lake Movie Cash',
    slug: '100-cad-borden-prop-stack',
    image: '/products/photos/100-cad-borden-prop-stack.webp',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$100 Denominations',
    denomination: 100,
    currencySymbol: 'C$',
    price: 39,
    stagedValue: '$10,000 CAD',
    noteCount: 100,
    badge: 'Popular',
    shortDescription: '100 autumn-gold Canadian $100 prop notes featuring a mountain lake and maple leaves, strapped in a PROP MONEY band.',
    description: 'Made for Canadian productions, Toronto and Vancouver sound stages, and Hollywood North shoots. Autumn-gold notes with an original mountain lake scene, pine trees, and maple leaves. 75% scale, one-sided, large "PROP COPY" markings.',
    features: [
      '100 one-sided Canadian $100 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Warm autumn tones that read well on camera'
    ],
    specs: {
      dimensions: '114mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#78350F', accent: '#FBBF24', label: 'Autumn Gold' },
    seoKeywords: [
      '100 cad prop money',
      'canadian movie money',
      'film props vancouver toronto'
    ],
    variants: [
      { id: 'cad100-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$10,000 CAD', isDefault: true },
      { id: 'cad100-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$20,000 CAD' },
      { id: 'cad100-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$50,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-50-stack',
    name: '$50 CAD Canadian Prop Money Stack ($5,000 Staged) - Maple Red Mountain Lake Film Prop Cash',
    slug: '50-cad-prop-stack-5000',
    image: '/products/photos/50-cad-prop-stack-5000.webp',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$50 Denominations',
    denomination: 50,
    currencySymbol: 'C$',
    price: 39,
    stagedValue: '$5,000 CAD',
    noteCount: 100,
    badge: 'Best Value',
    shortDescription: '100 maple-red Canadian $50 prop notes featuring a mountain lake scene, strapped in a PROP MONEY band.',
    description: 'Vivid maple-red notes with an original snow-capped mountain lake and pine forest. Perfect for winter drama shoots, bank robbery sequences, and bribery set pieces.',
    features: [
      '100 one-sided Canadian $50 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Non-reflective studio finish'
    ],
    specs: {
      dimensions: '114mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#991B1B', accent: '#F87171', label: 'Maple Red' },
    seoKeywords: [
      '50 cad prop money',
      'canadian film prop money',
      'cinema props canada'
    ],
    variants: [
      { id: 'cad50-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$5,000 CAD', isDefault: true },
      { id: 'cad50-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$10,000 CAD' },
      { id: 'cad50-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$25,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-20-stack',
    name: '$20 CAD Canadian Prop Money Stack ($2,000 Staged) - Forest Green Mountain Lake Prop Notes',
    slug: '20-cad-prop-stack-2000',
    image: '/products/photos/20-cad-prop-stack-2000.webp',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$20 Denominations',
    denomination: 20,
    currencySymbol: 'C$',
    price: 39,
    stagedValue: '$2,000 CAD',
    noteCount: 100,
    shortDescription: '100 forest-green Canadian $20 prop notes featuring a mountain lake scene, strapped in a PROP MONEY band.',
    description: 'The workhorse of Canadian film sets. Forest-green notes with an original mountain lake, pines, and autumn maple leaves.',
    features: [
      '100 one-sided Canadian $20 prop notes',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Flexible synthetic stock'
    ],
    specs: {
      dimensions: '114mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#14532D', accent: '#4ADE80', label: 'Forest Green' },
    seoKeywords: [
      '20 cad prop money',
      'canadian stage money',
      'vancouver movie props'
    ],
    variants: [
      { id: 'cad20-100', name: 'Single Stack (100 Notes)', price: 39, noteCount: 100, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad20-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$4,000 CAD' },
      { id: 'cad20-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$10,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-10-stack',
    name: '$10 CAD Canadian Prop Money Stack ($2,000 Staged) - Lavender Mountain Lake Movie Cash',
    slug: '10-cad-prop-stack-1000',
    image: '/products/photos/10-cad-prop-stack-1000.webp',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$10 Denominations',
    denomination: 10,
    currencySymbol: 'C$',
    price: 69,
    stagedValue: '$2,000 CAD',
    noteCount: 200,
    shortDescription: '200 lavender-purple Canadian $10 prop notes (2 strapped stacks of 100) featuring a mountain lake scene.',
    description: 'Lavender and purple notes with an original snow-capped peak reflected in a lake, framed by maple leaves. Ideal for shop counters and everyday cash scenes.',
    features: [
      '200 one-sided Canadian $10 prop notes (2 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Bilingual-friendly design for Canadian sets'
    ],
    specs: {
      dimensions: '114mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#581C87', accent: '#C084FC', label: 'Lavender Purple' },
    seoKeywords: [
      '10 cad prop money',
      'vertical prop money'
    ],
    variants: [
      { id: 'cad10-200', name: 'Double Stack (200 Notes)', price: 69, noteCount: 200, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad10-500', name: '5x Stunt Pack (500 Notes)', price: 149, noteCount: 500, stagedValue: '$5,000 CAD' },
      { id: 'cad10-1000', name: '10x Studio Lot (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$10,000 CAD' }
    ]
  },
  {
    id: 'prop-cad-5-stack',
    name: '$5 CAD Canadian Prop Money Stack ($2,000 Staged) - Glacier Blue Mountain Lake Prop Bills',
    slug: '5-cad-prop-stack-500',
    image: '/products/photos/5-cad-prop-stack-500.webp',
    currency: 'CAD',
    category: 'Canadian Dollars',
    subcategory: '$5 Denominations',
    denomination: 5,
    currencySymbol: 'C$',
    price: 119,
    stagedValue: '$2,000 CAD',
    noteCount: 400,
    shortDescription: '400 glacier-blue Canadian $5 prop notes (4 strapped stacks of 100) featuring a mountain lake scene.',
    description: 'Pale glacier-blue notes with an original alpine lake, snowy peaks, and pine forest. Great for small transactions, tip jars, and background cash.',
    features: [
      '400 one-sided Canadian $5 prop notes (4 x 100-note stacks)',
      'One-sided print with blank reverse, 75% scale',
      'Large red "PROP COPY" marking across every note',
      'Matte camera finish'
    ],
    specs: {
      dimensions: '114mm x 52mm (75% scale)',
      material: 'Synthetic polymer paper',
      printType: 'One-sided print, blank reverse, matte finish',
      legalMarkings: '"PROP COPY - NOT LEGAL TENDER" printed large across the face of every note',
      strapType: 'White paper band with gold edges, printed "PROP MONEY · 100 NOTES"'
    },
    inStock: true,
    colorScheme: { primary: '#0369A1', accent: '#38BDF8', label: 'Glacier Blue' },
    seoKeywords: [
      '5 cad prop money',
      'canadian prop banknotes'
    ],
    variants: [
      { id: 'cad5-400', name: 'Quad Stack (400 Notes)', price: 119, noteCount: 400, stagedValue: '$2,000 CAD', isDefault: true },
      { id: 'cad5-1000', name: '10x Production Pack (1,000 Notes)', price: 249, noteCount: 1000, stagedValue: '$5,000 CAD' },
      { id: 'cad5-2000', name: '20x Studio Lot (2,000 Notes)', price: 399, noteCount: 2000, stagedValue: '$10,000 CAD' }
    ]
  }
];
