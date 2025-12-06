import RestuarantCard, { pureVegLabel, pureVegLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestuarants, setListOfRestuarants] = useState([]);
  const [filteredRestuarants, setFilteredRestuarants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PureVegLabel = pureVegLabel(RestuarantCard);
  const { loggedInUser, setName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    setListOfRestuarants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestuarants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return (
    <div className="body">
      <div className="top flex justify-between">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid rounded-lg m-2 px-4 h-9"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 rounded-xl bg-green-100 cursor-pointer"
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

          <input
            type="text"
            className="border border-solid rounded-lg m-2 px-4 h-9"
            id="search"
            value={loggedInUser}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="filter m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 rounded-xl bg-orange-200 cursor-pointer"
            onClick={() => {
              const filteredRestuarants = listOfRestuarants.filter(
                (res) => res?.info?.avgRating > 4.5
              );
              setFilteredRestuarants(filteredRestuarants);
            }}
          >
            High Rating Restaurants
          </button>
          <button
            className="px-4 mx-2 py-2 rounded-xl cursor-pointer bg-green-200"
            onClick={() => {
              const filteredRestuarants = listOfRestuarants.filter(
                (res) => res?.info?.veg == true
              );
              setFilteredRestuarants(filteredRestuarants);
            }}
          >
            Show Veg Only
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {filteredRestuarants?.length > 0 ? (
          filteredRestuarants?.map((res) => (
            <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
              {res.info.veg ? (
                <PureVegLabel resData={res} />
              ) : (
                <RestuarantCard resData={res} />
              )}
            </Link>
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
