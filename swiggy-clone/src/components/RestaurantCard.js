import { RES_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.resData.info;
  const { deliveryTime } = props.resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="res-image"
        src={RES_IMG_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestuarantCard;
