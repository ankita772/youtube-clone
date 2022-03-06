import React, { useState, useEffect } from "react";

import VideoTitle from "../childComponent/videoTitle";
import moment from "moment";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

const ListedVideo = ({ cardData, handleClick }) => {
  return (
    <React.Fragment>
      <Card
        sx={{
          display: "flex",
          border: "none",
          boxShadow: "none",
          marginBottom: "5px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={cardData.thumbnail_url}
          alt="Live from space album cover"
          onClick={() => handleClick(cardData._id)}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <VideoTitle title={cardData.title} />
            <Box sx={{ fontSize: 13 }}>{cardData?.channel_id.channel_name}</Box>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: 13 }}>{cardData.views} views</Box>
              <Box sx={{ fontSize: 13, ml: 1 }}>
                • {moment(cardData.created_at).format("DD-MMM-YYYY")}
              </Box>
            </div>
          </CardContent>
        </Box>
      </Card>
    </React.Fragment>
  );
};
export default ListedVideo;
