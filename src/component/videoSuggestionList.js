import React from "react";

const VideoSuggestionList = ({ videosData, id }) => {
  let array = [];

  const filterList = (obj) => {
    if (obj._id !== id) {
      console.log("object is : ", obj);
      array.push(obj);
      console.log("====", array);
    }
  };
  videosData.filter(filterList);

  return <></>;
};
export default VideoSuggestionList;
