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
import { lazy, Suspense } from "react";
const App = () => {
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline, please check your internet connection.</h1>
    );
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
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
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
