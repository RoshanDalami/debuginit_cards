import React from "react";
import Button03 from "../../Buttons/Button03";
import styles from "./Card03.module.css";
import CardContent from "./CardContent";
import Image03 from "./Image03";

const Card03 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.inner_div}>
        <Image03 />
      </div>
      <div className={styles.inner_div}>
        <CardContent />
      </div>
      <div className={styles.inner_div}>
        <Button03 />
      </div>
    </div>
  );
};

export default Card03;
