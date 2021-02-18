import React, {useEffect} from "react";
import { observer } from "mobx-react-lite";
import styles from "./Time.module.css";
import {RootState} from "../../Stores/pomodoroStoreRedux";
import {useSelector} from "react-redux";
const Time: React.FC = observer(() => {
  const {countdownTime} = useSelector((state: RootState) => state.pomodoro);
  const minutesNum: number = Math.floor(countdownTime / 1000 / 60);
  const secondsNum: number = countdownTime/1000 - minutesNum*60;
  const [minutes, seconds] = [minutesNum.toString().padStart(2, '0'), secondsNum.toString().padStart(2, '0')];

  useEffect(() => {
    document.title = `${minutes}:${seconds} pomodoro`;
  }, [minutes, seconds]);

  return (
    <div className={styles.time}>
      {`${minutes}:${seconds}`}
    </div>
  );
});

export default Time;