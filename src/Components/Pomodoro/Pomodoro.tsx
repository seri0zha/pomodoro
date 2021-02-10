import React from 'react';
import Time from "../Time/Time";
import TimerButton from "../TimerButton/TimerButton";
import pomodoroStore from "../../Stores/PomodoroStore";
import styles from './Pomodoro.module.css';

const Pomodoro: React.FC = () => {
  const startTimer = () => {
    pomodoroStore.startTimer();
  }

  const stopTimer = () => {
    pomodoroStore.stopTimer();
  }

  return (
    <main className={styles.main}>
      <Time />
      <TimerButton text={'start'} callBack={startTimer}/>
      <TimerButton text={'stop'} callBack={stopTimer}/>
    </main>
  )
}

export default Pomodoro;
