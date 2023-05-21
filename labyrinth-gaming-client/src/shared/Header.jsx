import React, {useContext, useState, useEffect} from 'react'
import {NavLink, Link, useLocation} from 'react-router-dom'
import {AuthContext} from '../authentication/AuthProvider.jsx'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'


const Header = () => {
	const {user, logOut} = useContext(AuthContext)
	
	const [currentUser, setCurrentUser] = useState([])
	const url = `https://labyrinth-gaming-server.vercel.app/users?email=${user?.email}`
	useEffect(()=>{
	fetch(url)
	.then(res=>res.json())
	.then(data=>{
		console.log(data,"data from Header")
		setCurrentUser(data)
	})
	},[user])
	console.log(currentUser?.length,"currentUser from Header")


	const handleLogout = () =>{
		logOut()
		.then(()=>{})
		.catch(console.log(error))
	}
	const location = useLocation()
	var locName = ""
	if(location.pathname === "/"){
		locName = "Home"
	}
	if(location.pathname === "/blogs"){
		locName = "Blogs"
	}
	if(location.pathname === "/alltoys"){
		locName = "All Toys"
	}
	if(location.pathname === "/mytoys"){
		locName = "My Toys"
	}
	if(location.pathname === "/addtoy"){
		locName = "Add A Toy"
	}
	if(location.pathname === "/login"){
		locName = "Login"
	}
	if(location.pathname === "/register"){
		locName = "Register"
	}
	if(location.pathname.includes("/toydetails")){
		locName = "Toy Details"
	}
	console.log(locName)
	return (
		<div className="mb-4">
			<div className="navbar bg-emerald-950 flex-col lg:flex-row justify-between pt-0 pb-0">
			  <div className="flex">
			    <Link to="/" className="w-1/5">
				<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className=""/>
			    </Link>
			    <p className="text-xl">Labyrinth Gaming | {locName} </p>
			  </div>
			  <div className="flex flex-col">
			  <div className="flex-none">
			    <ul className="flex flex-col lg:flex-row gap-3 mr-2 menu menu-horizontal px-1 justify-center">
			    	<NavLink to="/" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Home</NavLink>
			    	<NavLink to="/blogs" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>Blogs</NavLink>
			    	<NavLink to="/alltoys" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>All Toys</NavLink>
				<NavLink to="/mytoys" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>          <button className="uppercase" onClick={()=>{
					if(currentUser?.length < 1){
					new Swal('You cannot pass!',
						 'You have to login to view this content',
						 'warning')
					}
				}}> 
				My Toys
				</button>

				</NavLink>
				<NavLink to="/addtoy" className={({ isActive }) =>isActive ? "btn btn-success" : "btn btn-ghost"}>

				
				<button className="uppercase" onClick={()=>{
					if(currentUser?.length < 1){
					new Swal('You cannot pass!',
						 'You have to log in to view this content',
						 'warning')
						 }
				}}>
				Add A Toy
				
				</button>  
				
				</NavLink>
			    
			    {
			    user?
			    	<>
				<img className ="w-12 h-12 rounded"
				title={
				currentUser[0]?.userName?
				currentUser[0]?.userName:
				"Name not registered"
				}
				src={
				currentUser[0]?.userPhoto?
				currentUser[0]?.userPhoto:
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
