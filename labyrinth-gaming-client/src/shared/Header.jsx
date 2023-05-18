import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className="navbar bg-emerald-950 flex-col lg:flex-row justify-between pt-0 pb-0">
			  <div className="flex">
			    <Link to="/" className="w-1/5">
				<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className=""/>
			    </Link>
			    <p className="text-xl">Labyrinth Gaming | </p>
			  </div>
			  <div className="flex-none">
			    <ul className="flex flex-col lg:flex-row gap-3 mr-2 menu menu-horizontal px-1 justify-center">
			    	<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Home</NavLink>
			    	<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Home</NavLink>
			    	<NavLink to="/blogs" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Blogs</NavLink>
			    	<NavLink to="/alltoys" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>All Toys</NavLink>
			    	<NavLink to="/login" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Log In</NavLink>
			    	<NavLink to="/register" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Register</NavLink>
			    </ul>
			  </div>
			</div>


		</div>
	);
};

export default Header;
