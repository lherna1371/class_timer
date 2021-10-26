import React from "react";
import './Norms.css';


export default class Norms extends React.Component {
  render() {
    return (
      <div className="title">
        <h4 className="header">Classroom Norms:</h4>

        <div className="norms">
          <ul>
            <li>Follow UNLV’s code of ethics</li>
            <li>Mute yourself</li>
            <li>Put pronouns as part of your Zoom names.</li>
            <li>Be present in class from beginning to ending. Attendance will be taken at beginning and ending. Please message one of the instructors if you need to logout</li>
            <li>Raise hand or type in chat for questions</li>
            <li>We strongly encourage turning on video, so you feel present in the classroom</li>
            <li>Be respectful</li>
            <li>5 minute break on the hour mark</li>
            <li>Use Slack for communication. Instructors will respond before the next class starts</li>
            <li>Submit any required quizzes and/or assignments before the next class meeting (grading policy in Canvas Syllabus)</li>
            <li>Bring your 'A' game, with positivity!</li>
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
