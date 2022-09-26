import React from "react";
import styles from "./CardContent.module.css";

const CardContent = () => {
  const cardFiveDetails = {
    product_name: "Product Name",
    product_desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    product_price: 'XXX'  ,
  };
  return (
    <div className={styles.content}>
      <h3 className={styles.product_name}>{cardFiveDetails.product_name}</h3>
      <div className={styles.product_desc_body}>
        <p className={styles.product_desc}>{cardFiveDetails.product_desc}</p>
      </div>
      <div className={styles.product_price_body}>
        <p className={styles.product_price}>
          <span className={styles.span}>Rs </span> {cardFiveDetails.product_price}
        </p>
      </div>
    </div>
  );
};

export default CardContent