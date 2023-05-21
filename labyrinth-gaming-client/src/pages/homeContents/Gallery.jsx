import {useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

const Gallery = () => {
	useEffect(()=>{
		AOS.init();
	},[])
	return (
		<div>
			<h2 className="text-5xl mb-5">Enjoy Our Wonderful Board Games Gallore</h2>
							
				<div className="carousel w-fit">
				  <div id="slide1" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/SRbxqv8/Gaming1.jpg" className="w-9/12 h-4/5 rounded mx-auto" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide4" className="btn btn-circle">❮</a> 
				      <a href="#slide2" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide2" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/Cv2Mbkh/Gaming3.jpg" className="w-9/12 h-4/5 rounded mx-auto" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide1" className="btn btn-circle">❮</a> 
				      <a href="#slide3" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide3" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/DCbwXP9/Gaming4.jpg" className="w-9/12 h-4/5 rounded mx-auto" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide2" className="btn btn-circle">❮</a> 
				      <a href="#slide4" className="btn btn-circle">❯</a>
				    </div>
				  </div> 
				  <div id="slide4" className="carousel-item relative w-full">
				    <img src="https://i.ibb.co/xmW5BRz/Gaming5.jpg" className="w-9/12 h-4/5 rounded mx-auto" />
				    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				      <a href="#slide3" className="btn btn-circle">❮</a> 
				      <a href="#slide1" className="btn btn-circle">❯</a>
				    </div>
				  </div>
				</div>






		</div>
	);
};

export default Gallery;
