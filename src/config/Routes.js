import React from "react"; 
import { Route } from "react-router-dom";
import Search from "../components/Search";

const Routes = ({ getContacts, addContact, login }) => {
  return (
    <>
      <Route
        exact
        path="/"
        component={() => <Search  />}
      />
    </>
  );
};

export default Routes;
