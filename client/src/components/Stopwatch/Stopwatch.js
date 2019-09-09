import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    status: false,
    runningTime: 0
  };

  startTimer = () => {
    const startTime = Date.now() - this.state.runningTime;
    this.timer = setInterval(() => {
      this.setState({ runningTime: Date.now() - startTime });
    });
    this.distanceCheck = setInterval(() => {
      const {runningTime} = this.state;
      console.log(runningTime);
    }, 10000)
  }

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
        clearInterval(this.distanceCheck);
      } else {
        this.startTimer();
      }
      return { status: !state.status };
    });
  };
  handleReset = () => {
    clearInterval(this.timer); // new
    clearInterval(this.distanceCheck);
    this.setState({ runningTime: 0, status: false });
  };
  handleSubmit = () => {
    console.log(this.state.runningTime);
  };
  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.distanceCheck);
  }
  render() {
    const { status, runningTime } = this.state;
    const rawHours = Math.floor(
      (runningTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const rawMinutes = Math.floor((runningTime % (1000 * 60 * 60)) / (1000 * 60));
    const rawSeconds = Math.floor((runningTime % (1000 * 60)) / 1000);
    const rawMilliseconds = runningTime % 1000;
    const hours = (rawHours < 10) ? `0${rawHours}` : rawHours;
    const minutes = (rawMinutes < 10) ? `0${rawMinutes}` : rawMinutes;
    const seconds = (rawSeconds < 10) ? `0${rawSeconds}`: rawSeconds;
    const milliseconds = (rawMilliseconds < 10) ? `00${rawMilliseconds}` : ((rawMilliseconds < 100) ? `0${rawMilliseconds}` : rawMilliseconds);
    
    return (
      <div>
        <p>
          {hours}:{minutes}:{seconds}:{milliseconds}
        </p>
        <button onClick={this.handleClick}>{status ? "Stop" : "Start"}</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default Stopwatch;
