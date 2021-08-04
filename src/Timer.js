import React from "react";
import './Timer.css';


export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    if (this.state === undefined || this.state.time_in_minutes === undefined) {
      this.state = {
        time_in_minutes: 5,
        timer_interval: null
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.timer = this.timer.bind(this);
  }

  handleChange(event) {
    this.setState({time_in_minutes: event.target.value});
  }

  timer() {
    if (this.state.timer_interval != null) {
      clearInterval(this.state.timer_interval);
    }

    let time = this.state.time_in_minutes;
    document.getElementById("timer").innerHTML = String(time) + ":00";

    const start = Date.now();
    const delta = parseInt(time) * 60000;  // time # of minutes
    const countDownDate = start + delta;
    let distance;

    // Update each second
    this.setState({
      timer_interval: setInterval(function() {
        // If still on the Timer page
        if (document.getElementById("timer") !== null) {
          distance = countDownDate - Date.now();

          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Set value in HTML
          document.getElementById("timer").innerHTML = String(minutes) + ":" + String(seconds).padStart(2, "0");

          // If the count down is finished, write some text
          if (distance <= 0) {
            if (this.state !== undefined) {
              clearInterval(this.state.timer_interval);
            }
            document.getElementById("timer").innerHTML = "Class Time!";
          }
        }
      }, 1000)
    });
  };

  render() {
    return (
      <div className="title">
        <h2 className="break_timer">Break Timer:</h2>

        <label id="label">
          Time:
          <input type="text" value={this.state.time_in_minutes} onChange={this.handleChange} />
        </label>
        <button onClick={this.timer}>Start</button>

        <h1 id="timer">5:00</h1>
      </div>
    );
  }
}
