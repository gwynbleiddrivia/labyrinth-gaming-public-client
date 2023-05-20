import React, {useEffect, useState} from 'react'
import {useLoaderData} from 'react-router-dom'



const AllToys = () => {
	const allToys = useLoaderData()
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
		setLoadedToys(queriedToys)
	}
	return (
		<div className="m-auto w-fit flex flex-col gap-5">
			          
				<form className="form-control" onSubmit={handleSearch}>
				  <div className="input-group">
				    <input type="text" name="query" placeholder="Search by toy name" className="input input-bordered" />
				    <button className="btn btn-square">
				      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
				    </button>
				  </div>
				</form>


				  <div className="grid grid-cols-5 gap-11 align-items text-start border-t p-4 ">

							<p className="col-span-2">Toy Name</p> 	
							<p className="col-start-3 col-span-2">Seller Name</p>	
							<p className="col-start-5 col-span-2">Sub Category</p>	
							<p className="col-start-7 col-span-2"> Price</p>	
							<p className="col-start-9 col-span-2">Quantity</p>	
							<img src="https://i.ibb.co/qpzVYYX/dice.gif" alt="" className="w-16 h-12 col-start-11"/>

			
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex-grow border-t border-white"></div>
					<div className="flex-grow border-t border-white"></div>
				</div>
			{loadedToys.map(toy=>{
				return <div key={toy._id} className="grid grid-cols-5 gap-10 align-items text-start border rounded p-3">

							<p className="col-span-2">{toy.toyname}</p> 	
							<p className="col-start-3 col-span-2">{toy.sellername}</p>	
							<p className="col-start-5 col-span-2">{toy.subcategory}</p>	
							<p className="col-start-7 col-span-2">{toy.toyprice}</p>	
							<p className="col-start-9 col-span-2">{toy.quantity}</p>	
							<button className="col-start-11 p-2 btn-success rounded">View More</button>


			
				</div> 
			})}
			
			<button onClick={loadAll} className={`rounded-lg btn-success w-fit p-3 mx-auto ${!boolVal ? 'hidden':''} `}>Click here to load more</button>
			<button onClick={load20} className={`rounded-lg btn-success w-fit p-3 mx-auto ${!boolVal ? '':'hidden'} `}>Click to see only 20 toys</button>
		</div>
	);
};

export default AllToys;
