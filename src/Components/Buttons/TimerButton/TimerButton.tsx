import { useContext } from "react";
import {PomodoroContext} from "../../../Stores/pomodoroStore";
import styles from "./TimerButton.module.css";
import { observer } from "mobx-react-lite";

const TimerButton = observer(() => {
  const pomodoroStore = useContext(PomodoroContext);
  const text = pomodoroStore.timerIsRunning ? 'STOP' : 'START';

  const timerButtonOnClick = () => {
    pomodoroStore.timerIsRunning ? pomodoroStore.stopTimer() : pomodoroStore.startTimer();
  }

  return (
    <button className={styles.button}
            onClick={timerButtonOnClick}
            onKeyUp={e => e.preventDefault()}>
      {text}
    </button>
  ) 
});

export default TimerButton;