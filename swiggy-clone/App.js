import React from "react";
import { createRoot } from "react-dom/client";

// const jsx = <h1 id="heading">Hello JSX</h1>;

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src="https://www.psdtemplatedesign.com/wp-content/uploads/edd/2017/12/logo-design.jpg" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const RestuarantCard = (props) => {
  // const { resData } = props; //destructuring
  const { name, cusines, rating, delTime } = props.resData; //destructuring
  // console.log(resData);
  return (
    <div className="res-card">
      <img
        className="res-image"
        alt="res-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrm45IT7TPDizgfnHZXQPDqLqTyIxJBt0D4Q&s"
      />
      <h3>{name}</h3>
      <h4>{cusines}</h4>
      <h5>{rating}</h5>
      <h5>{delTime}</h5>
    </div>
  );
};

const resList = [
  {
    name: "Meghana Food",
    cusines: ["Biryani", "South Indian"],
    rating: 4.4,
    delTime: 35000,
  },
  {
    name: "7 Star Restuarant",
    cusines: ["Chinese", "Veg", "Non-Veg"],
    rating: 4.2,
    delTime: 45000,
  },
  {
    name: "Shankar Vilas",
    cusines: ["Fast Food", "Sweets", "Snacks"],
    rating: 4.8,
    delTime: 20000,
  },
  {
    name: "Chinese Adda",
    cusines: ["Fast Food", "Chinese Items", "Snacks"],
    rating: 4.5,
    delTime: 35000,
  },
  {
    name: "Udupi Khana Khazana",
    cusines: ["Fast Food", "South Indian", "Drinks"],
    rating: 4.0,
    delTime: 45000,
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" id="search" />
        <button className="search_button" id="search_button">
          Search
        </button>
      </div>
      {/* {console.log(resList[0])} */}
      {/* {console.log(resList?.cusines.join(","))} */}
      <div className="res-container">
        {resList &&
          resList.map((res, index) => (
            <RestuarantCard key={index} resData={res} />
          ))}
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
