import React from "react";
import ReactDOM from "react-dom";
import SenateList from "./components/SenateList.js";
import Detail from "./components/Detail.js";
import Nav from "./components/Nav.js";

import "./styles/App.css";

const headers = { "X-API-Key": process.env.REACT_APP_APIKEY };
const congress = process.env.REACT_APP_CONGKEY;

class App extends React.Component {
  constructor(){
    super();
    this.state= {
      data : [{first_name: "", last_name: "", state: "", party: "", gender: ""}],
      origData : [{first_name: "", last_name: "", state: "", party: "", gender: ""}],
      detailData: {}
    }
  }
  
  componentDidMount() {
    fetch("https://api.propublica.org/congress/v1/" + congress, {
      method: "GET",
      headers: headers
    })
      .then(res => res.json())
      .then(data => data.results[0].members)
      .then(data => this.setState({ data, origData: data }))
      
  }
    
  fromList = (params) => {
    this.setState({
      detailData : params
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
      <Nav callback={this.fromSearch} data={this.state.origData} />
      <SenateList callback={this.fromList } data={this.state.data} />
      <Detail data={this.state.detailData} />
      </div>
    );
  }
   
  }

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
export default App