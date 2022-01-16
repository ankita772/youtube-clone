import * as React from "react";
import { useNavigate } from "react-router";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Avatar,
  Box,
} from "@mui/material";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ border: "none", boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
          alt="green iguana"
          onClick={() => navigate("/videopage")}
        />
        <CardContent sx={{ display: "flex" }}>
          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{ height: 35, width: 35 }}
          />
          <div style={{ marginLeft: "3%" }}>
            <Typography
              component="div"
              variant="body2"
              sx={{ fontWeight: "bold" }}
            >
              Bankers algorithm
            </Typography>
            <Box sx={{ fontSize: "15" }}>Gate smashers</Box>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: 13 }}>100k</Box>
              <Box sx={{ fontSize: 13, ml: 1 }}>• 1 year ago</Box>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
