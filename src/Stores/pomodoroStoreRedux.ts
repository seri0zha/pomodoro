import {combineReducers, createStore} from "redux";
import pomodoroReducer from "../Reducers/pomodoroReducer";

const rootReducer = combineReducers({
  pomodoro: pomodoroReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const pomodoroStoreRedux = createStore(rootReducer);
export default pomodoroStoreRedux;
