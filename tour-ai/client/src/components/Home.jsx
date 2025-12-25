import React from 'react'
import { Button } from "@/components/ui/button"
import {Link} from 'react-router-dom'
import image from '../assets/image.png'
export const Home = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-5">
      <h1 className="font-extrabold text-[50px] text-center mt-5">
        <span  className="text-[#f56551]">
        Discover Your Next Trip with AI:</span> Personalized Itineraries at
        Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">Your personal places recommender and trip planner creating custom itineraries tailored to your interests and budget.</p>


      <img src={image} className='mt-2 rounded-xl w-300 h-140' alt="placeholder"/>

      <Link to={'/create-trip'}>
      <Button className="mt-5 mb-5"> Get Started, It's Free </Button>
      </Link>
    </div>
  )
}
