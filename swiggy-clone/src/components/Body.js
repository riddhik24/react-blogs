import RestuarantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState(resList);

  //other ways to use useState -- also known as array destructuring
  // const res = useState()
  // const listOfRestuarants = res[0]
  // const setListOfRestuarants = res[1]
  return (
    <div className="body">
      <div className="top">
        <div className="search">
          <input type="text" id="search" />
          <button className="search_button" id="search_button">
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filterbtn"
            onClick={() => {
              const filteredRestuarants = listOfRestuarants.filter(
                (res) => res.rating > 4
              );

              setListOfRestuarants(filteredRestuarants);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {resList &&
          listOfRestuarants.map((res, index) => (
            <RestuarantCard key={index} resData={res} />
          ))}
      </div>
    </div>
  );
};

export default Body;
