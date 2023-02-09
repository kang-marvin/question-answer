/* eslint-disable no-nested-ternary */
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Contact from "./container/Contact";
import Content from "./container/Content";


const routes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/content" element={<Content />} />
      </Routes>
    </Suspense>
  );
};

export default routes;
