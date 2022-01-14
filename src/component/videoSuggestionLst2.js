import * as React from "react";
import ReactPlayer from 'react-player'
import { styled } from '@mui/material/styles';
import {
Grid,
Typography,
ButtonBase,
} from '@mui/material';


const VideoSuggestionList=()=>{
    return(
    <>
      <Grid container spacing={3}>
        <Grid item>
          <ButtonBase sx={{ width: 170, height: 128 }}>
          <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          height="6rem"
          width="10rem"
          controls/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={3}>
            <Grid item xs sx={{mt:2}}>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG gmlfkgjrkt rkfjkrjkjkk dfkvnkdj
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            
          </Grid>border-top: 1px solid black;
        </Grid>
        </Grid>
    </>
  )
};
export default VideoSuggestionList;
    