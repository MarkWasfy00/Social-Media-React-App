import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/Base.style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Root from "./Root";
import Community from "./pages/Community/Community";

import { homeLoader } from "./util/api";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} loader={homeLoader} />
      <Route path="/my-community" element={<Community />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
