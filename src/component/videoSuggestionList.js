import * as React from "react";
import ListedVideo from "./listedVideo";
const VideoSuggestionList = ({ videoId }) => {
  const [videosData, setVideosData] = React.useState([]);
  React.useEffect(() => {
    dataOfVideos();
  }, []);

  const dataOfVideos = async () => {
    const res = await fetch("http://localhost:5000/get-videos");
    const data = await res.json();
    setVideosData(data);
    console.log("data is :", data);
  };

  const filterVideos = (obj) => {
    if (obj._id !== videoId) {
      return obj;
    }
  };

  const list = videosData.filter(filterVideos);
  console.log("after filtering:", list);
  return (
    // const filterVideos = (obj) => {
    //   if (obj._id !== videoId) {
    //     list(obj);
    //   }
    // };
    <>
      {list.map((cardData) => (
        <ListedVideo cardData={cardData} />
      ))}

      {/* {videosData.filter(filterVideos)} */}
    </>
  );
};
export default VideoSuggestionList;
