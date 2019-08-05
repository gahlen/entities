import React from "react";
import ReactDOM from "react-dom";
import SenateList from "./components/SenateList.js";
import Detail from "./components/Detail.js";
import Nav from "./components/Nav.js";

import "./styles/App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data : {first_name: "", last_name: "", state: "", party: ""}
    }
  }
  
  fromList = (params) => {
    console.log(params)
    this.setState({
      data : params
    })
  }

  fromSearch = (params) => {
    this.setState({
      data : params
    })
  }
  
  render() {
    return(
      <div className="mainDiv">
      <Nav calllist={this.fromSearch }/>
      <SenateList callback={this.fromList } />
      <Detail data={this.state.data} />
      </div>
    );
  }
   
  }

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
export default App