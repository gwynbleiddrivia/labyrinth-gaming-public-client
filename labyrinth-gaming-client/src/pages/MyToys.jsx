import React, {useEffect, useState, useContext} from 'react'
import { Link} from 'react-router-dom'
import {AuthContext} from '../authentication/AuthProvider.jsx'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'


const MyToys = () => {
		const {user} = useContext(AuthContext)
		const [sellerToys, setSellerToys] = useState([])
		const [url, setUrl]  = useState(`https://labyrinth-gaming-server.vercel.app/toys?email=${user?.email}`)
		const handleAscending = event =>{
			 setUrl(`https://labyrinth-gaming-server.vercel.app/toys?email=${user?.email}&ascended=true`)
	              

		}
		const handleDescending = ()=>{
			setUrl(`https://labyrinth-gaming-server.vercel.app/toys?email=${user?.email}&descended=true`)
		}
		const handleRemove = ()=>{
			setUrl(`https://labyrinth-gaming-server.vercel.app/toys?email=${user?.email}`)
		}
		const handleDelete = (_id) =>{
			console.log(_id)
			Swal.fire({
				  title: 'Are you sure you want to delete this entry?',
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
				  	console.log('confirmed, flagged for deletion')
					fetch(`https://labyrinth-gaming-server.vercel.app/toys/${_id}`,{
						method: 'DELETE'
					})
					.then(res=>res.json())
					.then(data=>{
						if(data.deletedCount>0){
				    			Swal.fire('Entry deleted!', '', 'success')
							const remainingToys = loadedToys.filter(loadedToy=>loadedToy._id!=_id)
							setLoadedToys(remainingToys)
						}
					})
				  }
				  else if (result.isDenied) {
				    Swal.fire('Entry is not deleted', '', 'info')
				  }
				})
			handleRemove()

		}

		useEffect(()=>{
			fetch(url)
			.then(res=>res.json())
			.then(data=>{
				console.log(data, "data from my toys")
				setSellerToys(data)
			})
		},[url])

		const allToys = sellerToys
		const t20Toys = allToys.slice(0,20)
		console.log(allToys)

		const [boolVal, setBoolVal] = useState(true)
		const [loadedToys, setLoadedToys] = useState([])
		useEffect(()=>{
			setLoadedToys(t20Toys)
		},[allToys])
		const loadAll = () =>{
			setLoadedToys(allToys)
			setBoolVal(!boolVal)
		}
		const load20 = () =>{
			setLoadedToys(t20Toys)
			setBoolVal(!boolVal)
		}
		const handleSearch = event =>{
			event.preventDefault()
			const form = event.target
			const query = form.query.value
			const queriedToys = allToys.filter(toy=>toy.toyname==query)
		if(query==""){
                        setLoadedToys(allToys)
                	}
                else{
                        setLoadedToys(queriedToys)
                	}
		}
		return (
			<div className="m-auto w-fit flex flex-col gap-5">
					<div className="flex justify-around">

					<form className="form-control" onSubmit={handleSearch}>
					  <div className="input-group">
					    <input type="text" name="query" defaultValue="" placeholder="Search by toy name" className="input input-bordered" />
					    <button className="btn btn-square">
					      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
					    </button>
					  </div>
					</form>

					<button onClick={handleAscending} className="btn w-fit">sort by ascending prices</button>
					<button onClick={handleDescending} className="btn w-fit">sort by descending prices</button>
					<button onClick={handleRemove} className="btn w-fit">remove sort</button>




					</div>
				
					  <div className="text-start border-t p-3 flex">

								<p className="mr-24">Toy <br/>Name</p> 	
								<p className="mr-24">Photo <br/>URL</p>	
								<p className="mr-16">Sub<br/>Category</p>	
								<p className="mr-24"> Price</p>	
								<p className="mr-20"> Rating</p>	
								<p className="mr-8">Quantity</p>	
								<p className="mr-8">Description</p>	
								<img src="https://i.ibb.co/qpzVYYX/dice.gif" alt="" className="w-16 h-12 mr-16"/>
								<img src="https://i.ibb.co/ykGR5Cx/dnd.gif" alt="" className="w-16 h-12"/>

				
					</div>
					<div className="flex flex-col gap-2">
						<div className="flex-grow border-t border-white"></div>
						<div className="flex-grow border-t border-white"></div>
					</div>
				{loadedToys.map(toy=>{
					return <div key={toy._id} className="grid grid-cols-5 gap-12 align-items text-start border rounded p-3">

								<p className="col-span-1">{toy.toyname}</p> 	
								<p className="col-start-2 col-span-1 underline hover:text-emerald-200"><a target='_blank' href={toy.toyphoto}>image link</a></p>
								<p className="col-start-3 col-span-1">{toy.subcategory}</p>	
								<p className="col-start-4 col-span-1">{toy.toyprice}</p>	
								<p className="col-start-5 col-span-1">{toy.rating}</p>	
								<p className="col-start-6 col-span-1">{toy.quantity}</p>	
								<button className="col-start-7 col-span-1 w-fit border border-white rounded p-2" title={toy.description}>Hover here</button>	
								<Link to={`/updatetoyinfo/${toy._id}`} className="col-start-8 col-span-1">
								<button className="btn-warning rounded p-2 text-center">Update</button>
								</Link>
								<button onClick={()=>handleDelete(toy._id)} className="btn-error rounded p-2 text-center col-start-9">Delete</button>



				
					</div> 
				})}
				{
					(allToys.length > 20) ?
					<>
						<button onClick={loadAll} className={`rounded-lg btn-success w-fit p-3 mx-auto ${!boolVal ? 'hidden':''} `}>Load more</button>
						<button onClick={load20} className={`rounded-lg btn-success w-fit p-3 mx-auto ${!boolVal ? '':'hidden'} `}>See Less</button>

					</>:
					<></>
				}
						</div>
		);








};

export default MyToys;
