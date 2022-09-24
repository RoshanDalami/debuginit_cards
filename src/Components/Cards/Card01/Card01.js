import React from "react";
import Button01 from "./Button01";
import styles from './Card01.module.css';
import CardContent from "./CardContent";
import Image01 from "./Image01";
const Card01 =()=>{
    return(
        <div className={styles.card}>
            <Image01/>
            <CardContent/>
            <Button01/>
        </div>
    );
};

export default Card01 ;