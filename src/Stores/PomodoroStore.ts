import {computed, makeAutoObservable } from 'mobx';

class PomodoroStore {
  readonly defaultCountdownTime: number = 25 * 60 * 1000;
  countdownTime: number = this.defaultCountdownTime;
  timerId: any;
  timerIsRunning: boolean = false;
  @computed get minutes() {return Math.floor(this.countdownTime / 1000 / 60)};
  @computed get seconds() {return this.countdownTime/1000 - this.minutes*60};
  startTime: number = new Date().getTime();
  constructor() {
    makeAutoObservable(this);
  }

  startTimer = () => {
    if (!this.timerIsRunning) {
      this.timerIsRunning = true;
      this.startTime = new Date().getTime();
      this.timerId = setInterval(() => {
        if (this.countdownTime === 0) {
          this.stopTimer();
        } else if (new Date().getTime() - this.startTime >= 1000) {
          this.countdownTime -= 1000;
          this.startTime += 1000;
        }
      }, 100);
    }
  }
  stopTimer = () => {
    if (this.timerIsRunning) {
      window.clearInterval(this.timerId);
      this.timerIsRunning = false;
      this.countdownTime = this.defaultCountdownTime;
    }
  }
}

export default new PomodoroStore();
