import React from "react";
import moment from "moment";
import { useNavigate } from "react-router";
import VideoTitle from "../childComponent/videoTitle";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Avatar,
  Box,
} from "@mui/material";

const VideoCard = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ border: "none", boxShadow: "none" }}>
      <CardActionArea onClick={() => navigate(`/videopage/${cardData._id}`)}>
        <CardMedia
          component="img"
          height="120"
          image="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
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
            <Box sx={{ fontSize: "15" }}>
              {cardData.channel_id.channel_name}
            </Box>
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
