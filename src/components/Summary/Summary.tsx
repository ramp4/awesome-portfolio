import React from "react";
import "./Summary.scss";

class Summary extends React.PureComponent {
  render() {
    return (
      <div className="Summary">
        <p className="Summary__title">Developer Summary</p>
        <p className="Summary__description">
          I'm a Minsk-based <b>final</b> year student. I am studying at
          Belarusian State University of Informatics and Radioelectronics in
          Faculty of Computer Design. I recently finished "JavaScript/Front-end"
          Course The Rolling Scopes School(
          <a href="https://app.rs.school/certificate/3w8u2ak5">
            https://app.rs.school/certificate/3w8u2ak5
          </a>
          ). And now i am looking for <b>internship / practice / job</b>. I want
          to start a career as a Junior Developer and grow up to the next step.
          I have a diverse set of skills, ranging from design, <b>HTML</b>{" "}
          markup,
          <b> CSS/SASS</b> styling, all the way to <b> JavaScript</b>, some
          knowledge in
          <b> TypeScript, React, Redux development</b>. I know what a <b>Git</b>{" "}
          I know a little about
          <b> Sql, Soql, Apex, SalesForce</b>. Of course, I have experience of
          working in graphic editors like <b>Photoshop</b> and <b>Figma</b>. I
          have good analytical skills. I'm a motivated fast learner. I want to
          get practical development experience.
        </p>
        <p className="Summary__description">
          <b>Education:</b> University: Belarusian State University of
          Informatics and Radio electronics Faculty: Computer Design Specialty:
          Electronic Security Systems
        </p>
        <p className="Summary__description">
          <b>English Skills:</b> Upper-Intermediate B1
        </p>
        <p className="Summary__description">
          <b>Contact e-mai</b>l:{" "}
          <a href="mailto:rampatv13@gmail.com">rampatv13@gmail.com</a>
        </p>
      </div>
    );
  }
}

export default Summary;
