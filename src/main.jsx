import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Loading from "./Loading.jsx";
import NavigateButton from "./NavigateButton.js";

const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const More = lazy(() => import("./More.jsx"));
const Home = lazy(() => import("./Home.jsx"));

const Applayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <h1>With CodeSpliting</h1>
      <Outlet />
      <br />
      <NavigateButton />
    </Suspense>
  );
};

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "more",
        element: <More />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
