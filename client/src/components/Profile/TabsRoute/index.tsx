import React from "react";
import { Routes, Route } from "react-router-dom";
import TweetsPage from "../../../pages/Tweets";

const TabsRoute = () => {
  return (
    <Routes>
      <Route path="tweets" element={<TweetsPage />} />
      <Route path="media" element={<h1>Media</h1>} />
      <Route path="likes" element={<h1>Likes</h1>} />
    </Routes>
  );
};

export default TabsRoute;
