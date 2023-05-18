import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className="navbar bg-emerald-950">
			  <div className="flex">
			    <Link to="/" className="w-1/6">
				<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className=""/>
			    </Link>
			    <p className="text-2xl">Labyrinth Gaming | </p>
			  </div>
			  <div className="flex-none">
			    <ul className="flex flex-col lg:flex-row gap-1 menu menu-horizontal px-1 justify-center">
			    	<NavLink to="/">Home</NavLink>
			    	<NavLink to="/blogs">Blogs</NavLink>
			    	<NavLink to="/alltoys">All Toys</NavLink>
			    	<NavLink to="/login">Log In</NavLink>
			    	<NavLink to="/register">Register</NavLink>
			    </ul>
			  </div>
			</div>


		</div>
	);
};

export default Header;
