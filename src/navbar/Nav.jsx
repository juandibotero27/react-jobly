import React from "react";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'

const NavBar = () => {



return (
    <div>
    <nav className="Navigation navbar navbar-expand-md">
    <Link className="navbar-brand" to="/">
      Jobly
    </Link>
    </nav>
    <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
        <NavLink className="nav-link" to="/companies">
            Companies
        </NavLink>
        </li>
        <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/jobs">
                Jobs
            </NavLink>
        </li>
        <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/login">
                Login
            </NavLink>
        </li>
        <li className="nav-item mr-4">
            <NavLink className="nav-link" to="/signup">
                SignUp
            </NavLink>
        </li>
    </ul>
    </div>
)
}

export default NavBar;