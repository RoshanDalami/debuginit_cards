import React from "react";
import Button05 from "../../Buttons/Button05";
import styles from "./Card05.module.css";
import CardContent from "./CardContent";
import Image05 from "./Image05";

const Card04 = () => {
  return (

      <div className={styles.card}>
        <Image05 />
      <div className={styles.overlay}>
        <CardContent/>
        <Button05/>
      </div>

      </div>

  );
};

export default Card04;
