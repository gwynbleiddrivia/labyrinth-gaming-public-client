import React from 'react'

const Login = () => {
	return (
		<div>
				<div className="hero min-h-screen">
				  <div className="hero-content flex-col">

				    <div className="text-center lg:text-left">
				      <h1 className="text-2xl font-bold">Login from here...</h1>
				      <p className="">to get more access to your contents</p>
				    </div>
				    <div className="card p-0 w-full text-white">
				      <form className="card-body p-0">
					<div className="form-control">
					  <label className="label">
					    <span className="label-text text-white">Email</span>
					  </label>
					  <input type="text" placeholder="email" className="input input-bordered" />
					</div>
					<div className="form-control">
					  <label className="label">
					    <span className="label-text text-white">Password</span>
					  </label>
					  <input type="text" placeholder="password" className="input input-bordered" />
					  <label className="label">
					    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
					  </label>
					</div>
					<div className="form-control mt-6">
					  <button className="btn btn-success">Login</button>
					</div>
				      </form>
				   </div>

				  </div>
				</div>
		</div>
	);
};

export default Login;
