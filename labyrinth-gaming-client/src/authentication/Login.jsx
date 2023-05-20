import React, {useContext, useState} from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import app from './firebase.config.js'
import {AuthContext} from './AuthProvider'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
	const [errorMsg, setErrorMsg] = useState("")
	const err = ""
	const {logIn, googleLogIn, loading} = useContext(AuthContext)

{/*Redirection from and to private routes handler*/}	
	const location = useLocation()
	const navigate = useNavigate()
	const from = location.state?.from?.pathname || "/"




{/*email authentificated login handler*/}	
	const handleLogin = event =>{
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		console.log(email)
		
		logIn(email, password)
		.then(result=>{
			console.log(result.user)
			navigate(from,{replace:true})
		})
		.catch(error=>{
			console.log(error)
			if(error){
				setErrorMsg("This user is not created yet. Please register first")
			}
		})
		
	}
{/*google authentificated login handler*/}	
	
	const handleGoogleLogIn = () =>{
		googleLogIn()
		.then(result=>{
			console.log(result.user)
			result.user['name'] = result.user.displayName				
			navigate(from,{replace:true})
		})
		.catch(error=>console.log(error.message))
	}



	console.log(app._options.apiKey)

	return (
		<div>
		{
		loading?
		<button className="btn loading">loading</button>
		:
		<>
			<div className="hero min-h-screen">
				  <div className="hero-content flex-col">

				    <div className="text-center lg:text-left">
				      <h1 className="text-2xl font-bold">Login from here...</h1>
				      <small className="">to get more access to your contents, <br/>to see all toys, your toys, toy details <br/> and to add a toy</small>
				    </div>
				    <div className="card p-0 w-full text-white">
				      <form className="card-body p-0" onSubmit={handleLogin}>
					<div className="form-control">
					  <label className="label">
					    <span className="label-text text-white">Email</span>
					  </label>
					  <input type="email" placeholder="Your email" name="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required/>
					</div>
					<div className="form-control">
					  <label className="label">
					    <span className="label-text text-white">Password</span>
					  </label>
					  <input type="password" placeholder="Your password" name="password" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus:bg-transparent fill-transparent focus:text-white border border-white" required/>
					</div>
					<div className="form-control mt-6">
					  <button className="btn btn-success">Login</button>
					</div>
					<div className="form-control mt-6">
					  <button className="btn btn-accent flex justify-between" onClick={handleGoogleLogIn}>Login from Google <FaGoogle/></button>
					</div>
					<p className="text-warning">{errorMsg}</p>
					<small className="mt-10">
					<Link to="/register" className="hover:underline">Don't have an account? Click here to register</Link>
					</small>
				      </form>
				   </div>

				  </div>
				</div>
		</>
		}
		</div>
	);
};

export default Login;
