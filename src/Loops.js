import React, { useEffect } from "react";
import './Loops.css';


export default class Loops extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // wait for a render
    setTimeout(() => {
      let userAnswer = window.prompt("WE GO AGAIN?");

      while(typeof(userAnswer) == "string" && userAnswer.toLowerCase() === "yes") {
          userAnswer = window.prompt("WE GO AGAIN?");
      }
    }, 0);
  }

  render() {
    return (
      <div className="title">
        <h4 className="header">Looooooooooooops</h4>
      </div>
    );
  }
}
