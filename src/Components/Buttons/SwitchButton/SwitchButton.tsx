import { useContext } from "react";
import {PomodoroContext} from "../../../Stores/pomodoroStore";
import styles from "./SwitchButton.module.css";
import { observer } from "mobx-react-lite";

interface IButtonProps {
  time: number,
  text: string,
}

const SwitchButton = observer((props: IButtonProps) => {
  const pomodoroStore = useContext(PomodoroContext);
  const className = styles.button + (props.time === pomodoroStore.defaultCountdownTime ? ` ${styles.active}` : '');

  return (
    <button className={className}
            onClick={() => pomodoroStore.setDefaultCountdownTime(props.time)}
            onKeyUp={e => e.preventDefault()}>
      {props.text}
    </button>
  ) 
});

export default SwitchButton;