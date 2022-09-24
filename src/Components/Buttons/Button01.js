import React from 'react';

import styles from './Button01.module.css'
function Button01(props) {
  return (
    <div className={styles.button}>
        <button type='submit' className={styles.btn1}>Add to Cart</button>
         
    </div>
  )
}

export default Button01;