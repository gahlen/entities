import React, { useState } from "react";
import "../styles/Nav.css";
import "../styles/SearchBar.css";

const Nav = () => {
    const [searchData, setSearchData] = useState();

//     const handleChange = ({ target }) => {
//     this.setSztate({ [target.name]: target.value });
//   };


  return (
    <nav className="navbar">
      <div>
        <h4>US Senators List</h4>
      </div>
      {/* <div class="container h-100"> */}
      {/* <div class="d-flex justify-content-center h-100"> */}
      <div class="searchbar">
        <input
          class="search_input"
          type="text"
          name="searchText"
          placeholder="Search..."
        />
        <a href="#" class="search_icon">
          <i class="fas fa-search" />
        </a>
        {/* </div> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Nav;
