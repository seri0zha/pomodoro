import React from "react";
import styles from './TimerButton.module.css';
import Time from "../Time/Time";
import pomodoroStore from '../../Stores/PomodoroStore';

const pomodoroOnClick = () => {
  pomodoroStore.timerIsRunning ? pomodoroStore.stopTimer() : pomodoroStore.startTimer();
}

const TimerButton = (): JSX.Element => {
  return (
    <button className={styles.button}
            onClick={pomodoroOnClick}>
      <Time/>
    </button>
  )
}

export default TimerButton;