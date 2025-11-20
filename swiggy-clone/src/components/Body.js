import Loading from "./Loading";
import RestuarantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestuarants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional rendering - 1
  // if(listOfRestuarants === 0){
  //   return <Shimmer />
  // }
  return (
    <div className="body">
      <div className="top">
        <div className="search">
          <input
            type="text"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search_button"
            id="search_button"
            onClick={() => {
              const filteredRestuarants = listOfRestuarants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarants(filteredRestuarants);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filterbtn"
            onClick={() => {
              const filteredRestuarants = listOfRestuarants.filter(
                (res) => res?.info?.avgRating > 4
              );

              setListOfRestuarants(filteredRestuarants);
            }}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="res-container">
        {/* Conditinal Rendering - 2 - ternary operator*/}
        {filteredRestuarants?.length > 0 ? (
          filteredRestuarants?.map((res, index) => (
            <RestuarantCard key={res.info.id} resData={res} />
          ))
        ) : (
          // <Loading message="Loading Restaurants" />
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
