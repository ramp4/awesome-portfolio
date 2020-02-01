import React from "react";
import "./Summary.scss";

class Summary extends React.PureComponent {
  render() {
    return (
      <div className="Summary">
        <p className="Summary__title">Junior Front-End Developer Summary</p>
        <p className="Summary__description">
          Hello! My name is Artem Balunda, and I'm a Minsk-based Front-End
          Developer. I am currently studying at Belarusian State University of
          Informatics and Radioelectronics in Faculty of Computer Design. I
          recently finished "JavaScript/Front-end" of Course The Rolling Scopes
          School
        </p>
        <p className="Summary__description">
          I want to start a career as a Junior Front-End Developer and grow up
          to the next step(Middle Frontend Developer).
        </p>
        <p className="Summary__description">
          i have a diverse set of skills, ranging from design, HTML markup,
          CSS/SASS styling, all the way to JavaScript, TypeScript, React+Redux
          development.
        </p>
        <p className="Summary__description">
          Of course, I have experience of working in graphic editors like
          Photoshop and Figma. I have good analytical skills. I'm a fast
          learner, good team worker.
        </p>
      </div>
    );
  }
}

export default Summary;
