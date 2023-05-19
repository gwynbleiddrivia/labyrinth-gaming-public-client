import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
	return (
		<div className="flex justify-around">
			<p className="text-7xl my-auto">404 Error! </p>
			<img className="w-fit m-auto" src="https://i.ibb.co/CHqyV0V/400.png" alt=""/>
			<div className="my-auto">
			<p className="mb-3">Ooops, you seem to be lost in labyrinth.</p>
			<p> Let's go <Link to="/"> <button className="btn btn-bordered border-white bg-transparent mx-1">Home</button> </Link> to find ourselves.</p>
			</div>
			<div className="">

			</div>
				</div>
	);
};

export default ErrorPage;
