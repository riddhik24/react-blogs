import React, { useEffect, useState } from "react";

const User = ({ name }) => {
  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/riddhik24");

    const json = await data.json();

    // console.log(json);
    setUserInfo(json);
  };
  return (
    <div className="user-card">
      {/* <h1>Count = {count}</h1>
      <h1>Count 2 = {count2}</h1> */}
      <h2>Name: {userInfo.name}</h2>
      <h3>Location: {userInfo.location}</h3>
      <h4>Contact: @riddhikhere</h4>
    </div>
  );
};

export default User;
