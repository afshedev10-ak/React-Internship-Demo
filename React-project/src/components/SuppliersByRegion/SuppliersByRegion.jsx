import { suppliers } from "../../data/data";
import styles from "./SuppliersByRegion.module.css";

export default function SuppliersByRegion() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Suppliers by region</h3>
      </div>
      <div className={styles.grid}>
        {suppliers.map(s => {
          const flagSrc = new URL(`../../assets/flags/${s.flagIcon}`, import.meta.url).href;
          return (
            <div key={s.country} className={styles.item}>
              <span className={styles.flag}>
                <img src={flagSrc} alt={`${s.country} flag`} />
              </span>
              <span className={styles.country}>{s.country}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
