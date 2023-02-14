import React from "react";
import { Route, Routes } from "react-router-dom";
import { Houses } from "../../../Pages/Houses";
import { LoginPage } from "../../../Pages/Login/LoginPage";
import Home from "../../../Pages/Home/Home";
import { NotFound } from "../../../Pages/NotFound";
import SearchResult from "../../../Pages/SearchResult";
// Defines the routes via the react-router-dom routing
const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/boliger" element={<Houses />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
