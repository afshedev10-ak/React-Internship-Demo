import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/pages/HomePage";
import GridPage from "./components/pages/GridPage";
import DetailPage from "./components/pages/DetailPage";
import CartPage from "./components/pages/CartPage";
import { cartItems as initialCart } from "./data/data";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(initialCart);

  const navigate = (target, product) => {
    if (product) {
      setSelectedProduct(product);
    }
    setPage(target);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (product, qty = 1) => {
    if (!product) return;

    const price = parseFloat(
      String(product.price ?? product.from ?? 0).replace(/[^0-9.]/g, "")
    ) || 0;

    const newItem = {
      id: product.id,
      name: product.name,
      desc: product.desc || product.brand || product.from || "",
      price,
      image: product.image || (product.images && product.images[0]) || "",
      qty,
    };

    setCartItems(prev => {
      const existing = prev.find(item => item.id === newItem.id);
      if (existing) {
        return prev.map(item =>
          item.id === newItem.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, newItem];
    });
  };

  const removeCartItem = id => setCartItems(prev => prev.filter(item => item.id !== id));
  const updateCartQty = (id, delta) =>
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar onNavigate={navigate} cartCount={cartCount} />
      {page === "home" && <HomePage onNavigate={navigate} />}
      {page === "grid" && <GridPage onNavigate={navigate} onAddToCart={addToCart} />}
      {page === "detail" && (
        <DetailPage
          product={selectedProduct}
          onNavigate={navigate}
          onAddToCart={addToCart}
        />
      )}
      {page === "cart" && (
        <CartPage
          onNavigate={navigate}
          items={cartItems}
          onRemoveItem={removeCartItem}
          onUpdateQty={updateCartQty}
        />
      )}
      <Footer />
    </>
  );
}
