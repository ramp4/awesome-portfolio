import React from "react";

interface TaskProps {
  url: string;
  name: string;
}

class Task extends React.PureComponent<TaskProps> {
  render() {
    return (
      <div className="Task">
        <p className="Task__name">{this.props.name}</p>
        <p className="Task__description">{this.props.name}</p>
      </div>
    );
  }
}

export default Task;
