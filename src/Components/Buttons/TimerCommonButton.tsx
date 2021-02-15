import React from "react";
import {observer} from "mobx-react";

interface TimerButtonProps {
  className: string,
  onClickCallback(): any,
  text: string,
}

const TimerCommonButton = observer((props: TimerButtonProps) => {
  return (
    <button className={props.className}
            onClick={props.onClickCallback}
            onKeyUp={e => e.preventDefault()}>
      {props.text}
    </button>
  )
});

export default TimerCommonButton;