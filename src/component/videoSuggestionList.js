import React, { useState } from "react";
import ListedVideo from "./listedVideo";
const VideoSuggestionList = ({ videosData, id }) => {
  const [videoList, setVideoList] = useState([]);
  let array = [];

  const filterList = (obj) => {
    if (obj._id !== id) {
      console.log("object is : ", obj);
      array.push(obj);
      console.log("====", array);
    }
  };
  videosData.filter(filterList);
  setVideoList(array);

  return <></>;
};
