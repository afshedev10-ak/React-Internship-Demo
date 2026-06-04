import ProductCard from "../productCard/ProductCard";
import { recommendedProducts } from "../../data/data";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ onNavigate }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>Recommended items</h3>
      </div>
      <div className={styles.grid}>
        {recommendedProducts.map(p => (
          <ProductCard key={p.id} product={p} onClick={() => onNavigate("detail", p)} />
        ))}
      </div>
    </section>
  );
}
