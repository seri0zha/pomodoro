import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../Stores/pomodoroStoreRedux";

const SET_COUNTDOWN_TIME = "SET_COUNTDOWN_TIME";
const SET_TIMER_IS_RUNNING = "SET_TIMER_IS_RUNNING";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
const SET_TIMER_ID = "SET_TIMER_ID";
const SET_INITIAL_COUNTDOWN_TIME = "SET_INITIAL_COUNTDOWN_TIME";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export interface IPomodoroState {
  initialCountdownTime: number,
  countdownTime: number,
  timerIsRunning: boolean,
  timerId: number,
  currentTime: number,
}

const initialState: IPomodoroState = {
  initialCountdownTime: 25* 60 * 1000,
  countdownTime: 25 * 60 * 1000,
  timerIsRunning: false,
  timerId: 0,
  currentTime: new Date().getTime(),
}

const pomodoroReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_COUNTDOWN_TIME: {
      return {...state, countdownTime: action.payload};
    }

    case SET_TIMER_IS_RUNNING: {
      return {...state, timerIsRunning: action.payload};
    }

    case SET_CURRENT_TIME: {
      return {...state, currentTime: action.payload};
    }

    case SET_TIMER_ID: {
      return {...state, timerId: action.payload};
    }

    case SET_INITIAL_COUNTDOWN_TIME: {
      return {...state, initialCountdownTime: action.payload};
    }

    default: {
      return {...state};
    }
  }
}

export const startTimer = (): AppThunk => (dispatch: any, getState: any) => {
  const {timerIsRunning} = getState().pomodoro;
  dispatch(setCurrentTime(new Date().getTime()));
  if (!timerIsRunning) {
    dispatch(setTimerIsRunning(true));
    dispatch(setCurrentTime(new Date().getTime()));
    const timerId = window.setInterval(() => {
      const {countdownTime, currentTime} = getState().pomodoro;
      if (countdownTime === 0) {
        dispatch(stopTimer());
      } else if (new Date().getTime() - currentTime >= 1000) {
        dispatch(setCountdownTime(countdownTime - 1000));
        dispatch(setCurrentTime(currentTime + 1000));
      }
    }, 100);
    dispatch(setTimerId(timerId));
  }
}


export const stopTimer = (): AppThunk => (dispatch: any, getState: any) => {
  const state = getState().pomodoro;
  if (state.timerIsRunning) {
    window.clearInterval(state.timerId);
    dispatch(setTimerIsRunning(false));
    dispatch(setCountdownTime(state.initialCountdownTime));
  }
}

const setTimerIsRunning: ActionCreator<Action> = (timerIsRunning: boolean) => (
  {type: SET_TIMER_IS_RUNNING, payload: timerIsRunning}
);
const setCurrentTime: ActionCreator<Action> = (currentTime: number) => (
  {type: SET_CURRENT_TIME, payload: currentTime}
);

export const setCountdownTime: ActionCreator<Action> = (countdownTime: number) => (
  {type: SET_COUNTDOWN_TIME, payload: countdownTime}
);

const setTimerId: ActionCreator<Action> = (timerId: number) => (
  {type: SET_TIMER_ID, payload: timerId}
);

export const setInitialCountdownTime: ActionCreator<Action> = (initialCountdownTime: number) => (
  {type: SET_INITIAL_COUNTDOWN_TIME, payload: initialCountdownTime}
);
export default pomodoroReducer;
