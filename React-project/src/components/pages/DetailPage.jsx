import { useState } from "react";
import { productDetail, relatedProducts } from "../../data/data";
import styles from "./DetailPage.module.css";

export default function DetailPage({ onNavigate, onAddToCart, product }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const p = product || productDetail;
  const images = p.images || (p.image ? [p.image] : productDetail.images);
  const priceValue = typeof p.price === "number" ? p.price : parseFloat(String(p.price ?? p.from ?? "0").replace(/[^0-9.]/g, "")) || 0;
  const specs = p.specs || {
    Brand: p.brand || "Unknown",
    Material: "Standard material",
    Type: p.type || "Product",
    Availability: p.inStock ? "In stock" : "Out of stock",
  };
  const supplier = p.supplier || productDetail.supplier;
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(p.rating ?? 0) ? "★" : "☆");

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        
        <div className={styles.breadcrumbRow}>
          <div className={styles.breadcrumb}>
            <span onClick={() => onNavigate("home")}>Home</span> ›
            <span onClick={() => onNavigate("grid")}>Category</span> ›
            <span>{p.name}</span>
          </div>
          <button className={styles.backBtn} onClick={() => onNavigate("home")}>← Back to Shop</button>
        </div>

        <div className={styles.topSection}>
    
          <div className={styles.gallery}>
            <div className={styles.mainImg}>
              <img src={images[selectedImg]} alt={p.name} />
            </div>
            <div className={styles.thumbs}>
              {images.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.thumb} ${i === selectedImg ? styles.thumbActive : ""}`}
                  onClick={() => setSelectedImg(i)}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>

      
          <div className={styles.info}>
            <h1 className={styles.title}>{p.name}</h1>
            <div className={styles.meta}>
              <span className={styles.stars}>{stars.join("")}</span>
              <span className={styles.reviews}>{p.reviews} reviews</span>
              <span className={styles.dot}>•</span>
              <span className={styles.orders}>{p.orders} orders</span>
              <span className={styles.dot}>•</span>
              <span className={styles.inStock}>{p.inStock ? "✔ In stock" : "Out of stock"}</span>
            </div>

            <div className={styles.priceRow}>
              <span className={styles.mainPrice}>${priceValue.toFixed(2)}</span>
              <div className={styles.priceAlts}>
                {typeof p.comparePrice === "number" && <span>${p.comparePrice.toFixed(2)}</span>}
                {typeof p.originalPrice === "number" && <span>${p.originalPrice.toFixed(2)}</span>}
              </div>
            </div>

            <table className={styles.specsTable}>
              <tbody>
                {Object.entries(specs).map(([k, v]) => (
                  <tr key={k}>
                    <td className={styles.specKey}>{k}</td>
                    <td className={styles.specVal}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.qtyRow}>
              <button className={styles.qtyBtn} onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className={styles.qtyVal}>{qty}</span>
              <button className={styles.qtyBtn} onClick={() => setQty(qty + 1)}>+</button>
              <span className={styles.qtyNote}>/ piece</span>
            </div>
            <div className={styles.actions}>
              <button className={styles.buyBtn} onClick={() => { onAddToCart(p, qty); onNavigate("cart"); }}>Buy now</button>
              <button className={styles.cartBtn} onClick={() => onAddToCart(p, qty)}>Add to cart</button>
              <button className={styles.wishlistBtn}>♡</button>
            </div>
          </div>

          
          <aside className={styles.supplierCard}>
            <div className={styles.supplierHeader}>
              <div className={styles.supplierAvatar}>{supplier.name.charAt(0)}</div>
              <div>
                <div className={styles.supplierName}>{supplier.name}</div>
                <div className={styles.supplierMeta}>🇩🇪 {supplier.country}</div>
              </div>
            </div>
            <div className={styles.supplierStats}>
              <div className={styles.stat}><strong>Verified seller</strong> ✅</div>
              <div className={styles.stat}><strong>Worldwide shipping</strong> 🌍</div>
            </div>
            <button className={styles.sendInquiry}>Send inquiry</button>
            <a href="#" className={styles.sellerLink}>Seller's profile</a>
          </aside>
        </div>

      
        <div className={styles.tabs}>
          {["description", "reviews", "shipping", "about seller"].map(tab => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>
          {activeTab === "description" && (
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          )}
          {activeTab === "reviews" && <p>Customer reviews will appear here.</p>}
          {activeTab === "shipping" && <p>Free shipping on orders over $50. Standard delivery 3-5 business days.</p>}
          {activeTab === "about seller" && <p>Guanjoi Trading LLC has been a verified supplier since 2018 with over 500 successful transactions.</p>}
        </div>

        
        <div className={styles.specsGrid}>
          {[
            { label: "Model", val: "#8786867" },
            { label: "Style", val: "Classic style" },
            { label: "Certificate", val: "ISO-898967891" },
            { label: "Size", val: "34mm x 450mm" },
            { label: "Memory", val: "36GB RAM" },
          ].map(s => (
            <div key={s.label} className={styles.specItem}>
              <span className={styles.specItemLabel}>{s.label}</span>
              <span className={styles.specItemVal}>{s.val}</span>
            </div>
          ))}
        </div>

        
        <div className={styles.related}>
          <h3>Related products</h3>
          <div className={styles.relatedGrid}>
            {relatedProducts.map(r => (
              <div key={r.id} className={styles.relatedCard} onClick={() => onNavigate("detail")}>
                <img src={r.image} alt={r.name} />
                <div className={styles.relatedName}>{r.name}</div>
                <div className={styles.relatedPrices}>
                  <span className={styles.relatedPrice}>{r.price}</span>
                  <span className={styles.relatedOld}>{r.oldPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      
        <div className={styles.promoBanner}>
          <div>
            <strong>Super discount on more than 100 USD</strong>
            <p>Have you ever finally just write dummy info</p>
          </div>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}
