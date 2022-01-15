import * as React from "react";
import { useNavigate } from "react-router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 280, border: "none", boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
          alt="green iguana"
          onClick={() => navigate("/videopage")}
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            Bankers algorithm
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
