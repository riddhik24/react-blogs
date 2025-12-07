import { Link } from 'react-router';
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50x] text-center mt-16">
        <span  className="text-[#f56551]">
        Discover Your Next Trip with AI:</span> Personalized Itineraries at
        Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">Your personal places recommender and trip planner creating custom itineraries tailored to your interests and budget.</p>


      <img src='/landing.svg' className='-mt-20' alt="placeholder"/>

      <Link to={'/create-trip'}>
      <Button className="mt-5 mb-5"> Get Started, It's Free </Button>
      </Link>
    </div>
  );
}

export default Hero;
