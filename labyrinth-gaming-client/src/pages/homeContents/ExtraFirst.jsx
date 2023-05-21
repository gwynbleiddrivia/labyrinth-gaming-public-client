
const ExtraFirst = () => {
	return (
		<div className="mt-5">
						<h2 className="text-5xl mb-3">Choose Your Path!</h2>
			                 <div className="flex gap-4 mb-5 p-5 backdrop-opacity-10 backdrop-invert bg-white/10">        
				 <div className="flex flex-col">

					<h2 className="text-2xl mb-2">Game Enthusiast</h2>
				        <small className="text-start font-semibold">

Embark on a gaming journey like no other! Discover a treasure trove of board games and puzzles at Labyrinth Gaming. Dive into captivating gameplay, unlock new challenges, and elevate your gaming experience. Join us as a buyer and unlock a world of endless entertainment!
					</small> 
				        <div className="flex gap-4 mt-10">
                        			<input type="email" className="p-4 rounded-xl w-fit m-   auto" placeholder="Enter email "/>                                                         
						<button className="btn btn-success w-fit m-auto">Register<br/> to become a Buyer!</button>
               				 </div>

				 </div>
                                        
                                                <div className="flex">

                                                        <div className="border-r border-emerald-950"></div>
                                                        <div className="border-r border-emerald-950"></div>
                                                        <div className="border-r border-emerald-950"></div>
                                                        <div className="border-r border-emerald-950"></div>
                                                        <div className="border-r border-emerald-950"></div>
                                                </div>      


                                 <div className="flex flex-col">
					<h2 className="text-2xl mb-2">Wizard Vendor</h2>
                                        <small className="text-start font-semibold">
Calling all game enthusiasts and creators! Join Labyrinth Gaming as a seller and showcase your masterpieces to a vibrant community. Turn your passion into profit, connect with fellow gamers, and share your unique board games and puzzles with the world. Step into the spotlight and become a part of our creative labyrinth!
                                        </small> 
                                        <div className="flex gap-4 mt-10">
                                                <input type="email" className="p-4 rounded-xl w-fit m-   auto"                  placeholder="Enter email "/>                                                             
                                                <button className="btn btn-success w-fit m-auto">Register<br/> to become a      Seller!</button>
                                         </div>

                                 </div>



                                        </div>


		</div>
	);
};

export default ExtraFirst;
