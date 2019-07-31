import React, { useState, useEffect } from "react";
const headers = {"X-API-Key": process.env.REACT_APP_APIKEY}
const congress = process.env.REACT_APP_CONGKEY

const Day = ({ active, list, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day active" : "day"}>
      {list}
    </div>
  );
};

const Search = () => {
  const [senatorData, setSenatorData] = useState(["default"]);
  const [chosen, setChosen] = useState();

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
    <h2>Welcome To The US Senators List</h2>
      {senatorData.map((listItem, i) => (
        <Day
          key={i}
          list={`${listItem.first_name} ${listItem.last_name}`}
          active={listItem.id === chosen}
          onClick={() => setChosen(listItem.id)}
        />
      ))}
    </div>
   
  );
};


export default Search;
