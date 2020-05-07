import React from "react";
import { withRouter } from "react-router";
import Page from "./Page";

const Home = () => {
  return (
    <div id="home">
      <h3> Welcome! </h3>
    </div>
  );
};

export default withRouter(Home);
