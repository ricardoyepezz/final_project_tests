import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./Favorites";

export const Navbar = () => {
	return (
<nav className="navbar-expand-lg navbar navbar-dark bg-dark border border-3 border-warning">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <Link style={{textDecoration : "none"}}  to="/">
        <li className="nav-item">
        <span className="nav-link">Home</span>
        </li>
		</Link>
		<Link style={{textDecoration : "none"}} to="/movies">
        <li className="nav-item">
          <span className="nav-link">Movies</span>
        </li>
		</Link>
    <Favorites/>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
		

	);
};


