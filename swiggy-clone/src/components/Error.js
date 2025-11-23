import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>
        {error.status} :{error.statusText}
      </h1>
      <h2>
        <Link to={"/"}>Go to Home Page </Link>
      </h2>
    </div>
  );
};

export default Error;
