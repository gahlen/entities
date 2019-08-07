import React, { useState, useEffect } from "react";

const Selection = ({ active, list, onClick }) => {
  return (
    <div onClick={onClick} className={active ? "day active" : "day"}>
      {`${list.first_name} ${list.last_name}`}
    </div>
  );
};

const SenateList = (props) => {
  const [senatorData, setSenatorData] = useState(["default"]);
  const [chosen, setChosen] = useState();
  const handleOnClick = list => {
    setChosen(list.id);
    props.callback(list);
  };
  // Using useEffect here enables display logic to fully render prior to the data being loaded from props
    useEffect(() => {
      setSenatorData(props.data);
    }, [props.data])
  
  return (
    <div className="App">      
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

export default SenateList;