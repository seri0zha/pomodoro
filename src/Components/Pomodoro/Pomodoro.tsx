import React from 'react';
import TimerButton from "../TimerButton/TimerButton";
import styles from './Pomodoro.module.css';
import pomodoroStore from '../../Stores/PomodoroStore';

window.onbeforeunload = () => {
  if (pomodoroStore.timerIsRunning) {
    return "Are you sure?";
  }
}

const Pomodoro: React.FC = () => {
  return (
    <main className={styles.main}>
      <TimerButton/>
    </main>
  )
}

export default Pomodoro;
