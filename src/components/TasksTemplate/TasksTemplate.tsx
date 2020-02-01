import React from "react";
import "./TasksTemplate.scss";
import Task from "../Task/Task";
import tasksList from "../../data/taskList";

class TasksTemplate extends React.PureComponent {
  renderTemplate = () => {
    return tasksList.map((item, i) => {
      return <Task data={item} key={i} />;
    });
  };

  render() {
    return <div className="TasksTemplate">{this.renderTemplate()}</div>;
  }
}

export default TasksTemplate;
