import {applyMiddleware, combineReducers, createStore} from "redux";
import pomodoroReducer from "../Reducers/pomodoroReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pomodoro: pomodoroReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

const pomodoroStoreRedux = createStore(rootReducer, applyMiddleware(thunk));
export default pomodoroStoreRedux;
