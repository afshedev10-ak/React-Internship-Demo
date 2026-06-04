import { useState } from "react";
import { gridProducts } from "../../data/data";
import ProductCard from "../productCard/ProductCard";
import styles from "./GridPage.module.css";


const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
const features = ["Metallic", "Plastic case", "8GB Ram", "Super Power", "Large Memory"];

export default function GridPage({ onNavigate, onAddToCart }) {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleBrand = b =>
    setSelectedBrands(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);

  const filtered = gridProducts.filter(p =>
    selectedBrands.length === 0 || selectedBrands.includes(p.brand)
  );

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        
        <div className={styles.breadcrumb}>
          <span onClick={() => onNavigate("home")}>Home</span> › 
          <span>Category</span> › 
          <span>Mobile accessory</span>
        </div>

      
        <div className={styles.topBar}>
          <div className={styles.resultInfo}>12,911 items in <strong>Mobile accessory</strong></div>
          <div className={styles.topBarRight}>
            <label>
              <input type="checkbox" name="verifiedOnly" /> Verified only
            </label>
            <select className={styles.sortSelect} name="sortOrder" aria-label="Sort options">
              <option value="featured">Featured</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <button className={`${styles.viewBtn} ${viewMode === "grid" ? styles.active : ""}`} onClick={() => setViewMode("grid")}>⊞</button>
            <button className={`${styles.viewBtn} ${viewMode === "list" ? styles.active : ""}`} onClick={() => setViewMode("list")}>☰</button>
            <button className={styles.filterToggle} onClick={() => setFilterOpen(!filterOpen)}>⚙ Filters</button>
          </div>
        </div>

    
        <div className={styles.filterTags}>
          {["Samsung", "Metallic", "4 star", "2 item", "Clear all"].map(tag => (
            <span key={tag} className={styles.tag}>{tag} ×</span>
          ))}
        </div>

        <div className={styles.layout}>
          
          <aside className={`${styles.sidebar} ${filterOpen ? styles.sidebarOpen : ""}`}>
            <div className={styles.filterSection}>
              <h4>Category</h4>
              {["Mobile accessory", "Electronics", "Smartphones", "Modern Tech"].map(c => (
                <label key={c} className={styles.filterLabel}>
                  <input type="radio" name="cat" /> {c}
                </label>
              ))}
              <a href="#" className={styles.seeAll}>See all</a>
            </div>
            <div className={styles.filterSection}>
              <h4>Brands</h4>
              {brands.map(b => (
                <label key={b} className={styles.filterLabel}>
                  <input
                    type="checkbox"
                    name="brand"
                    value={b}
                    checked={selectedBrands.includes(b)}
                    onChange={() => toggleBrand(b)}
                  /> {b}
                </label>
              ))}
              <a href="#" className={styles.seeAll}>See all</a>
            </div>
            <div className={styles.filterSection}>
              <h4>Features</h4>
              {features.map(f => (
                <label key={f} className={styles.filterLabel}>
                  <input type="checkbox" name="feature" value={f} /> {f}
                </label>
              ))}
              <a href="#" className={styles.seeAll}>See all</a>
            </div>
            <div className={styles.filterSection}>
              <h4>Price range</h4>
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  name="priceMin"
                  aria-label="Minimum price"
                  value={priceRange[0]}
                  onChange={e => setPriceRange([+e.target.value, priceRange[1]])}
                  className={styles.priceInput}
                />
                <span>–</span>
                <input
                  type="number"
                  name="priceMax"
                  aria-label="Maximum price"
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], +e.target.value])}
                  className={styles.priceInput}
                />
              </div>
            </div>
            <div className={styles.filterSection}>
              <h4>Ratings</h4>
              {[4, 3, 2, 1].map(r => (
                <label key={r} className={styles.filterLabel}>
                  <input type="radio" name="rating" /> {"★".repeat(r)}{"☆".repeat(5 - r)} & up
                </label>
              ))}
            </div>
            <div className={styles.filterSection}>
              <h4>Manufacturer</h4>
              {["China", "Japan", "USA", "Germany"].map(m => (
                <label key={m} className={styles.filterLabel}>
                  <input type="checkbox" name="manufacturer" value={m} /> {m}
                </label>
              ))}
            </div>
          </aside>

        
          <div className={styles.productsArea}>
            {viewMode === "grid" ? (
              <div className={styles.productsGrid}>
                {filtered.map(p => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onClick={() => onNavigate("detail", p)}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.productsList}>
                {filtered.map(p => (
                  <div key={p.id} className={styles.listItem} onClick={() => onNavigate("detail", p)}>
                    <img src={p.image} alt={p.name} />
                    <div className={styles.listInfo}>
                      <div className={styles.listName}>{p.name}</div>
                      <div className={styles.listMeta}>Brand: {p.brand}</div>
                      <div className={styles.listPrice}>{p.price}</div>
                      {p.oldPrice && <div className={styles.listOldPrice}>{p.oldPrice}</div>}
                    </div>
                    <button
                      className={styles.addBtn}
                      onClick={e => {
                        e.stopPropagation();
                        onAddToCart(p, 1);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            )}

          
            <div className={styles.pagination}>
              {[1, 2, 3, "...", 10].map((p, i) => (
                <button key={i} className={`${styles.pageBtn} ${p === 1 ? styles.pageBtnActive : ""}`}>{p}</button>
              ))}
              <button className={styles.pageBtn}>›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
