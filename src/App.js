import React from "react";
// import "./style.css";
import Homepage from "./page/homepage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Videopage from "./page/videopage";

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
       <Route path="/" element={<Homepage/>} />
       </Routes>
    </BrowserRouter> */}
     {/* <Homepage/>  */}
    <Videopage/>
    </>
  );
}

export default App;
