/* eslint-disable no-nested-ternary */
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import QuestionsPage from "./pages/QuestionsPage";

const routes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/* Categories Page */}
        <Route exact path="/categories" element={<CategoryPage />} />

        {/* Category Questions Page */}
        <Route
          exact
          path="/category/:categoryID/questions"
          element={<QuestionsPage />}
        />

        {/* Re-route the root path to Categories Page */}
        <Route
          exact
          path="/"
          element={<Navigate to="/categories" replace={true} />}
        />
      </Routes>
    </Suspense>
  );
};

export default routes;
