import React from "react";
import Game from "./Game";
import Loops from "./Loops";
import Norms from "./Norms";
import Timer from "./Timer";
import "./App.css";
import { Link, Switch,Route, BrowserRouter } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar">
            <Link className="pageLink" to="/timer">Timer</Link>
            <Link className="pageLink" to="/norms">Class Norms</Link>
            <Link className="pageLink" to="/game">Game</Link>
            <Link className="pageLink" to="/again">AGAIN</Link>
            <Link className="pageLink" to="/nothing">Nothing</Link>
          </div>
          <Switch>
            <Route path="/timer" component={Timer}/>
            <Route path="/norms" component={Norms}/>
            <Route path="/game" component={Game}/>
            <Route path="/again" component={Loops}/>
            <Route path="/nothing" component={NothingComponent}/>
            <Route exact path="/" component={Timer}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const NothingComponent = () => {
  return <div>Nothing</div>
}
