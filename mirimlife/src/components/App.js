import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "../pages/pages";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
