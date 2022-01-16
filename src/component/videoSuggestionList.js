import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const VideoSuggestionList = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      {/* <div style={{ display: "flex" }}> */}
      <Card sx={{ display: "flex", border: "none", boxShadow: "none" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              Bankers algorithm
            </Typography>
            <Box sx={{ fontSize: 13 }}>Gate smashers</Box>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: 13 }}>100k</Box>
              <Box sx={{ fontSize: 13, ml: 1 }}>• 1 year ago</Box>
            </div>
          </CardContent>
        </Box>
      </Card>
    </React.Fragment>
  );
};
export default VideoSuggestionList;
