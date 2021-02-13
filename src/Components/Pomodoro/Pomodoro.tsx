import React from 'react';
import TimerButton from "../Buttons/TimerButton/TimerButton";
import styles from './Pomodoro.module.css';
import pomodoroStore from '../../Stores/PomodoroStore';
import Time from "../Time/Time";
import SwitchButton from "../Buttons/SwitchButton/SwitchButton";

window.onbeforeunload = () => {
  if (pomodoroStore.timerIsRunning) {
    return "Are you sure?";
  }
}

const Pomodoro: React.FC = () => {
  return (
    <main className={styles.main}>
      <SwitchButton text='Pomodoro' time={25 * 60 * 1000}/>
      <SwitchButton text='Short break' time={5 * 60 * 1000}/>
      <SwitchButton text='Long break' time={15 * 60 * 1000}/>
      <Time />
      <TimerButton/>
    </main>
  )
}

export default Pomodoro;
