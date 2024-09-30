import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
        <div className="topnav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mycomponent">My Component</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/user">User</NavLink>
        </div>
    );
  }
}

export default Nav;