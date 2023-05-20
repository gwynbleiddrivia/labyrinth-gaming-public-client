import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from './AuthProvider'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const Register = () => {
	const {createUser} = useContext(AuthContext)
	const [error, setError] = useState("")
        const handleRegister = event =>{
                event.preventDefault()
                const userName = event.target.username.value
                const userPhoto = event.target.userphoto.value
                const email = event.target.email.value
                const password = event.target.password.value
		
		console.log(event.target,"eikhane")

		if (email===""){
			setError("Empty email or password field not allowed")
		}
		if (password===""){
			setError("Empty email or password field not allowed")
		}
		if (password!=="" && password.length<6){
			setError("Password length must be greater than 5")
		}

		createUser(email, password)
		.then(result=>{
			result.user.displayName = username
			result.user.photoURL = userphoto
		})
		.catch(error=>{
			console.log(error.message)
		})
		
		const newUser = {email, userName, userPhoto}
		fetch('https://labyrinth-gaming-server.vercel.app/users',{
			method: 'POST',
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(newUser)

		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.insertedId){
				console.log('success')
                              Swal.fire(
                                  'Welcome!',
                                  'Account created successfully!',
                                  'success'
                                )
			}
		}
		)


       }




	return (
		<div>
                        <div className="hero min-h-screen">                                              
                                  <div className="hero-content flex-col">

                                    <div className="text-center lg:text-left">
                                      <h1 className="text-2xl font-bold">Register here...</h1>
                                      <small className="">to create an account</small>
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
                                          <input type="text" placeholder="Photo" name="userphoto" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
                                        </div>
					<div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Email</span>
                                          </label>
                                          <input type="email" placeholder="email" name="email" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
                                        </div>
                                        <div className="form-control">
                                          <label className="label">
                                            <span className="label-text text-white">Password</span>
                                          </label>
                                          <input type="password" placeholder="password" name="password"  className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
                                        </div>
                                        <div className="form-control mt-6">
                                          <button className="btn btn-success">Register</button>
                                        </div>
                                        <small className="mt-10">
                                        <Link to="/register" className="hover:underline">Don't have an   account? Click here to register</Link>
                                        </small>
                                      </form>
				      
				     <h2 className="text-warning"> {error} </h2>
                                   </div>

                                  </div>
                                </div>


		</div>
	);
};

export default Register;
