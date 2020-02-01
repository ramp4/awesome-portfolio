import React from "react";
import "./App.scss";
import AwesomeBG from "../AwesomeBG/AwesomeBG";
import TasksTemplate from "../TasksTemplate/TasksTemplate";
import Summary from "../Summary/Summary";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Summary />
        <AwesomeBG />
        <TasksTemplate />
      </div>
    );
  }
}

export default App;
