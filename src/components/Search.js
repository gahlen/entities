import React, { useState, useEffect, } from "react"
import { Redirect } from "react-router-dom";

const headers = {"X-API-Key": process.env.REACT_APP_APIKEY}
const congress = process.env.REACT_APP_CONGKEY

const Selection = ({ active, list, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day active" : "day"}>
    {`${list.first_name} ${list.last_name}`}
      <Redirect to={{
        pathname: '/Detail',
        selected: list.first_name         
      }} />
      
    </div>
  );
};

const Search = () => {
  const [senatorData, setSenatorData] = useState(["default"])
  const [chosen, setChosen] = useState()

  const handleOnClick = (list) => {
    setChosen(list.id)
    console.log(list.first_name)
    
  }


  useEffect(() => {
    fetch("https://api.propublica.org/congress/v1/" + congress, {
      method: "GET",
      headers: headers
    })
      .then(res => res.json())
      .then(data => data.results[0].members)
      .then(names => {
        setSenatorData(names);
      });
  }, []);
  return (
    
    <div className="App">
    <h2>US Senators List</h2>
      {senatorData.map((listItem, i) => (
        <Selection
          key={i}
          list={listItem}
          active={listItem.id === chosen}
          onClick={() => handleOnClick(listItem)}
        />
      ))}
    </div>
   
  );
};


export default Search
