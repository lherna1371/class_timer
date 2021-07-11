import React from "react";
import Norms from "./Norms";
import Timer from "./Timer";
import "./App.css";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      link: "timer"
    };

    this.changeLink = this.changeLink.bind(this);
  }

  changeLink(event) {
    this.setState({link: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <button className="pageLink" onClick={this.changeLink} value="timer">Timer</button>
          <button className="pageLink" onClick={this.changeLink} value="norms">Class Norms</button>
          <button className="pageLink" onClick={this.changeLink} value="nothing">Nothing</button>
        </div>
        <Timer link={this.state.link}/>
        <Norms link={this.state.link}/>
      </div>
    );
  }
}
