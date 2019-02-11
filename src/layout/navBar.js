import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        VideoGameBlog
      </Link>
        <ul className="navbar-nav">
		    <li className="nav-item">
		    	<Link className="nav-link" to={`/`}>Home</Link>
		    </li>
		    <li className="nav-item">
		    	<Link className="nav-link" to={`/create`}>Create</Link>
		    </li>
		 </ul>
    </nav>
  );
}

export default NavBar;