import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";

const Nav = () => {
  return (
    <div id="nav">
      <span className="navButton" id="startNav">
        <Link to="/start" target="_blank">
          Start
        </Link>
      </span>

      <span className="navButton" id="middleNav">
        <NavLink
          to="/middle"
          target={"_blank"}
          activeClassName="selected"
          activeStyle={{ textDecoration: "none" }}>
          Middle
        </NavLink>
      </span>

      <span className="navButton" id="endNav">
        <NavLink to="/last" target={"_blank"} activeClassName="selected">
          Last
        </NavLink>
      </span>
    </div>
  );
};

export default withRouter(Nav);
