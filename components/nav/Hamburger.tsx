import React from "react";
import styles from "./Burger.module.css";

type Props = {
  onClick: () => void;
};

const Hamburger = (props: Props) => {
  const { onClick } = props;

  return (
    <div id="burger" className={styles.burgerContainer} onClick={onClick}>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
      <div className={styles.burger}></div>
    </div>
  );
};

export default Hamburger;
