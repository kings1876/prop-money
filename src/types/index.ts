export type CurrencyCategory = 
  | 'Australian Dollars'
  | 'US Dollars'
  | 'Euro'
  | 'British Pounds'
  | 'Canadian Dollars';

export type CurrencyCode = 'AUD' | 'USD' | 'EUR' | 'GBP' | 'CAD';

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Single Stack (100 Notes)", "Double Bundle (200 Notes)", "5x Stunt Pack (500 Notes)", "10x Vault Brick (1,000 Notes)"
  price: number; // in AUD (variable price)
  comparePrice?: number;
  noteCount: number;
  stagedValue: string;
  isDefault?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  currency: CurrencyCode;
  category: CurrencyCategory;
  subcategory: string;
  denomination: 1 | 2 | 5 | 10 | 20 | 50 | 100 | 200 | 500 | 'Mixed';
  currencySymbol: string; // '$', '€', '£', 'C$'
  price: number; // in AUD (base or selected variant price)
  comparePrice?: number;
  stagedValue: string;
  noteCount: number;
  badge?: 'Popular' | 'New' | 'Best Value' | 'Premium' | 'Sale';
  description: string;
  shortDescription: string;
  features: string[];
  specs: {
    dimensions: string;
    material: string;
    printType: string;
    legalMarkings: string;
    strapType: string;
  };
  inStock: boolean;
  colorScheme: {
    primary: string;
    accent: string;
    label: string;
  };
  seoKeywords: string[];
  image?: string; // real product photo; falls back to the generated illustration
  variants: ProductVariant[];
}

export interface CartItem {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  location: string;
  production: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
}

export interface OrderDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  suburb: string;
  state: string;
  postcode: string;
  country: string;
  paymentMethod: 'card' | 'direct_invoice';
  notes?: string;
  discountCode?: string;
  items: CartItem[];
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  totalAmount: number;
  orderNumber: string;
  date: string;
}
