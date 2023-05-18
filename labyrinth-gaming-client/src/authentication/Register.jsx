import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {

        const handleRegister = event =>{
                event.preventDefault()
                const email = event.target.email.value
                const password = event.target.password.value
                console.log(email)


        }



	return (
		<div>
                        <div className="hero min-h-screen">                                              
                                  <div className="hero-content flex-col">

                                    <div className="text-center lg:text-left">
                                      <h1 className="text-2xl font-bold">Register here...</h1>
                                      <p className="">to create an account</p>
                                    </div>
                                    <div className="card p-0 w-full text-white">
                                      <form className="card-body p-0" onSubmit={handleRegister}>
                                        <div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Name</span>
                                          </label>
                                          <input type="text" placeholder="Your name" name="username" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
                                        </div>
					<div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Photo URL</span>
                                          </label>
                                          <input type="text" placeholder="Photo" name="photo" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
                                        </div>
					<div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" name="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white" required/>
                                        </div>
                                        <div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Password</span>
                                          </label>
                                          <input type="password" placeholder="password" name="password"  className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white" required/>
                                        </div>
                                        <div className="form-control mt-6">
                                          <button className="btn btn-success">Login</button>
                                        </div>
                                        <small className="mt-10">
                                        <Link to="/register" className="hover:underline">Don't have an   account? Click here to register</Link>
                                        </small>
                                      </form>
                                   </div>

                                  </div>
                                </div>


		</div>
	);
};

export default Register;
