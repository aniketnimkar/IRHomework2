import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import Biography from './Pages/Biography'
import Records from './Pages/Records'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/biography',
    element: <Biography/>
  },
  {
    path: '/records',
    element: <Records/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)