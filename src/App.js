import React from 'react';
import Card01 from './Components/Cards/Card01/Card01';
import Card02 from './Components/Cards/Card02/Card02';
import styles from './App.module.css'
function App() {
  return (
   
    <div className="App">
      <div className={styles.cards}><Card01/></div>
      <div className={styles.cards}><Card02 /></div>
      
     
    </div>
  );
}

export default App;
