import * as React from "react";
import ReactPlayer from 'react-player'


import {
  Box,
} from "@mui/material";

const VideoSuggestion=()=>{
  return (
    <React.Fragment>
        <Box sx={{m:3,p:1,display:"flex" ,flexDirection:"column"}}>
          <div className="videoRow">
           <div className="video">
           <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>YouTube Clone for Begginers</span>
          </div>

         <div className="video">
           <ReactPlayer
          url="https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>NodeJS Tutorial in Hindi 2020</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/w4ClQO0FFQg"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>Mix - Param Sundar - Full Song Video...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/LD4-UTFXtwA"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>Add Material UI on your React application</span>
          </div>
       </div>


      <div className="videoRow">
          <div className="video">
           <ReactPlayer
          url="https://youtu.be/mLYJMxQfGYU"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>Aap Jo Is Tarah Se Tarpayenge(Cover)Real Heart Touching...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/ixxrAZE9IoI"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>ASMR CHILLI BAJJI,BARBECUE CHICKEN...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/5OrZpBbGKgc"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>Java Tutorial : Introduction to Object Oriented Programing</span>
          </div>
          <div className="video">
           <ReactPlayer
          url="https://youtu.be/iSP60D5UZ8U"
          height="150px"
          width="280px"
          controls/> <br/>
          <span>Abstraction in Java||what is abstract class and abstract method in java (...</span>
          </div>
      </div>

        
        </Box>
    </React.Fragment>
  );
};
export default VideoSuggestion;
