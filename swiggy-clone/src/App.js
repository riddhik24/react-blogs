import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
const App = () => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<App />);
