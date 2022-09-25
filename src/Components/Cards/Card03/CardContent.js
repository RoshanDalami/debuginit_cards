import React from "react";
import styles from './CardContent.module.css';

const CardContent = () =>{
    const cardTwoDetails = {
        product_name: "Product Name",
        
        product_price: 'XXX'  ,
      };
    return(
        <div className={styles.content}>
      <h3 className={styles.product_name}>{cardTwoDetails.product_name}</h3>
      
      <div className={styles.product_price_body}>
        <p className={styles.product_price}>
          
          <span className={styles.span}>Rs </span> {cardTwoDetails.product_price}
        </p>
      </div>
    </div>
    );
};

export default CardContent ;