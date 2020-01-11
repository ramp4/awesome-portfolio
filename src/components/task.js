import React from "react";

function Task(props) {
  return (
    <a href={props.task.url} className="portfolio__task">{props.task.name}</a>
  )
}

export default Task;
