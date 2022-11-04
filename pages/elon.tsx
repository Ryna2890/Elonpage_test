import styles from "../styles/ilonPage_styles.module.css";
import "@fontsource/museomoderno";
import { Menu } from "../components/menu/menu";
import { Title } from "../components/title/title";
import { Button } from "../components/button/button";
import { Benefits } from "../components/benefits/benefits";
import { Logo } from "../components/logo/logo";
import { useEffect, useState } from "react";
import { MobileMenu } from "../components/mobile.menu/mobileMenu";

const Elon = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.menuWrapper}>
          {isMobile ? <MobileMenu /> : <Menu />}
        </div>
        <div className={styles.titleWrapper}>
          <Title />
        </div>
        <div className={styles.buttonWrapper}>
          <Button />
        </div>
        <div className={styles.benefitsWrapper}>
          <Benefits />
        </div>
      </div>
    </div>
  );
};
export default Elon;
