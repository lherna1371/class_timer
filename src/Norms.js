import React from "react";
import './Norms.css';


export default class Norms extends React.Component {
  render() {
    if (this.props.link !== "norms") {
      return (
        <div/>
      );
    }
    return (
      <div className="title">
        <h4 className="header">Classroom Norms:</h4>

        <div className="norms">
          <ul>
            <li>Follow NJIT’s code of ethics</li>
            <li>Mute yourself</li>
            <li>Put pronouns as part of your Zoom names</li>
            <li>Raise hand or type in chat for questions</li>
            <li>We strongly encourage turning on video, so you feel present in the classroom</li>
            <li>Be respectful</li>
            <li>7 minute break on the hour mark</li>
          </ul>
        </div>

        <h5 className="header2">After Learning Git</h5>

        <div className="norms">
          <ul>
            <li>Have the Activity cloned locally before every class so you can follow along with us</li>
          </ul>
        </div>
      </div>
    );
  }
}
