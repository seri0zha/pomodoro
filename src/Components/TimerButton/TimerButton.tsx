import React from "react";
import styles from './TimerButton.module.css';
interface ButtonProps {
  text: string;
  callBack: () => void;
}

const TimerButton = (props: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} onClick={props.callBack}>{props.text}</button>
  )
}

export default TimerButton;