import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "../component/header";
import {
  Grid,
  CssBaseline,
  AppBar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const SearchingVideosPage = () => {
  const searchRelatedVideo = () => (
    <>
      <Grid
        container
        sx={{
          ml: { md: 5 },
          mb: { xs: 1, sm: 1, md: 2 },
          display: "flex",
        }}
      >
        <Grid xs={3} sm={3} md={3} item>
          <Img
            alt="complex"
            src="https://i.ytimg.com/vi/7gMLNiEz3nw/hqdefault.jpg?s…QCAokN4AQ==&rs=AOn4CLBLA5uG8DDgm8gYYCGSL8k5Uapr2A"
            width="100%"
            height="80%"
          />
        </Grid>
        <Grid item xs={7} sm={7} md={7} sx={{ m: 2 }}>
          <Typography
            sx={{ fontSize: { xs: "10px", md: "20px" }, fontWeight: "bold" }}
          >
            Lets solve our first Error in react native
          </Typography>
          <div style={{ display: "flex" }}>
            <Box sx={{ fontSize: { xs: "8px", sm: "8px", md: "12px" } }}>
              100k views
            </Box>
            <Box sx={{ fontSize: { xs: "8px", sm: "8px", md: "12px" }, ml: 1 }}>
              • 1 year ago
            </Box>
          </div>
          <div style={{ display: "flex", marginTop: "1%" }}>
            <Avatar alt="Cindy Baker" src="" />
            <Box
              sx={{
                fontSize: { xs: "8px", sm: "8px", md: "12px" },
                m: { xs: 0.5, sm: 0.5, md: 1.5 },
              }}
            >
              Thapa Technical
            </Box>
          </div>

          <Grid container wrap="nowrap" sx={{ mt: 1 }}>
            <Grid item zeroMinWidth>
              <Typography
                noWrap
                sx={{ fontSize: { xs: "8px", sm: "8px", md: "12px" } }}
              >
                m,m,m,m.m kjkjlkl gfgfdgfdgf trtrytuy jhihuhujhj fsddfsewasreds
                jhjhjnkm,m,m,m.m kjkjlkl gfgfdgfdgf trtrytuy jhihuhujhj
                fsddfsewasreds jhjhjnkjkjk jhjghfgfsretryuyiu iuiuo
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  return (
    <>
      <CssBaseline />
      <AppBar>
        <Header />
      </AppBar>
      <Grid container sx={{ mt: { xs: 8, sm: 8, md: 10 } }}>
        {searchRelatedVideo()}
      </Grid>
    </>
  );
};
export default SearchingVideosPage;
