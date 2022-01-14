import * as React from "react";
import ReactPlayer from 'react-player'


import {
  Box,
} from "@mui/material";

const VideoSuggestion=()=>{
  return (
    <React.Fragment>
      <Box sx={{m:2,p:1}}>
          <div className="videoRow">
           <div className="video">
           <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          height="150px"
          width="280px"
          controls/>
          <span>YouTube Clone for Begginers</span>
          </div>

         <div className="video">
           <ReactPlayer
          url="https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
          height="150px"
          width="280px"
          controls/>
          <span>NodeJS Tutorial in Hindi 2020</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/w4ClQO0FFQg"
          height="150px"
          width="280px"
          controls/>
          <span>Mix - Param Sundar - Full Song Video...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/LD4-UTFXtwA"
          height="150px"
          width="280px"
          controls/>
          <span>Add Material UI on your React application</span>
          </div>
       </div>


      <div className="videoRow">
          <div className="video">
           <ReactPlayer
          url="https://youtu.be/mLYJMxQfGYU"
          height="150px"
          width="280px"
          controls/>
          <span>Aap Jo Is Tarah Se Tarpayenge(Cover)Real Heart Touching...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/ixxrAZE9IoI"
          height="150px"
          width="280px"
          controls/>
          <span>ASMR CHILLI BAJJI,BARBECUE CHICKEN...</span>
          </div>

          <div className="video">
           <ReactPlayer
          url="https://youtu.be/5OrZpBbGKgc"
          height="150px"
          width="280px"
          controls/>
          <span>Java Tutorial : Introduction to Object Oriented Programing</span>
          </div>
          <div className="video">
           <ReactPlayer
          url="https://youtu.be/iSP60D5UZ8U"
          height="150px"
          width="280px"
          controls/>
          <span>Abstraction in Java||what is abstract class and abstract method in java (...</span>
          </div>
      </div>
      <div className="videoRow">
        <div className="video">
          <ReactPlayer
          url="https://youtu.be/AX1AP83CuK4"
          height="150px"
          width="280px"
          controls/>
          <span>Express js tutorial in one video in Hindi</span>
        </div>

        <div className="video">
          <ReactPlayer
          url="https://youtube.com/playlist?list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8"
          height="150px"
          width="280px"
          controls/>
          <span>Node js Tutorial in Hindi 2020</span>
        </div>

        <div className="video">
          <ReactPlayer
          url="https://youtube.com/playlist?list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc"
          height="150px"
          width="280px"
          controls/>
          <span>MERN stack in Hindi 2021</span>
        </div>

        <div className="video">
          <ReactPlayer
          url="https://youtu.be/AxZBP9DZgRg"
          height="150px"
          width="280px"
          controls/>
          <span>Father vs Son</span>
        </div>

      </div>
</Box>
    </React.Fragment>
  );
};
export default VideoSuggestion;
