import React, {useEffect} from 'react';
import styles from './App.module.css';
import Header from "../Header/Header";
import Pomodoro from "../Pomodoro/Pomodoro";
import Tasks from "../Tasks/Tasks";
import pomodoroStore from "../../Stores/PomodoroStore";

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

const App = () => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={styles.App}>
      <Header />
      <Pomodoro />
      <Tasks />
    </div>
  );
}

export default App;
