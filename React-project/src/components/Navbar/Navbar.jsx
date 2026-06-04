import { useState } from "react";
import { navLinks } from "../../data/data";
import logoIcon from "../../assets/Logo/logo-colored.png";
import styles from "./Navbar.module.css";


export default function Navbar({ onNavigate, cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All category");

  return (
    <>
    
      <header className={styles.topbar}>
        <div className={styles.inner}>
      
          <div className={styles.logo} onClick={() => onNavigate("home")}>
            <img src={logoIcon} alt="Logo" className={styles.logoIcon} />
          </div>

        
          <div className={styles.searchBox}>
            <input
              className={styles.searchInput}
              name="searchQuery"
              aria-label="Search"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select
              className={styles.categorySelect}
              name="searchCategory"
              aria-label="Search category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option>All category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home</option>
              <option>Sports</option>
            </select>
            <button className={styles.searchBtn}>Search</button>
          </div>

        
          <div className={styles.actions}>
            <button className={styles.actionBtn}>
              <span className={styles.actionIcon}>👤</span>
              <span className={styles.actionLabel}>Profile</span>
            </button>
            <button className={styles.actionBtn}>
              <span className={styles.actionIcon}>💬</span>
              <span className={styles.actionLabel}>Message</span>
            </button>
            <button className={styles.actionBtn}>
              <span className={styles.actionIcon}>📋</span>
              <span className={styles.actionLabel}>Orders</span>
            </button>
            <button className={styles.actionBtn} onClick={() => onNavigate("cart")}>
              <span className={styles.cartWrap}>
                <span className={styles.actionIcon}>🛒</span>
                {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
              </span>
              <span className={styles.actionLabel}>My cart</span>
            </button>
            <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>
      </header>

  
      <nav className={styles.subnav}>
        <div className={styles.subnavInner}>
          <button className={styles.allCatBtn}>
               <span>☰</span>  All category
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            {navLinks.slice(1).map(link => (
              <li key={link}><a href="#">{link}</a></li>
            ))}
          </ul>
          <div className={styles.subnavRight}>
            <span>English, USD ▾</span>
            <span>Ship to 🇩🇪 ▾</span>
          </div>
        </div>
      </nav>
    </>
  );
}
