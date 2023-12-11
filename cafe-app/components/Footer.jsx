import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footertabs}>
        <div className={styles.footertabselected}>Order</div>
        <div className={styles.footertab}>Reserve</div>
        <div className={styles.footertab}>Account</div>
      </div>
    </footer>
  );
};

export default Footer;
