import React, { useContext } from "react";
import { TripContext } from "../../utils/TripContext";
import Itinerary from "./Itinerary";
import { Hotels } from "./Hotels";
import { useNavigate } from "react-router-dom";
export const TripDetails = () => {
  const { tripDetails } = useContext(TripContext);

  console.log(tripDetails);

  const travelPlan = tripDetails?.travelPlan;
  console.log(travelPlan);

  const navigate = useNavigate();
  if(!travelPlan){
    alert("Unable to create an itinerary at this moment. Please try again later");
    navigate('/create-trip');
    return;
  }
  return (
    <div className="m-4">
      <div className="m-4">
        <h1 className="font-bold mt-4 text-center text-4xl">
          {travelPlan?.location}
        </h1>
        <h2 className="font-bold mt-2">
          Duration:{" "}
          <span className="font-medium">{travelPlan?.durationDays} days</span>
        </h2>
        <h3 className="font-bold mt-2 max-w-350">
          Important notes to take:
          <span className="font-medium"> {travelPlan?.notes}</span>
        </h3>
      </div>

      <h1 className="mt-6 mx-4 font-bold text-2xl">Hotels</h1>
      {travelPlan?.hotelsOptions ? (
        <div className="m-4 flex">
          {travelPlan.hotelsOptions.map((item, index) => (
            <Hotels item={item} index={index} />
          ))}
        </div>
      ) : (
        <h1 className="text-center font-bold text-xl m-2">No Hotels Found</h1>
      )}

      <h1 className="mt-6 mx-4 font-bold text-2xl">Itinerary</h1>
      {travelPlan?.itinerary ? (
        <div className="m-4">
          {travelPlan?.itinerary.map((iter, index) => (
            <Itinerary iter={iter} index={index} />
          ))}
        </div>
      ) : (
        <h1 className="font-bold text-2xl text-center">No Iternary Found</h1>
      )}
    </div>
  );
};
