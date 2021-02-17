import React from "react";

interface TimerButtonProps {
  className: string,
  onClickCallback(): any,
  text: string,
}

const TimerCommonButton = (props: TimerButtonProps) => {
  return (
    <button className={props.className}
            onClick={props.onClickCallback}
            onKeyUp={e => e.preventDefault()}>
      {props.text}
    </button>
  )
};

export default TimerCommonButton;