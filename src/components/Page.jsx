import React from "react";
import { withRouter } from "react-router";

const Page = (props) => {
  console.log(props);
  return (
    <div id={props.title.toLowerCase()}>
      <div className="pageTitle">{props.title} Page</div>
    </div>
  );
};

export default withRouter(Page);
