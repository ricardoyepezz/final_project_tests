import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
<nav className="navbar-expand-lg navbar navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/">
    <span className="navbar-brand">The Star Wars Blog</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
	</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
	  <Link to="/">
        <li className="nav-item">
          <span className="nav-link">Home</span>
        </li>
		</Link>
		<Link to="/people">
        <li className="nav-item">
          <span className="nav-link">People</span>
        </li>
		</Link>
		<Link to="/planets">

		<li className="nav-item">
          <span className="nav-link">Planets</span>
        </li>
		</Link>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
		

	);
};


