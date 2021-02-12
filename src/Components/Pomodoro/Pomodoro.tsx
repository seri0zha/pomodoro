import React from 'react';
import TimerButton from "../TimerButton/TimerButton";
import styles from './Pomodoro.module.css';
import pomodoroStore from '../../Stores/PomodoroStore';
import Time from "../Time/Time";

window.onbeforeunload = () => {
  if (pomodoroStore.timerIsRunning) {
    return "Are you sure?";
  }
}

const Pomodoro: React.FC = () => {
  return (
    <main className={styles.main}>
      <Time />
      <TimerButton/>
    </main>
  )
}

export default Pomodoro;
