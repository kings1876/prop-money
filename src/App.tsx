import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { PRODUCTS } from './data/products';
import { Product, ProductVariant, CartItem } from './types';

// Components
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { TrustpilotReviewsSection } from './components/TrustpilotReviewsSection';
import { TawkChatWidget } from './components/TawkChatWidget';
import { Footer } from './components/Footer';

// Standalone Pages with distinct URLs
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { CompliancePage } from './pages/CompliancePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PoliciesPage } from './pages/PoliciesPage';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  // Cart state with persistence
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('apm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('apm_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Cart operations supporting variable price variants
  const handleAddToCart = (product: Product, quantity = 1, variant?: ProductVariant) => {
    const chosenVariant = variant || product.variants?.find((v) => v.isDefault) || product.variants?.[0];
    
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedVariant?.id === chosenVariant?.id
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedVariant?.id === chosenVariant?.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, selectedVariant: chosenVariant, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number, variantId?: string) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId, variantId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => {
        const matches = variantId
          ? item.product.id === productId && item.selectedVariant?.id === variantId
          : item.product.id === productId;
        return matches ? { ...item, quantity } : item;
      })
    );
  };

  const handleRemoveFromCart = (productId: string, variantId?: string) => {
    setCart((prev) =>
      prev.filter((item) => {
        if (variantId) {
          return !(item.product.id === productId && item.selectedVariant?.id === variantId);
        }
        return item.product.id !== productId;
      })
    );
  };

  const handleBuyNow = (product: Product, quantity = 1, variant?: ProductVariant) => {
    handleAddToCart(product, quantity, variant);
    navigate('/checkout');
  };

  const cartTotalCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToReviews = () => {
    const el = document.getElementById('reviews-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1012] text-stone-100 flex flex-col font-sans selection:bg-[#8C4A2F] selection:text-white">
      
      {/* Top Header with separate navigation links */}
      <Header
        cartCount={cartTotalCount}
        openCart={() => setIsCartOpen(true)}
        openSearch={() => navigate('/shop')}
      />

      {/* Main View Router */}
      <main className="flex-1">
        <Routes>
          {/* Home Page matching australianelectricmotorco.com.au layout */}
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={(p, qty, v) => handleAddToCart(p, qty || 1, v)}
                onQuickView={(p) => navigate(`/product/${p.slug}`)}
              />
            }
          />

          {/* Shop Page URL with Currency Categories */}
          <Route
            path="/shop"
            element={
              <ShopPage
                onQuickView={(p) => navigate(`/product/${p.slug}`)}
                onAddToCart={(p, v) => handleAddToCart(p, 1, v)}
              />
            }
          />

          {/* Dedicated Individual Product URLs */}
          <Route
            path="/product/:slug"
            element={
              <ProductDetailPage
                onAddToCart={handleAddToCart}
                onBuyNow={handleBuyNow}
              />
            }
          />

          {/* Dedicated Blog Index URL */}
          <Route path="/blog" element={<BlogPage />} />

          {/* Dedicated Individual Blog Post URLs */}
          <Route path="/blog/:slug" element={<BlogPostPage />} />

          {/* Dedicated About Page URL */}
          <Route path="/about" element={<AboutPage />} />

          {/* Dedicated Contact Page URL */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Dedicated FAQ Page URL */}
          <Route path="/faq" element={<FaqPage />} />

          {/* Dedicated Legal Compliance URLs */}
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/legal-compliance" element={<CompliancePage />} />

          {/* Dedicated Checkout Page URL */}
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                items={cart}
                onOrderSuccess={() => setCart([])}
              />
            }
          />

          {/* Dedicated Policy URLs */}
          <Route path="/shipping" element={<PoliciesPage policyType="shipping" />} />
          <Route path="/refund" element={<PoliciesPage policyType="refund" />} />
          <Route path="/privacy" element={<PoliciesPage policyType="privacy" />} />
          <Route path="/terms" element={<PoliciesPage policyType="terms" />} />

          {/* Catch-all fallback */}
          <Route
            path="*"
            element={
              <div className="py-24 text-center space-y-4">
                <h1 className="font-display font-bold text-3xl text-white">Page Not Found</h1>
                <p className="text-xs text-slate-400">The requested page does not exist.</p>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-2.5 bg-amber-400 text-slate-950 font-bold text-xs rounded-lg cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer with separate URLs */}
      <Footer />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      {/* Quick View Modal if triggered */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />
      )}

      {/* Tawk.to Live Chat Assistant */}
      <TawkChatWidget />

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
