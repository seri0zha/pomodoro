import React from "react";
import styles from './SwitchButton.module.css';
import pomodoroStore from '../../../Stores/PomodoroStore';
import {observer} from "mobx-react";

interface SwitchButtonProps {
  time: number,
  text: string,
}

const SwitchButton = observer((props: SwitchButtonProps): JSX.Element => {
  return (
    <button className={styles.button + (props.time === pomodoroStore.defaultCountdownTime ? ` ${styles.active}` : '')}
            onClick={() => pomodoroStore.setDefaultCountdownTime(props.time)}>
      {props.text}
    </button>
  )
});

export default SwitchButton;