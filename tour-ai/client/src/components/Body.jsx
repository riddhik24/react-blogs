import React, { useContext, useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelerList } from "../../utils/constants";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TripContext } from "../../utils/TripContext";
import useOnlineStatus from "../hooks/useOnlineStatus";

export const Body = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const onlineStatus = useOnlineStatus();

  console.log(onlineStatus);
  const { setTripDetails } = useContext(TripContext);
  const navigate = useNavigate();

  const onChangeHandler = (name, value) => {
    if (name == "noOfDays" && value > 5) {
      alert("Please enter Trip Days less than 5");
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   console.log(formData);
  const generateTrip = async () => {
    const { location, budget, people, noOfDays } = formData || {};

    if (!onlineStatus) {
      alert("Please check your internet connection and try again.");
      return;
    }
    const invalidDays = !noOfDays || noOfDays > 5;
    const missingData = !location || !budget || !people;
    if (invalidDays || missingData) {
      // setLoading(true);
      alert("Please fill all the details");
      return;
    } else {
      try {
        setLoading(true);
        // const message = "HIi"
        const data = await fetch("http://localhost:5000/api/iternary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ formData }),
        });

        const json = await data.json();
        setTripDetails(json);
        // console.log(json)
        setLoading(false);
        navigate("/trip-details");
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-5 px-5 mt-10">
      <div className="m-4">
        <h2 className="font-bold text-2xl">
          Tell us your travel prefrences🏕️🌴
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          Just provide some basic information, and our wellness recommender will
          generate a customized itinerary based on your preferences.
        </p>
      </div>
      <div className="mt-10 flex flex-col gap-10">
        <div className="mx-4">
          <h4 className="font-bold text-xl mb-2">
            What's destination of your choice?
          </h4>
          <Input
            type="text"
            placeholder="Ex: London"
            onChange={(e) => onChangeHandler("location", e.target.value)}
          />
        </div>
        <div className="mx-4">
          <h4 className="font-bold text-xl mb-2">
            How many days are you planning your trip?
          </h4>
          <Input
            type="number"
            placeholder="Ex: 3"
            onChange={(e) => onChangeHandler("noOfDays", +e.target.value)}
          />
        </div>
      </div>

      <div className="mx-4 my-10 font-medium">
        <h4 className="font-bold text-xl mb-2">What's your budget?</h4>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item) => (
            <div
              key={item.id}
              onClick={() => onChangeHandler("budget", item.title)}
              className={`p-4 border cursor-pointer rounded-lg 
                hover:shadow-lg
                ${formData?.budget == item.title && "shadow-lg border-black"}
                `}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4">
        <h4 className="font-bold text-xl mb-2">
          Who do you plan on traveling with on your next trip / adventure?
        </h4>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {SelectTravelerList.map((item) => (
            <div
              key={item.id}
              onClick={() => onChangeHandler("people", item.people)}
              className={`p-4 border cursor-pointer rounded-lg 
                hover:shadow-lg
                ${formData?.people == item.people && "shadow-lg border-black"}
                `}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mx-4 my-5 justify-end">
        {loading && (
          <h1 className="m-1 font-bold">
            Please wait while we generate itinerary for you.
          </h1>
        )}
        <Button
          className="bg-black text-white"
          disabled={loading}
          variant="outline"
          onClick={generateTrip}
        >
          {loading ? (
            <AiOutlineLoading className="h-7 w-7 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>
    </div>
  );
};
