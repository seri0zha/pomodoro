const SET_COUNTDOWN_TIME = "SET_COUNTDOWN_TIME";
const SET_TIMER_IS_RUNNING = "SET_TIMER_IS_RUNNING";
const SET_CURRENT_TIME = "SET_CURRENT_TIME";
const SET_TIMER_ID = "SET_TIMER_ID";

interface IAction {
  type: string,
  payload?: any,
}

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

const pomodoroReducer = (state = initialState, action: IAction) => {
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
    default: {
      return {...state};
    }
  }
}

export const startTimer = () => (dispatch: any, getState: any) => {
  const state = getState().pomodoro;
  if (!state.timerIsRunning) {
    dispatch(setTimerIsRunning(true));
    dispatch(setCurrentTime(new Date().getTime()));
    const timerId = window.setInterval(() => {
      if (state.countdownTime === 0) {
        stopTimer();
      } else if (new Date().getTime() - state.startTime >= 1000) {
        dispatch(setCountdownTime(state.countdownTime - 1000));
        dispatch(setCurrentTime(state.currentTime + 1000));
      }
    }, 100);
    dispatch(setTimerId(timerId));
  }
}

export const stopTimer = () => (dispatch: any, getState: any) => {
  const state = getState().pomodoro;
  if (state.timerIsRunning) {
    window.clearInterval(state.timerId);
    dispatch(setTimerIsRunning(false));
    dispatch(setCountdownTime(state.initialCountdownTime));
  }
}

const setTimerIsRunning = (timerIsRunning: boolean) => (
  {type: SET_TIMER_IS_RUNNING, payload: timerIsRunning}
);
const setCurrentTime = (currentTime: number) => (
  {type: SET_CURRENT_TIME, payload: currentTime}
);

const setCountdownTime = (countdownTime: number) => (
  {type: SET_COUNTDOWN_TIME, payload: countdownTime}
)

const setTimerId = (timerId: number) => (
  {type: SET_TIMER_ID, payload: timerId}
)
export default pomodoroReducer;
