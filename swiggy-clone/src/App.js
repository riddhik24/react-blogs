import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import Contact from "./components/Contact";
import Loading from "./components/Loading";
import RestaurantMenu from "./components/RestaurantMenu";
import useOnlineStatus from "./utils/useOnlineStatus";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
const App = () => {
  const { loggedInUser } = useContext(UserContext);
  const [name, setName] = useState(loggedInUser);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline, please check your internet connection.</h1>
    );

  useEffect(() => {
    const data = {
      name: "Riddhik Mohite",
    };

    setName(data.name);
  }, []);
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ loggedInUser: name, setName }}>
        <div className="container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const Contact = lazy(() => import("./components/Contact"));
const About = lazy(() => import("./components/About"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
