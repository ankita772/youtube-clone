import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import VideoTitle from "../childComponent/videoTitle";

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Avatar,
  Box,
} from "@mui/material";

const VideoCard = ({ cardData }) => {
  const navigate = useNavigate();
  const [channelDetail, setChannelDetail] = useState([]);
  useEffect(() => {
    getUniqueChannel();
  }, []);
  const getUniqueChannel = async () => {
    let fetchData = {
      method: "POST",
      body: JSON.stringify({
        id: cardData.channel_id,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    };
    const res = await fetch(
      "http://localhost:5000/get-unique-channel",
      fetchData
    );
    const data = await res.json();

    setChannelDetail(data[0]);
  };

  return (
    <Card sx={{ border: "none", boxShadow: "none" }}>
      <CardActionArea onClick={() => navigate(`/videopage/${cardData._id}`)}>
        <CardMedia
          component="img"
          height="120"
          image={cardData.thumbnail_url}
          alt="green iguana"
        />
        <CardContent sx={{ display: "flex" }}>
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ height: 35, width: 35 }}
          />
          <div style={{ marginLeft: "3%" }}>
            <VideoTitle title={cardData.title} />
            <Box sx={{ fontSize: "15" }}>{channelDetail.channel_name}</Box>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: 13 }}>{cardData.views} views</Box>
              <Box sx={{ fontSize: 13, ml: 1 }}>
                {moment(cardData.created_at).format("DD-MMM-YYYY")}
              </Box>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default VideoCard;
