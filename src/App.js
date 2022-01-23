import React from "react";
import "./style.css";
import Homepage from "./page/homepage";
import Videopage from "./page/videopage";
import SearchingVideosPage from "./page/searchingVideosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/videopage" exact element={<Videopage />} />
          <Route
            path="/searchingVideosPage"
            exact
            element={<SearchingVideosPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
