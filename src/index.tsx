import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import pomodoroStore, {PomodoroContext} from "./Stores/pomodoroStore";

ReactDOM.render(
  <React.StrictMode>
    <PomodoroContext.Provider value={pomodoroStore}>
      <App />
    </PomodoroContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
