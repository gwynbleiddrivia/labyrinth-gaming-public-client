import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import app from './firebase.config.js'
import {AuthContext} from './AuthProvider'

const Login = () => {
	const {logIn} = useContext(AuthContext)
	const handleLogin = event =>{
		event.preventDefault()
		const email = event.target.email.value
		const password = event.target.password.value
		console.log(email)
		
		logIn(email, password)
		.then(result=>{
			console.log(result.user)
		})
		.catch(error=>{
			console.log(error,message)
		})
		
	}
	console.log(app._options.apiKey)

	return (
		<div>
			<div className="hero min-h-screen">
				  <div className="hero-content flex-col">

				    <div className="text-center lg:text-left">
				      <h1 className="text-2xl font-bold">Login from here...</h1>
				      <p className="">to get more access to your contents</p>
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
					<small className="mt-10">
					<Link to="/register" className="hover:underline">Don't have an account? Click here to register</Link>
					</small>
				      </form>
				   </div>

				  </div>
				</div>
		</div>
	);
};

export default Login;
