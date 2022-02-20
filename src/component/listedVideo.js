import * as React from "react";
import { useNavigate } from "react-router";
import VideoTitle from "../childComponent/videoTitle";
import moment from "moment";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const ListedVideo = ({ cardData }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
          alt="Live from space album cover"
          onClick={() => {
            navigate(`/videopage/${cardData._id}`);
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <VideoTitle title={cardData.title} />
            <Box sx={{ fontSize: 13 }}>Gate smashers</Box>
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
