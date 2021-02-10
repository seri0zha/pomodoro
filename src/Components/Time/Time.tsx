import { observer } from "mobx-react";
import React, {useEffect} from "react";
import PomodoroStore from "../../Stores/PomodoroStore";

const Time: React.FC = observer(() => {
  const minutes: string = PomodoroStore.minutes.toString().padStart(2, '0');
  const seconds: string = PomodoroStore.seconds.toString().padStart(2, '0');
  useEffect(() => {
    document.title = `${minutes}:${seconds} pomodoro`;
  }, [minutes, seconds])
  return (
    <div>
      {`${minutes}:${seconds}`}
    </div>
  )
})

export default Time;