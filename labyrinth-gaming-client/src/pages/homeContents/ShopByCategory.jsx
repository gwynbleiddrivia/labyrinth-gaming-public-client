import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../authentication/AuthProvider.jsx'
import 'react-tabs/style/react-tabs.css';
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import AOS from "aos"
import "aos/dist/aos.css"

const ShopByCategory = () => {
	const {user} = useContext(AuthContext)
	const [allData, setAllData] = useState([])
	useEffect(()=>{
		fetch('https://labyrinth-gaming-server.vercel.app/toys')
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setAllData(data)
		})
	},[])
	useEffect(()=>{
		AOS.init()
	},[])

	const chessLikeData = allData.filter(categoryData=>categoryData.subcategory=="ChessLike")
	const pointThrowData = allData.filter(categoryData=>categoryData.subcategory=="PointThrow")
	const puzzlesData = allData.filter(categoryData=>categoryData.subcategory=="Puzzles")
	const rpgData = allData.filter(categoryData=>categoryData.subcategory=="RPG")
	const tilesBasedData = allData.filter(categoryData=>categoryData.subcategory=="TilesBased")
	const funData = allData.filter(categoryData=>categoryData.subcategory=="Fun")
	
	return (
		<div data-aos="flip-up" data-aos-duration="400" className="mt-5">
			<h2 className="text-5xl mb-5">Shop by Category Here!!</h2>
			  <Tabs>
			    <TabList className="mx-auto">
			      <Tab>ChessLike</Tab>
			      <Tab>PointThrow</Tab>
			      <Tab>Puzzles</Tab>
			      <Tab>RPG</Tab>
			      <Tab>TilesBased</Tab>
			      <Tab>Fun</Tab>
			    </TabList>

			    <TabPanel>
			   
			   <div className="grid grid-cols-3 gap-10 m-10">
   {
				chessLikeData.map(chessLikeSingle=>{
					return <div key={chessLikeSingle._id} className="flex flex-col mx-auto justify-around align-items">
						<img src={chessLikeSingle.toyphoto} className="w-50 h-50 rounded" alt=""/>   
						<p className="text-start text-4xl mt-5">{chessLikeSingle.toyname}</p>
						<p className="text-start"><span className="text-2xl">Toy Price: </span>{chessLikeSingle.toyprice}</p>
						<p className="text-start"> <span className="text-2xl">Rating:</span>   {chessLikeSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${chessLikeSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



					</div>

				})

			      }

			    </div>
			   			    </TabPanel>
			    <TabPanel>
 
			   <div className="grid grid-cols-3 gap-10 m-10">
   {
				pointThrowData.map(pointThrowSingle=>{
					return <div key={pointThrowSingle._id} className="flex flex-col mx-auto justify-around align-items">
						<img src={pointThrowSingle.toyphoto} className="w-50 h-50 rounded" alt=""/>   
						<p className="text-start text-4xl mt-5">{pointThrowSingle.toyname}</p>
						<p className="text-start"><span className="text-2xl">Toy Price: </span>{pointThrowSingle.toyprice}</p>
						<p className="text-start"> <span className="text-2xl">Rating:</span>   {pointThrowSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${pointThrowSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



					</div>

				})

			      }

			    </div>




			    </TabPanel>
			    <TabPanel>
                           
			   <div className="grid grid-cols-3 gap-10 m-10">
   {
                                puzzlesData.map(puzzlesDataSingle=>{
                                        return <div key={puzzlesDataSingle._id} className="flex flex-col  mx-auto justify-around align-items">
                                                <img src={puzzlesDataSingle.toyphoto} className="w-50 h-  50 rounded" alt=""/>
                                                <p className="text-start text-4xl mt-                    5">{puzzlesDataSingle.toyname}</p>
                                                <p className="text-start"><span className="text-2xl">Toy Price: </span>{puzzlesDataSingle.toyprice}</p>
                                                <p className="text-start"> <span className="text-        2xl">Rating:</span>   {puzzlesDataSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${puzzlesDataSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



                                        </div>

                                })

                              }

                            </div>





			    </TabPanel>
			    <TabPanel>

                         
                           <div className="grid grid-cols-3 gap-10 m-10">
   {
                                rpgData.map(rpgDataSingle=>{
                                        return <div key={rpgDataSingle._id} className="flex flex-col mx-auto justify-around align-items">
                                                <img src={rpgDataSingle.toyphoto} className="w-50 h-50 rounded" alt=""/>
                                                <p className="text-start text-4xl mt-                    5">{rpgDataSingle.toyname}</p>
                                                <p className="text-start"><span className="text-2xl">Toy Price: </span>{rpgDataSingle.toyprice}</p>
                                                <p className="text-start"> <span className="text-        2xl">Rating:</span>   {rpgDataSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${rpgDataSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



                                        </div>

                                })

                              }

                            </div>












				
				</TabPanel>
			    <TabPanel>

                           <div className="grid grid-cols-3 gap-10 m-10">
   {
                                tilesBasedData.map(tilesBasedDataSingle=>{
                                        return <div key={tilesBasedDataSingle._id} className="flex flex-col mx-auto justify-around     align-items">
                                                <img src={tilesBasedDataSingle.toyphoto} className="w-50 h-50 rounded" alt=""/>
                                                <p className="text-start text-4xl mt-                    5">{tilesBasedDataSingle.     toyname}</p>
                                                <p className="text-start"><span className="text-2xl">Toy Price: </              span>{tilesBasedDataSingle.toyprice}</p>
                                                <p className="text-start"> <span className="text-        2xl">Rating:</span>    {tilesBasedDataSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${tilesBasedDataSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



                                        </div>

                                })

                              }

                            </div>





			    </TabPanel>
			    <TabPanel>
                           <div className="grid grid-cols-3 gap-10 m-10">
   {
                                funData.map(funDataSingle=>{
                                        return <div key={funDataSingle._id} className="flex flex-col mx-auto justify-    around     align-items">
                                                <img src={funDataSingle.toyphoto} className="w-50 h-50 rounded" alt=""/>
                                                <p className="text-start text-4xl mt-                                           5">{funDataSingle.     toyname}</p>
                                                <p className="text-start"><span className="text-2xl">Toy Price: </              span>{funDataSingle.toyprice}</p>
                                                <p className="text-start"> <span className="text-        2xl">Rating:</span>    {funDataSingle.rating}</p>

                                                        <Link to={
                                                        `/toydetails/${funDataSingle._id}`
                                                        } className="text-start mt-3">
                                                        <button onClick={()=>{
                                                        if( user?.providerData?.length !== 1){
                                                        new Swal('You cannot pass',
                                                        'Login to view this content',
                                                        'warning')
                                                        }
                                                        }} className="col-start-11 p-2 btn-success       rounded">View Details</button>
                                                        </Link>



                                        </div>

                                })

                              }

                            </div>

  




			    </TabPanel>
			  </Tabs>
		</div>
	);
};

export default ShopByCategory;
