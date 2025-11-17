import { RES_IMG_URL } from "../utils/constants";

const RestuarantCard = (props) => {
  // const { resData } = props; //destructuring
  const { name, cusines, rating, delTime, costForTwo } = props.resData; //destructuring
  // console.log(resData);
  return (
    <div className="res-card">
      <img className="res-image" alt="res-image" src={RES_IMG_URL} />
      <h3>{name}</h3>
      <h4>{cusines.join(", ")}</h4>
      <h4>₹{costForTwo / 100} for two</h4>
      <h5>{rating} stars</h5>
      <h5>{delTime} minutes</h5>
    </div>
  );
};

export default RestuarantCard;
