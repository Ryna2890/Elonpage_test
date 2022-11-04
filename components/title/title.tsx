import styles from "./title_styles.module.css";

export const Title = () => {
  return (
    <>
      <span className={styles.title}>ПУТЕШЕСТВИЕ</span>
      <br />
      <span className={styles.subtitle}>на красную планету</span>
    </>
  );
};
