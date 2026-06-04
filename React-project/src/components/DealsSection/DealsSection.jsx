import { useState, useEffect } from "react";
import { dealItems } from "../../data/data";
import styles from "./DealsSection.module.css";

export default function DealsSection({ onNavigate }) {
  const [time, setTime] = useState({ d: 4, h: 13, m: 34, s: 56 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { d, h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d = Math.max(0, d - 1); }
        return { d, h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = n => String(n).padStart(2, "0");

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
      
        <div className={styles.timerBox}>
          <div className={styles.timerTitle}>Deals and offers</div>
          <div className={styles.timerSub}>Hygiene equipments</div>
          <div className={styles.timer}>
            {[
              { val: pad(time.d), label: "Days" },
              { val: pad(time.h), label: "Hour" },
              { val: pad(time.m), label: "Min" },
              { val: pad(time.s), label: "Sec" },
            ].map(({ val, label }) => (
              <div key={label} className={styles.timerUnit}>
                <div className={styles.timerNum}>{val}</div>
                <div className={styles.timerLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        
        <div className={styles.cards}>
          {dealItems.map(item => (
            <div key={item.id} className={styles.card} onClick={() => onNavigate("detail", item)}>
              <img src={item.image} alt={item.name} />
              <div className={styles.cardName}>{item.name}</div>
              <span className="badge-discount">{item.discount}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
