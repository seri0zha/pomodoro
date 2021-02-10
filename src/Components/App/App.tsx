import React from 'react';
import styles from './App.module.css';
import Header from "../Header/Header";
import Pomodoro from "../Pomodoro/Pomodoro";
import Tasks from "../Tasks/Tasks";
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Pomodoro />
      <Tasks />
    </div>
  );
}

export default App;
