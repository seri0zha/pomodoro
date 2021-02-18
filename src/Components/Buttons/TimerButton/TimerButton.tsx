import styles from "./TimerButton.module.css";
import { RootState } from "../../../Stores/pomodoroStore";
import { useSelector, useDispatch } from "react-redux";
import { startTimer, stopTimer } from "../../../Reducers/pomodoroReducer";

const TimerButton = () => {

  const {timerIsRunning} = useSelector((state: RootState) => state.pomodoro);
  const dispatch = useDispatch();

  const text = timerIsRunning ? 'STOP' : 'START';
  const handleOnClick = () => {
    timerIsRunning ? dispatch(stopTimer()) : dispatch(startTimer());
  };

  return (
    <button className={styles.button}
            onClick={handleOnClick}
            onKeyUp={e => e.preventDefault()}>
      {text}
    </button>
  )
};

export default TimerButton;
