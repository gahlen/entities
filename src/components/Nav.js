import React, { useState, useEffect } from "react";
import "../styles/Nav.css";
import "../styles/SearchBar.css";

const Nav = props => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  const handleSubmit = event => {
    event.preventDefault();
    let retData = filterText(filter);
    props.callback(retData);
    setFilter("");
  };

  const updateField = e => {
    // filter is passed as a search string instead of an object. The target.value is the "name" in the input
    // tag.  The "value" sets the field to whatever default is needed.
    setFilter(e.target.value.toLowerCase());
  };

  const filterText = (filter) => {
    switch (filter) {
      case "m":
        return data.filter(value => value.gender.toLowerCase() === filter);
      case "f":
        return data.filter(value => value.gender.toLowerCase() === filter);
      case "d":
        return data.filter(value => value.party.toLowerCase() === filter);
      case "r":
        return data.filter(value => value.party.toLowerCase() === filter);
      case "all":
        return data;
      default:
        return data.filter(value => value.state.toLowerCase() === filter);
    }
  };



  return (
    <nav className="navbar">
      <div>
        <h4>US Senators List</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input
            className="search_input"
            type="text"
            name="searchText"
            value={filter}
            onChange={updateField}
            placeholder="gender(f,m) party(r,d) state(2 char) all"
          />
          <a href="#" className="search_icon">
            <i className="fas fa-search" />
          </a>
        </div>
      </form>
    </nav>
  );
};

export default Nav;
