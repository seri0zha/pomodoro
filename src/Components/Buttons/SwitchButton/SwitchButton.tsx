import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setCountdownTime, setInitialCountdownTime, stopTimer } from "../../../Reducers/pomodoroReducer";
import { RootState } from "../../../Stores/pomodoroStoreRedux";
import styles from "./SwitchButton.module.css";

interface TimerButtonProps {
  text: string,
  time: number,
}

const SwitchButton = (props: TimerButtonProps) => {

  const dispatch = useDispatch();
  const {initialCountdownTime} = useSelector((state: RootState) => state.pomodoro);

  const buttonClassName = styles.button + (props.time === initialCountdownTime ? ` ${styles.active}` : '')
  const handleOnClick = () => {
    dispatch(stopTimer());
    dispatch(setCountdownTime(props.time));
    dispatch(setInitialCountdownTime(props.time));
  };

  return (
    <button className={buttonClassName}
            onClick={handleOnClick}
            onKeyUp={e => e.preventDefault()}>
      {props.text}
    </button>
  )
};

export default SwitchButton;
