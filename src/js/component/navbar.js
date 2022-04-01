import React from "react";
import { Link } from "react-router-dom";
import starWarsIcon from "../../img/star-wars-icon.png";
import { Favorites } from "./Favorites";

export const Navbar = () => {
	return (
<nav className="navbar-expand-lg navbar navbar-dark bg-dark border border-3 border-warning">
  <div className="container-fluid">
  <Link to="/">
  <span className="navbar-brand">
      <img src={starWarsIcon} alt="" width="44" height="40" className="d-inline-block align-text-top"/>
    </span>
	</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <Link style={{textDecoration : "none"}}  to="/">
        <li className="nav-item">
        <span className="nav-link">Home</span>
        </li>
		</Link>
		<Link style={{textDecoration : "none"}} to="/people">
        <li className="nav-item">
          <span className="nav-link">People</span>
        </li>
		</Link>
		<Link style={{textDecoration : "none"}} to="/planets">

		<li className="nav-item">
          <span className="nav-link">Planets</span>
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


