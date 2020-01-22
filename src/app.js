import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Task from "./components/task";

function App() {
  return (
    <div className="App">
      <canvas id="nokey">Your Browser Don't Support Canvas, Please Download Chrome ^_^``
    </canvas>
      <div className="portfolio">
        <Task task={{ name: 'Curriculum Vitae', url: 'https://github.com/ramp4/rsschool-cv/blob/gh-pages/cv.md' }} />
        <Task task={{ name: 'Fancy Weather', url: 'https://vveather.netlify.com/' }} />
        <Task task={{ name: 'News', url: 'https://news-page.netlify.com/' }} />
        <Task task={{ name: 'Image-api', url: 'https://image-appi.netlify.com/' }} />
        <Task task={{ name: 'Repair Design Project', url: 'https://repair-project.netlify.com/' }} />
        <Task task={{ name: 'The Yalow', url: 'https://the-yalow.netlify.com//' }} />
        <Task task={{ name: 'Hexal', url: 'https://hexalogon.netlify.com' }} />
        <Task task={{ name: 'NeutronMail', url: 'https://neutron-email.netlify.com/' }} />


      </div>
    </div>
  );
}


export default hot(module)(App);

