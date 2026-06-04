import { useState, useEffect } from "react";
import { categories } from "../../data/data";
import heroImage from "../../assets/images/heroBanner.png";
import styles from "./HeroBanner.module.css";


export default function HeroBanner({ onNavigate }) {
  const [seconds, setSeconds] = useState({ d: 4, h: 13, m: 34, s: 56 });

  useEffect(() => {
    const t = setInterval(() => {
      setSeconds(prev => {
        let { d, h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d = Math.max(0, d - 1); }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, [seconds]);

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        
        <aside className={styles.sidebar}>
          <ul>
            {categories.map(cat => (
              <li key={cat} className={styles.catItem}>
                <a href="#">{cat}</a>
              </li>
            ))}
          </ul>
        </aside>

      
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <h2 className={styles.bannerSub}>Latest trending</h2>
            <h1 className={styles.bannerTitle}>Electronic items</h1>
            <div className={styles.timer}>
            </div>
            <button className={styles.learnBtn} onClick={() => onNavigate("grid")}>Learn more</button>
          </div>
          <div className={styles.heroImg}>
            <img
              src={heroImage}
              alt="Headphones"
            />
          </div>
        </div>


        <aside className={styles.rightPanel}>
          <div className={styles.userCard}>
            <div className={styles.userAvatar}>H</div>
            <div>
              <div className={styles.userGreet}>Hi, user</div>
              <div className={styles.userSub}>let's get started</div>
            </div>
            <button className={styles.joinBtn}>Join now</button>
          </div>
          <div className={styles.promoCard} style={{ background: "#ff9500" }}>
            <div className={styles.promoAvatar}>H</div>
            <p>Get US $10 off with a new supplier</p>
          </div>
          <div className={styles.promoCard} style={{ background: "#0d6efd" }}>
            <p>Send quotes with supplier preferences</p>
          </div>
        </aside>
      </div>
    </section>
  );
}


