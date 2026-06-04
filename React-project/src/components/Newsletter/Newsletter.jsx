import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.title}>Subscribe on our newsletter</h3>
        <p className={styles.sub}>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className={styles.form}>
          <div className={styles.inputWrap}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <input
              type="email"
              name="newsletterEmail"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <button className={styles.subscribeBtn}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
