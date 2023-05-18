import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;
