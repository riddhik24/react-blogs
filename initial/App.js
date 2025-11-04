/*
<div id=parent>
  <div id=child>
    <h1></h1> //siblings
    <h2></h2> //siblings
  </div>
</div>

ReactElement(object) =>  HTML(browser understanding language)
*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello React"
// );

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("div", { id: "siblings1" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement(
      "div",
      {id:"siblings2"},
      [React.createElement("h1", {}, "h1")],
      React.createElement("h2", {}, "h2")
    )
  )
);
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
