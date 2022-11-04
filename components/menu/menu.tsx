import styles from "./menu_styles.module.css";

export const Menu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.menu_type}>Главная</div>
      <div className={styles.menu_type}>Технологии</div>
      <div className={styles.menu_type}>График полетов</div>
      <div className={styles.menu_type}>Гарантии</div>
      <div className={styles.menu_type}>О компании</div>
      <div className={styles.menu_type}>Контакты</div>
    </div>
  );
};
