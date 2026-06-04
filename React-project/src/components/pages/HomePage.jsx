import HeroBanner from "../HeroBanner/HeroBanner";
import DealsSection from "../DealsSection/DealsSection";
import CategoryGrid from "../CategoryGrid/CategoryGrid";
import InquiryBanner from "../InquiryBanner/InquiryBanner";
import ProductGrid from "../productGrid/ProductGrid";
import ExtraServices from "../ExtraServices/ExtraServices";
import SuppliersByRegion from "../SuppliersByRegion/SuppliersByRegion";
import Newsletter from "../Newsletter/Newsletter";
import { homeOutdoorItems, electronicsItems } from "../../data/data";
import homeImg from "../../assets/images/home.png";
import electronicsImg from "../../assets/images/electronics.png";
import styles from "./HomePage.module.css";


export default function HomePage({ onNavigate }) {
  return (
    <>
      <HeroBanner onNavigate={onNavigate} />
      <main className={styles.main}>
        <DealsSection onNavigate={onNavigate} />
        <div className={styles.categoryRow}>
          <CategoryGrid
            title="Home and outdoor"
            items={homeOutdoorItems}
            ctaText="Source now"
            bgColor="#e8f4ec"
            bgImage={homeImg}
            onNavigate={onNavigate}
          />
        </div>
        <div className={styles.categoryRow}>
          <CategoryGrid
            title="Consumer electronics and gadgets"
            items={electronicsItems}
            ctaText="Source now"
            bgColor="#e8eef8"
            bgImage={electronicsImg}
            onNavigate={onNavigate}
          />
        </div>
        <InquiryBanner />
        <ProductGrid onNavigate={onNavigate} />
        <ExtraServices />
        <SuppliersByRegion />
        <Newsletter />
      </main>
    </>
  );
}
