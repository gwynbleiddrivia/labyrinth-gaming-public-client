import {useParams, useLoaderData} from 'react-router-dom'

const ToyDetails = () => {
	const {idParam} = useParams()
	const details = useLoaderData({idParam})
	console.log(details)
	const {toyphoto, toyname, sellername, selleremail, rating, toyprice, quantity, description} = details[0]
	console.log(details?.length, 'from ToyDetails')
	return (
		<div className="flex flex-col align-items text-start">
			<h2 className="text-start text-5xl mb-4">{toyname}</h2>
			<img src={toyphoto} alt="" className="w-10/12 mb-8 mx-auto rounded"/>
			<p className="text-2xl text-start">
			<span className="text-4xl">Seller Name: </span>
			{sellername}
			</p>
			<p className="text-2xl text-start">
			<span className="text-4xl">Seller Email: </span>
			{selleremail}
			</p>
			<p className="text-2xl text-start">
			<span className="text-4xl">Rating: </span>
			{rating}
			</p>
			<p className="text-2xl text-start">
			<span className="text-4xl">Price: </span>
			{toyprice}
			</p>
			<p className="text-2xl text-start">
			<span className="text-4xl">Description: </span>
			{description}
			</p>
		 

		</div>
	);
};

export default ToyDetails;
