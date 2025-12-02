import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(MENU_API_URL + resId);

  //     const json = await data.json();
  //     setResInfo(json.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
