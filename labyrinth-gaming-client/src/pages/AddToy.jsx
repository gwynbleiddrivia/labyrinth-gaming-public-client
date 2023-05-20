import {Link} from 'react-router-dom'
import {AuthContext} from '../authentication/AuthProvider.jsx'
import {useContext, useState, useEffect} from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const AddToy = () => {
	const {user} = useContext(AuthContext)
	console.log(user?.email)
	const url = `https://labyrinth-gaming-server.vercel.app/users?email=${user?.email}`
	const [currentUser, setCurrentUser] = useState([])
	useEffect(()=>{
		fetch(url)
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setCurrentUser(data)
		})
	},[user])
	console.log(currentUser[0])
	console.log(currentUser[0]?.userName)
	console.log(currentUser[0]?.userPhoto)
	console.log(user.email)

	const handleAddToy = event =>{
		event.preventDefault()
		const form = event.target
		const toyphoto = form.toyphoto.value
		const toyname = form.toyname.value
		const sellername = form.sellername.value
		const selleremail = form.selleremail.value
		const subcategory = form.subcategory.value
		const toyprice = form.toyprice.value
		const rating = form.rating.value
		const quantity = form.quantity.value
		const description = form.description.value
	
		const newToy = {toyphoto, toyname, sellername, selleremail, subcategory, toyprice, rating, quantity, description}
		console.log(newToy)
		fetch('https://labyrinth-gaming-server.vercel.app/toys',{
			method: 'POST',
			headers:{
				'content-type' : 'application/json'
			},
			body:JSON.stringify(newToy)
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			if(data.insertedId){
				console.log('toy added successfully')
				Swal.fire(
				  'Good job!',
           		          'Toy added successfully!',
  			  	  'success'
				)	
			}
		})

	}
	return (
		<div>
		                  <form onSubmit={handleAddToy} className="card-body p-0 flex flex-col">
				  	<div className="first-div flex justify-around">
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Picture URL for the toy</span>
							  </label>
							  <input type="text" placeholder="Picture URL" name="toyphoto" size="60" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Toy Name</span>
							  </label>
							  <input type="text" placeholder="Toy Name" name="toyname" size="30" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
						

					</div>



					<div className="second-div flex justify-around">

							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Seller Name</span>
							  </label>
							  <input type="text" placeholder="Seller Name" size="30" name="sellername" defaultValue={currentUser[0]?.userName} className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Seller Email</span>
							  </label>
							  <input type="text" placeholder="Seller Email" size="30" name="selleremail" defaultValue={user?.email} className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
					

					</div>






					<div className="third-div flex justify-around">
      							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Sub Category</span>
							  </label>
							  <input type="text" placeholder="subcategory name" size="30" name="subcategory" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>


							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Price</span>
							  </label>
							  <input type="text" placeholder="Toy Price" size="30" name="toyprice" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Rating</span>
							  </label>
							  <input type="text" placeholder="Rating" name="rating" size="30" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Available Quantity</span>
							  </label>
							  <input type="text" placeholder="quantity" name="quantity" size="30" defaultValue="" className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>





					</div>
				  	






					<div className="fourth-div">
						<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Detail Description</span>
							  </label>
							  <textarea className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white p-4" placeholder="Provide detail description here" name="description" cols="30" rows="10"></textarea>  
							</div>




					</div>
                                        <div className="form-control mt-6">
                                          <button className="btn btn-success w-fit mx-auto">Click here to Add This Toy</button>
                                        </div>
                             </form>


		</div>
	);
};

export default AddToy;
