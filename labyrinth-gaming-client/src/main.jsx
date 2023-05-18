import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './layout/Main.jsx'
import App from './App.jsx'
import './index.css'


import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import AllToys from './pages/AllToys.jsx'
import Login from './authentication/Login.jsx'
import Register from './authentication/Register.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
	{
		path: "/",
		element: <Home></Home>
	},
	{
		path: "/blogs",
		element: <Blogs></Blogs>
	},
	{
		path: "/alltoys",
		element: <AllToys></AllToys>
	},
	{
		path: "/login",
		element: <Login></Login>
	},
	{
		path: "/register",
		element: <Register></Register>
	},
	
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="w-full mx-auto text-white">
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </div>
)
