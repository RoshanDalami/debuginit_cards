import React from "react";
import Button04 from "../../Buttons/Button04";
import styles from "./Card04.module.css";
import CardContent from "./CardContent";
import Image04 from "./Image04";

const Card04 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inner_div}>
        <Image04 />
      </div>
      <div className={styles.inner_div}>
        <CardContent />
     
        <Button04 />
      </div>
    </div>
  );
};

export default Card04;
