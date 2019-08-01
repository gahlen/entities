import React from "react"; 
import { Route } from "react-router-dom";
import Detail from "../components/Detail";

const Routes = () => {
  return (
    <>
      <Route
        exact
        path="/"
        component={() => <Detail  />}
      />
    </>
  );
};

export default Routes;
