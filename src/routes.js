import React from "react";

import Homepage from "./page/homepage";
import Videopage from "./page/videopage";
import SearchingVideosPage from "./page/searchingVideosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Notification from "./component/notification";

const Routers = () => {
  const notification = useSelector((state) => state.notification);

  return (
    <>
      <Notification
        open={notification.open}
        vertical="top"
        horizontal="right"
        severity={notification.severity}
        message={notification.message}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/videopage/:id" element={<Videopage />} />
          <Route
            path="/searchingVideosPage"
            exact
            element={<SearchingVideosPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
