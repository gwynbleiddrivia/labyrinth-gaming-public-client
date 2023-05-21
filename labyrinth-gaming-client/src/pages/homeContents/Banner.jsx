import APS from 'aos'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom'


const Banner = () => {
	return (
		<div className="relative">
			<div className="">

				<img src="https://i.ibb.co/HHjLkm8/Gaming2.jpg" alt="" className="rounded-xl"/>
				<div className="pt-10 pl-10 absolute top-0 left-0 h-full text-black rounded-xl bg-gradient-to-r from-[#3F3F3F] to=[#F6F6F6]">
					<h2 className="text-7xl mb-5">Welcome to <span className="text-emerald-950">Labyrinth Gaming</span>!</h2>
					<div className="flex gap-4 mb-5" data-aos="slide-right" data-aos-duration="800">

						<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className="w-24 h-24"/>
						<div className="flex">

							<div className="border-r border-emerald-950"></div>
							<div className="border-r border-emerald-950"></div>
							<div className="border-r border-emerald-950"></div>
							<div className="border-r border-emerald-950"></div>
							<div className="border-r border-emerald-950"></div>
						</div>
						<small className="text-start font-semibold">Enter the Labyrinth Gaming world: <br/>Unleash your strategic prowess, unravel mind-bending puzzles,<br/> and immerse yourself in thrilling board game adventures.<br/> Explore a maze of entertainment, where every move counts.<br/> Challenge your wits, conquer the labyrinth, and let the games begin!<br/> Welcome to Labyrinth Gaming: Your gateway to endless fun!</small>

					</div>
					<div className="text-start">
						<Link to='/alltoys'>
						<button className="btn btn-success">See Our Toys</button>
						</Link>


					</div>
								</div>

			</div>
		</div>
	);
};

export default Banner;
