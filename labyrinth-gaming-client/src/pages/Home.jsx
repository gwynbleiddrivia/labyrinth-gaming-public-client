import React from 'react'
import Banner from './homeContents/Banner.jsx'
import ShopByCategory from './homeContents/ShopByCategory.jsx'
import Gallery from './homeContents/Gallery.jsx'
import ExtraFirst from './homeContents/ExtraFirst.jsx'
import ExtraSecond from './homeContents/ExtraSecond.jsx'

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ShopByCategory></ShopByCategory>
			<Gallery></Gallery>
			<ExtraFirst></ExtraFirst>
			<ExtraSecond></ExtraSecond>

		</div>
	);
};

export default Home;
