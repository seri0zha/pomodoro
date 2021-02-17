import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import styles from './Time.module.css';
import {PomodoroContext} from "../../Stores/pomodoroStore";

const Time: React.FC = observer(() => {
  const pomodoroStore = useContext(PomodoroContext);
  const minutes: string = pomodoroStore.minutes.toString().padStart(2, '0');
  const seconds: string = pomodoroStore.seconds.toString().padStart(2, '0');

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