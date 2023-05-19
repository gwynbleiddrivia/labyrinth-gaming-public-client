import React, {useContext} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {AuthContext} from '../authentication/AuthProvider.jsx'


const Header = () => {
	const {user, logOut} = useContext(AuthContext)
	const handleLogout = () =>{
		logOut()
		.then(()=>{})
		.catch(console.log(error))
	}
	return (
		<div>
			<div className="navbar bg-emerald-950 flex-col lg:flex-row justify-between pt-0 pb-0">
			  <div className="flex">
			    <Link to="/" className="w-1/5">
				<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className=""/>
			    </Link>
			    <p className="text-xl">Labyrinth Gaming | </p>
			  </div>
			  <div className="flex flex-col">
			  <div className="flex-none">
			    <ul className="flex flex-col lg:flex-row gap-3 mr-2 menu menu-horizontal px-1 justify-center">
			    	<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Home</NavLink>
			    	<NavLink to="/blogs" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Blogs</NavLink>
			    	<NavLink to="/alltoys" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>All Toys</NavLink>
				<NavLink to="/mytoys" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>My Toys</NavLink>
				<NavLink to="/addtoy" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Add A Toy</NavLink>
			    
			    {
			    user?
			    	<>
				<img className ="w-12 h-12 rounded"
				title={
				user.name?
				user.name:
				"Name not registered"
				}
				src={
				user.photo?
				user.photo:
				"https://i.ibb.co/LnyGbJ6/usernotfound.jpg"
				}
				/>

				</>:
				<>
				</>
			    }

			    </ul>
			  </div>
			 

			</div>
					</div>
	        <div className="text-end">
				{
				user?
				<div className="flex flex-col lg:flex-row-reverse lg:gap-24">
				<Link className="hover:underline text-xs" onClick={logOut}>Log Out</Link>
				<p className="text-xs">{user.email}</p>
				</div>:
				<div className="flex flex-col lg:flex-row-reverse lg:gap-12">
			    	<NavLink to="/register" className={({ isActive }) =>isActive ? "text-success hover:underline text-xs" : "hover:underline text-xs"}>No account yet? Register here!</NavLink>
				<NavLink to="/login" className={({ isActive }) =>isActive ? "text-success hover:underline text-xs" : "hover:underline text-xs"}>Log In</NavLink>
				</div>
				}
			  </div>
			  <div className="flex-grow border-t border-emerald-950"></div>
			  <div className="flex-grow border-t border-emerald-950"></div>
			  <div className="flex-grow border-t border-emerald-950"></div>

		</div>
	);
};

export default Header;
