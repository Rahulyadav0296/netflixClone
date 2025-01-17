import React from "react";
import Login from "../Login/Login";
import Brows from "../Brows/Brows";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Brows />,
  },
]);
function Body() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
