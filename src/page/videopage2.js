import * as React from 'react';
import ReactPlayer from 'react-player'
import Header from "../component/header.js";
import VideoSuggestionList from '../component/videoSuggestionList.js';
import {
  Box,
  AppBar,
  CssBaseline,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Videopage=(props)=>{
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Header/>
      </AppBar>

      <Box sx={{mt:12}}>
      <Grid container spacing={1} columns={16}>
        
        <Grid item xs={11} className='videoContainer'>
          <Item sx={{ml:3}}>
          <ReactPlayer
          url="https://youtu.be/-w3H6WUN1mU"
          height="25rem"
          width="52rem"
          controls       
          />
          </Item>
          <Item sx={{ml:3,mt:1}}>
            jhjjhgjhjhjhjhjhjkjjxjjcjhjhcjxhvcjhxcvj
            cxk
            vkxjvjklxj ckmcvm ,vmxkvnv,mlckvmlkk ,cvmlxkvlkz zs,ckmzkc cdmnxkcjn dc,zncxkc mdcnmdxcn dfmjhfsjfa mdfnsjfh sfmndk

          </Item>
        </Grid>
        <Grid item xs={5} className='videoSuggestionListGrid'>
          <Item>
          
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
            <VideoSuggestionList/>
          </Item>
        </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}
export default Videopage;

