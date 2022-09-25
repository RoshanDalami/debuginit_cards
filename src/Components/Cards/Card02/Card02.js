import React from "react";
import Button02 from "../../Buttons/Button02";
import styles from './Card02.module.css';
import CardContent from "./CardContent";
import Image02 from "./Image02";


const Card02 = () =>{
    return(
        <div className={styles.card}>
            <Image02/>
            <CardContent/>
            <Button02/>
        </div>
    );
};

export default Card02;