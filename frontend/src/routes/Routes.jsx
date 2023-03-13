import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Help from "../pages/Help";
import Home from "../pages/Home";
import '../styles/Routes.scss'


export default function Routes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Route>
    )
  );

  return (
    <div className="route">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <div className="app-layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
