/* eslint-disable no-nested-ternary */
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import CategoryPage from "./pages/CategoryPage";
import QuestionsPage from "./pages/QuestionsPage";


const routes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route exact path="/" element={<CategoryPage />} />
        <Route exact path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Suspense>
  );
};

export default routes;
