import React from 'react';

// Below is syntax for using CSS modules.
import styles from './Button.module.css';

// Use the impoted style in className. 
// All CSS styles are properties of styles object
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};


export default Button;
