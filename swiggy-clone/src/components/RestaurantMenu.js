import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const handleToggle = (index) => {
    if (index == showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-lg text-orange-500 font-bold">
        <u className="underline">{cuisines.join(", ")}</u> - {costForTwoMessage}
      </p>

      {/* categories in accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          data={category.card.card}
          key={index}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => handleToggle(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
