import React, {useEffect} from 'react';
import styles from './App.module.css';
import Header from "../Header/Header";
import Pomodoro from "../Pomodoro/Pomodoro";
import Tasks from "../Tasks/Tasks";
import pomodoroStore from "../../Stores/PomodoroStore";
import {Helmet} from "react-helmet";
import {observer} from "mobx-react";


const handleKeyPress = (e: KeyboardEvent) => {
  const {keyCode} = e;
  if (keyCode === 32) {
    if (pomodoroStore.timerIsRunning) {
      pomodoroStore.stopTimer();
    } else {
      pomodoroStore.startTimer();
    }
  }
}

const getColor = (defaultTime: number): string => {
  switch (defaultTime) {
    case 5*60*1000:
      return "rgba(115,160,110,0.8)";
    case 15*60*1000:
      return 'rgba(102,150,150,0.8)';
    default:
      return 'rgba(130,30,18,0.8)';
  }
}

const App = observer(() => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <Helmet>
        <style>
          {`body {
              background-color: ${getColor(pomodoroStore.defaultCountdownTime)};
              transition: background-color 500ms ease-out;
          }`}
        </style>
      </Helmet>
      <div className={styles.App}>
        <Header />
        <Pomodoro />
        <Tasks />
      </div>
    </>
  );
});

export default App;
