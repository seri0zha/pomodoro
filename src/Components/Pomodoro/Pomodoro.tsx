import React from 'react';
import styles from './Pomodoro.module.css';
import Time from "../Time/Time";
import {observer} from "mobx-react-lite";
import SwitchButton from '../Buttons/SwitchButton/SwitchButton';
import TimerButton from '../Buttons/TimerButton/TimerButton';

const Pomodoro: React.FC = observer(() => {
  return (
    <main className={styles.main}>
      <SwitchButton text='Pomodoro' time={25*60*1000}/>
      <SwitchButton text='Short break' time={5*60*1000}/>
      <SwitchButton text='Long break' time={15*60*1000}/>
      <Time />
      <TimerButton/>
    </main>
  )
});

export default Pomodoro;
