import { RES_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.resData.info;
  const { deliveryTime } = props.resData.info.sla;

  return (
    <div className="m-6 p-4 h-[450px] w-[250px] bg-gray-100 rounded-lg items-center hover:bg-gray-400">
      <img
        className="rounded-md"
        alt="res-image"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>
        ⭐{avgRating} • <b>{deliveryTime} mins</b>
      </h4>
      <h4>{cuisines.join(", ")}</h4>
      <h5 className="font-bold"> {costForTwo}</h5>
    </div>
  );
};

export const pureVegLabel = (RestuarantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-200 m-2 p-2 text-white rounded-lg">
          Pure Veg
        </label>
        <RestuarantCard {...props} />
      </div>
    );
  };
};

export default RestuarantCard;
