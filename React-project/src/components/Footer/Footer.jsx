import { footerData } from "../../data/data";
import icons from "../../assets/icons/Group.png";
import appStoreIcon from "../../assets/icons/Appstore.png";
import logoIcon from "../../assets/Logo/logo-colored.png";
import styles from "./Footer.module.css";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logoIcon} alt="Logo" />
          </div>
          <p>Best information about the company goes here but now lorem ipsum is there.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>
        {[
          { title: "About", links: footerData.about },
          { title: "Partnership", links: footerData.partnership },
          { title: "Information", links: footerData.information },
          { title: "For users", links: footerData.forUsers },
        ].map(col => (
          <div key={col.title} className={styles.col}>
            <div className={styles.colTitle}>{col.title}</div>
            <ul>
              {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
        <div className={styles.col}>
          <div className={styles.colTitle}>Get app</div>
          <div className={styles.appBtns}>
            <a href="#" className={styles.appBtn}>
              <img src={appStoreIcon} alt="App Store" />
            </a>
            <a href="#" className={styles.appBtn}>
              <img src={icons} alt="Google Play" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Ecommerce</span>
        <span>🇩🇪 English</span>
      </div>
    </footer>
  );
}
