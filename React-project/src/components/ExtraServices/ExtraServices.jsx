import { Services as Services } from "../../data/data";
import styles from "./ExtraServices.module.css";

export default function ExtraServices() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Our extra services</h3>
      </div>
      <div className={styles.grid}>
        {Services.map(s => (
          <div key={s.id} className={styles.card}>
            <img src={s.image} alt={s.title} className={styles.img} />
            <div className={styles.overlay}>
              <span className={styles.icon}>{s.icon}</span>
            </div>
            <div className={styles.caption}>{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}





