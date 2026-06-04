import styles from "./InquiryBanner.module.css";

export default function InquiryBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.title}>An easy way to send<br />requests to all suppliers</h2>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className={styles.formCard}>
        <h4 className={styles.formTitle}>Send quote to suppliers</h4>
        <input
          className={styles.input}
          type="text"
          placeholder="What item you need?"
          name="quoteItem"
          aria-label="What item you need?"
        />
        <textarea
          className={styles.textarea}
          placeholder="Type more details"
          rows={3}
          name="quoteDetails"
          aria-label="Type more details"
        />
        <div className={styles.qtyRow}>
          <input
            className={styles.qtyInput}
            type="number"
            placeholder="Quantity"
            name="quoteQuantity"
            aria-label="Quantity"
          />
          <select className={styles.qtySelect} name="quoteUnit" aria-label="Unit">
            <option value="pcs">Pcs</option>
            <option value="kg">Kg</option>
            <option value="box">Box</option>
          </select>
        </div>
        <button className={styles.sendBtn}>Send inquiry</button>
      </div>
    </section>
  );
}
