import React from "react";
import AwesomeBG from "../AwesomeBG/AwesomeBG";
import SimpleExpansionPanel from "../panel";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <AwesomeBG />
        <SimpleExpansionPanel />
      </div>
    );
  }
}

export default App;
