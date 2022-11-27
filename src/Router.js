import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import GymInfo from "./components/gyms/gym-info";
import GymsList from "./pages/Gyms";

export const router = createBrowserRouter([
  {
    path: "/gyms/:id",
    element: <GymInfo />,
  },
  {
    path: "/",
    element: <GymsList />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);
