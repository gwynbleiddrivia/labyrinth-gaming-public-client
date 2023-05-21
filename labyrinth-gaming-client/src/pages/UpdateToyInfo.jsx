import {useParams, useLoaderData} from 'react-router-dom'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const UpdateToyInfo = () => {
	const {idParam} = useParams()
	const details = useLoaderData({idParam})
	console.log(details,"data from updateinfo")

	const handleUpdate = event =>{
		event.preventDefault()
		const form = event.target
		const toyprice = form.toyprice.value
		const quantity = form.quantity.value
		const description = form.description.value

		const updateToy = {toyprice, quantity, description}
		console.log(updateToy)
		
		Swal.fire({
		  title: 'Are you sure you want to save the update you made?',
		  showDenyButton: true,
		  showCancelButton: true,
		  confirmButtonText: 'Yes',
		  denyButtonText: 'No',
		  customClass: {
		    actions: 'my-actions',
		    cancelButton: 'order-1 right-gap',
		    confirmButton: 'order-2',
		    denyButton: 'order-3',
		  }
		}).then((result) => {
		  if (result.isConfirmed) {
		
		{/*
			fetch(`http://localhost:5000/toys/${details[0]._id}`,{
		*/}	

			fetch(`https://labyrinth-gaming-server.vercel.app/toys/${details[0]._id}`,{
						method: 'PUT',
				headers:{
					'content-type' : 'application/json'
				},
				body:JSON.stringify(updateToy)
			})
			.then(res=>res.json())
			.then(data=>{
				console.log(data)
				if(data.modifiedCount>0){
					console.log('toy info updated successfully')
		    			Swal.fire('Saved!', '', 'success')
				}
			})

	    



		  } else if (result.isDenied) {
		    Swal.fire('Changes are not saved', '', 'info')
		  }
		})




	}
	return (
		<div>
				<form className="card-body p-0 flex flex-col" onSubmit={handleUpdate}>
				  

					




					<div className="third-div flex justify-around">
      				
							<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Price</span>
							  </label>
							  <input type="text" placeholder="Toy Price" size="30" name="toyprice" defaultValue={details[0].toyprice} className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>
										<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Available Quantity</span>
							  </label>
							  <input type="text" placeholder="quantity" name="quantity" size="30" defaultValue={details[0].quantity} className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white"/>
							</div>





					</div>







					<div className="fourth-div">
						<div className="form-control">
							  <label className="label">
							    <span className="label-text text-white">Detail Description</span>
							  </label>
							  <textarea defaultValue={details[0].description} className="input input-ghost input-bordered text-white active:bg-transparent hover:bg-transparent focus: bg-transparent focus:text-white border border-white p-4" placeholder="Provide detail description here" name="description" cols="50" rows="10" size="10"></textarea>
							</div>




					</div>
                                        <div className="form-control mt-6">
                                          <button className="btn btn-success w-fit mx-auto">Click here to update</button>
                                        </div>
                             </form>

		</div>
	);
};

export default UpdateToyInfo;
