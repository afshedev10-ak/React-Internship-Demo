import styles from "./ProductCard.module.css";

export default function ProductCard({ product, onClick }) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating) ? "★" : "☆");

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imgWrap}>
        <img src={product.image} alt={product.name} />
        <button className={styles.wishBtn} onClick={e => e.stopPropagation()}>♡</button>
      </div>
      <div className={styles.body}>
        <div className={styles.name}>{product.name}</div>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
        </div>
        {product.rating && (
          <div className={styles.ratingRow}>
            <span className={styles.stars}>{stars.join("")}</span>
            <span className={styles.reviews}>({product.reviews})</span>
          </div>
        )}
      </div>
    </div>
  );
}
