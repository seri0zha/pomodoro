import React from 'react';
import styles from './Pomodoro.module.css';
import pomodoroStore from '../../Stores/PomodoroStore';
import Time from "../Time/Time";
import TimerCommonButton from "../Buttons/TimerCommonButton"
import {observer} from "mobx-react";
import switchButton from "../Buttons/switchButton/switchButton";
import timerButton from "../Buttons/timerButton/timerButton";

window.onbeforeunload = () => {
  if (pomodoroStore.timerIsRunning) {
    return "Your progress will not be saved.";
  }
}

const Pomodoro: React.FC = observer(() => {
  return (
    <main className={styles.main}>
      <TimerCommonButton text='Pomodoro'
                         onClickCallback={() => switchButton.onClickCallback(25*60*1000)}
                         className={switchButton.getClassName(25*60*1000)}/>
      <TimerCommonButton text='Short break'
                         onClickCallback={() => switchButton.onClickCallback(5*60*1000)}
                         className={switchButton.getClassName(5*60*1000)}/>
      <TimerCommonButton text='Long break'
                         onClickCallback={() => switchButton.onClickCallback(15*60*1000)}
                         className={switchButton.getClassName(15*60*1000)}/>
      <Time />
      <TimerCommonButton text={timerButton.getText()}
                         onClickCallback={timerButton.onClickCallback}
                         className={timerButton.styles.button}/>
    </main>
  )
});

export default Pomodoro;
