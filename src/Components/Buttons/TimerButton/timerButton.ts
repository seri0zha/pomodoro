import timerButtonStyles from "./TimerButton.module.css";
import pomodoroStore from "../../../Stores/pomodoroStore";

const timerButton = {
  styles: timerButtonStyles,
  onClickCallback(): any {
    pomodoroStore.timerIsRunning ? pomodoroStore.stopTimer() : pomodoroStore.startTimer();
  },
  getText(): string {
    return pomodoroStore.timerIsRunning ? 'STOP' : 'START';
  }
}

export default timerButton;