import { useState } from "react";
import { savedForLater } from "../../data/data";
import styles from "./CartPage.module.css";

export default function CartPage({ onNavigate, items, onRemoveItem, onUpdateQty }) {
  const [coupon, setCoupon] = useState("");

  const updateQty = (id, delta) => onUpdateQty(id, delta);
  const removeItem = id => onRemoveItem(id);

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h2 className={styles.title}>My cart ({items.length})</h2>
        <div className={styles.layout}>
        
          <div className={styles.itemsCol}>
            {items.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.image} alt={item.name} />
                <div className={styles.itemInfo}>
                  <div className={styles.itemName}>{item.name}</div>
                  <div className={styles.itemDesc}>{item.desc}</div>
                  <div className={styles.itemActions}>
                    <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>Remove</button>
                    <button className={styles.saveBtn}>Save for later</button>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <div className={styles.itemPrice}>${(item.price * item.qty).toFixed(2)}</div>
                  <div className={styles.qtyCtrl}>
                    <span>Qty:</span>
                    <button onClick={() => updateQty(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
              </div>
            ))}
            <button className={styles.backBtn} onClick={() => onNavigate("home")}>← Back to shop</button>
          </div>

        
          <aside className={styles.summary}>
            <div className={styles.couponRow}>
              <span>Have a coupon?</span>
              <div className={styles.couponInput}>
                <input
                  name="coupon"
                  aria-label="Add coupon"
                  placeholder="Add coupon"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                />
                <button>Apply</button>
              </div>
            </div>
            <div className={styles.summaryBody}>
              <div className={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Discount:</span>
                <span className={styles.discount}>-$0.00</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
              <div className={styles.paymentIcons}>
                <span>💳</span><span>🏦</span><span>📱</span><span>🍎</span>
              </div>
            </div>
          </aside>
        </div>

        
        <div className={styles.badges}>
          <div className={styles.badge}><span>🔒</span> Secure payment</div>
          <div className={styles.badge}><span>🎧</span> Customer support<br /><small>Phone from 9am–6pm</small></div>
          <div className={styles.badge}><span>🚚</span> Free delivery<br /><small>From your friendly just</small></div>
        </div>

      
        <div className={styles.savedSection}>
          <h3>Saved for later</h3>
          <div className={styles.savedGrid}>
            {savedForLater.map(p => (
              <div key={p.id} className={styles.savedCard}>
                <img src={p.image} alt={p.name} />
                <div className={styles.savedPrice}>{p.price}</div>
                <div className={styles.savedName}>{p.name}</div>
                <button className={styles.moveToCart}>Move to cart</button>
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
