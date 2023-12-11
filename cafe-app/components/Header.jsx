import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headertitle}>Cafe Design</h1>
      <p className={styles.headersubtitle}>
        <strong>Average wait time:</strong> 10 minutes
      </p>
    </div>
  );
};

export default Header;
