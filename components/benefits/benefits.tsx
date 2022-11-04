import styles from "./benefits_style.module.css";

export const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={`${styles.benefits_number} ${styles.benefits_type}`}>
        <div className={styles.subtitle}>мы</div>
        <div className={styles.title}>1</div>
        <div className={styles.subtitle}>на рынке</div>
      </div>
      <div className={`${styles.benefits_guarantee} ${styles.benefits_type}`}>
        <div className={styles.subtitle}>гарантируем</div>
        <div className={styles.title}>50%</div>
        <div className={styles.subtitle}>безопасность</div>
      </div>
      <div className={`${styles.benefits_present} ${styles.benefits_type}`}>
        <div className={styles.subtitle}>календарик за</div>
        <div className={styles.title}>2001</div>
        <div className={styles.subtitle}>в подарок</div>
      </div>
      <div className={`${styles.benefits_travel} ${styles.benefits_type}`}>
        <div className={styles.subtitle}>путешествие</div>
        <div className={styles.title}>597</div>
        <div className={styles.subtitle}>дней</div>
      </div>
    </div>
  );
};
