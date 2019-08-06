import React, { useState } from "react";
import "../styles/Nav.css";
import "../styles/SearchBar.css";

const Nav = () => {
  const [form, setValues] = useState({
    filter: "",
    data: ""
  });
  console.log("search",form)

  const printValues = e => {
    e.preventDefault();
    console.log(form.filter, form.data);
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <nav className="navbar">
      <div>
        <h4>US Senators List</h4>
      </div>
      <div className="searchbar">
        <input
          className="search_input"
          type="text"
          name="searchText"
          onChange={updateField}
          placeholder="Search..."
        />
        <a href="#" className="search_icon">
          <i className="fas fa-search" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
