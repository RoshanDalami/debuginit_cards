import React from "react";
import styles from './Image01.module.css'
import SourceImage from '../../Image/bag-png-33938.png'
const Image01 = () =>{
    return(
        <img src={SourceImage} alt="" className={styles.img} />
    );
};

export default Image01;