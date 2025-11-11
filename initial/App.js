import React from "react";
import { createRoot } from "react-dom/client";

// const jsx = <h1 id="heading">Hello JSX</h1>;

const HeaderComponent = function () {
  return <h1>This is Head Component inside Main Component</h1>;
};
const MainComponent = () => {
  return (
    <div className="container" id="main">
      <HeaderComponent />
      <h1>This is Main Component</h1>
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<MainComponent />);
