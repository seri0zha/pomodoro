import {action, computed, makeObservable, observable} from 'mobx';
import React, {createContext} from "react";

class PomodoroStore {
  @observable defaultCountdownTime: number = 25 * 60 * 1000;
  @observable timerIsRunning: boolean = false;
  @observable countdownTime: number = this.defaultCountdownTime;
  @computed get minutes() {return Math.floor(this.countdownTime / 1000 / 60)};
  @computed get seconds() {return this.countdownTime/1000 - this.minutes*60};
  timerId: number = 0;
  startTime: number = new Date().getTime();

  constructor() {
    makeObservable(this);
  }

  startTimer = () => {
    if (!this.timerIsRunning) {
      this.setTimerIsRunning(true);
      this.startTime = new Date().getTime();
      this.timerId = window.setInterval(() => {
        if (this.countdownTime === 0) {
          this.stopTimer();
        } else if (new Date().getTime() - this.startTime >= 1000) {
          this.setCountdownTime(this.countdownTime - 1000);
          this.startTime += 1000;
        }
      }, 100);
    }
  }

  stopTimer = () => {
    if (this.timerIsRunning) {
      window.clearInterval(this.timerId);
      this.setTimerIsRunning(false);
      this.setCountdownTime(this.defaultCountdownTime);
    }
  }

  @action
  setCountdownTime = (countdownTime: number) => {
    this.countdownTime = countdownTime;
  }

  @action
  setDefaultCountdownTime = (defaultCountdownTime: number) => {
    this.stopTimer();
    this.defaultCountdownTime = defaultCountdownTime;
    this.countdownTime = defaultCountdownTime;
  }

  @action
  setTimerIsRunning = (timerIsRunning: boolean) => {
    this.timerIsRunning = timerIsRunning;
  }
}

const pomodoroStore = new PomodoroStore();

export const PomodoroContext = createContext<PomodoroStore>(pomodoroStore);

export default pomodoroStore;
