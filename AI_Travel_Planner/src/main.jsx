import { GoogleOAuthProvider } from '@react-oauth/google'
import React, { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import App from './App.jsx'
import CreateTrip from './create-trip/index.jsx'
import Header from './components/custom/Header.jsx'
import './index.css'
// import MyTrips from './my-trips/index.jsx'
import Viewtrip from './view-trip/[tripId]/index.jsx'

const MyTrips = lazy(()=>import("./my-trips/index.jsx"))
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  },
  {
    path:'/view-trip/:tripId',
    element:<Viewtrip/>
  },
  {
    path:'/my-trips',
    element:<MyTrips/>
  }
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/>
    </GoogleOAuthProvider>
  </React.StrictMode>
)
