import styles from "./CategoryGrid.module.css";

export default function CategoryGrid({ title, items, ctaText, bgColor, bgImage, onNavigate }) {
  const sidebarStyle = bgImage
    ? {
        
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: bgColor || "#e8f4ec",
        color: "#fff",
      }
    : { background: bgColor || "#e8f4ec" };

  return (
    <div className={styles.block}>
      <div className={styles.sidebar} style={sidebarStyle}>
        <div className={styles.sidebarTitle}>{title}</div>
        <button className={styles.sourceBtn} onClick={() => onNavigate && onNavigate("grid")}>
          {ctaText || "Source now"}
        </button>
      </div>
      <div className={styles.grid}>
        {items.map(item => (
          <div key={item.id} className={styles.item} onClick={() => onNavigate && onNavigate("detail", item)}>
            <img src={item.image} alt={item.name} />
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemFrom}>From<br /><strong>{item.from}</strong></div>
          </div>
        ))}
      </div>
    </div>
  );
}
