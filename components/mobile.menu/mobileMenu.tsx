import styles from "./mobile_menu_styles.module.css";
import { useState } from "react";

export const MobileMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  if (!isVisible) {
    return (
      <div onClick={() => setIsVisible(true)} className={styles.menuIcon}>
        ≡
      </div>
    );
  }
  return (
    <div className={styles.openMenu}>
      <div onClick={() => setIsVisible(false)} className={styles.menuIcon}>
        x
      </div>
      <div className={styles.menu}>
        <div className={styles.menu_type}>Главная</div>
        <div className={styles.menu_type}>Технологии</div>
        <div className={styles.menu_type}>График полетов</div>
        <div className={styles.menu_type}>Гарантии</div>
        <div className={styles.menu_type}>О компании</div>
        <div className={styles.menu_type}>Контакты</div>
      </div>
    </div>
  );
};
