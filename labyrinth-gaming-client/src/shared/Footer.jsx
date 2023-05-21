import React from 'react'

const Footer = () => {
	return (
		<div className="backdrop-opacity-10 backdrop-invert p-8 mt-10">
			<div className="flex flex-col">
				          <div className="flex flex-col gap-4 mt-10">
                                                <input type="email" className="p-4 rounded-xl w-fit m-auto"                  placeholder="Enter email "/>                                                             
                                                <button className="btn btn-success w-fit m-auto">Register to receive our newsletter!</button>                                                                                                                 
                                         </div>
					 <div className="flex justify-between mt-10 mb-10">
						<div className="flex flex-col text-start">
							<img src="https://i.ibb.co/PQCRSk2/editlogo.png" alt="" className="w-24 h-24"/>
							<h2 className="text-2xl">Labyrinth Gaming</h2>
						</div>
						<div className="m-auto flex flex-col">
							<h1 className="uppercase mb-2">Contacts</h1>
							<small>231/P, Dunder Mifflin,</small>
							<small>Under Arkham Perfecture,</small>
							<small>12, Hogwarts,</small>
							<small>Titan University</small>
						</div>
						<div className="m-auto flex flex-col">
							<h1 className="uppercase mb-2">Social</h1>
							<small>Facebook</small>
							<small>Twitter</small>
						</div>

					 </div>
					 <p>© All Rights Recerved  </p>


			</div>
			



		</div>
	);
};

export default Footer;
