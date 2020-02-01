import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Task.scss";

interface TaskModel {
  data: { name: string; url: string; description: string };
  key: number;
}

class Task extends React.PureComponent<TaskModel> {
  onClickHandler = (event: any) => {
    const el = event.target.closest(".Task");
    console.log(el);
    el.width = "15rem";
  };

  render() {
    const { data } = this.props;
    return (
      <div className="Task" onClick={this.onClickHandler}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="Task__name">{data.name}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className="Task__description">
              {data.description}
              <br />
              <a className="Task__link" href={data.url}>
                Link to project
              </a>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Task;
