import React from "react";
import styles from './TimerButton.module.css';
import pomodoroStore from '../../../Stores/PomodoroStore';
import {observer} from "mobx-react";

const TimerButton = observer((): JSX.Element => {
  const pomodoroOnClick = () => {
    pomodoroStore.timerIsRunning ? pomodoroStore.stopTimer() : pomodoroStore.startTimer();
  }

  return (
    <button className={styles.button}
            onClick={pomodoroOnClick}>
      {pomodoroStore.timerIsRunning ? 'STOP' : 'START'}
    </button>
  )
})

export default TimerButton;