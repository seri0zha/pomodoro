import switchButtonStyles from "./SwitchButton.module.css";
import pomodoroStore from "../../../Stores/PomodoroStore";

const switchButton = {
  styles: switchButtonStyles,
  onClickCallback(time: number): any {
    pomodoroStore.setDefaultCountdownTime(time);
  },
  getClassName(time: number): any {
    return switchButtonStyles.button +
      (time === pomodoroStore.defaultCountdownTime ? ` ${this.styles.active}` : '')
  },
}

export default switchButton;