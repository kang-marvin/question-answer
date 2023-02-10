/* eslint-disable no-nested-ternary */
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";


const routes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route exact path="/" element={<CategoryPage />} />
      </Routes>
    </Suspense>
  );
};

export default routes;
