import React, {useEffect} from 'react';
import styles from './App.module.css';
import Header from "../Header/Header";
import Pomodoro from "../Pomodoro/Pomodoro";
import Tasks from "../Tasks/Tasks";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {observer} from "mobx-react-lite";
import { useBeforeunload } from "react-beforeunload";
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from "../../Stores/pomodoroStoreRedux";
import {startTimer, stopTimer} from "../../Reducers/pomodoroReducer";

const getColor = (defaultTime: number): string => {
  switch (defaultTime) {
    case 5 * 60 * 1000:
      return "rgba(115,160,110,0.8)";
    case 15 * 60 * 1000:
      return 'rgba(102,150,150,0.8)';
    default:
      return 'rgba(130,30,18,0.8)';
  }
}

const App = observer(() => {
  /*const pomodoroStore = useContext(PomodoroContext);*/
  const {timerIsRunning, initialCountdownTime} = useSelector((state: RootState) => state.pomodoro);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  useBeforeunload(() => {
    if (timerIsRunning) {
      return "Your progress will not be saved.";
    }
  });

  const handleKeyPress = (e: KeyboardEvent) => {
    const {keyCode} = e;
    if (keyCode === 32) {
      if (timerIsRunning) {
        dispatch(stopTimer());
      } else {
        dispatch(startTimer());
      }
    }
  }

  return (
    <HelmetProvider>
      <Helmet>
        <style>
          {`body {
              background-color: ${getColor(initialCountdownTime)};
              transition: background-color 500ms ease-out;
          }`}
        </style>
      </Helmet>
      <div className={styles.App}>
        <Header/>
        <Pomodoro/>
        <Tasks/>
      </div>
    </HelmetProvider>
  );
});

export default App;
