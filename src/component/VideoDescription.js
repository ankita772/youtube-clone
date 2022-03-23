import { Grid, Box, Button, Avatar } from "@mui/material";

const VideoDescription = ({ videoInfo }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={8} sm={10} md={10} sx={{ display: "flex", mt: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <div style={{ marginLeft: "2%" }}>
            <Box sx={{ fontSize: "15px", fontWeight: "bold" }}>
              {videoInfo?.channel_id?.channel_name}
            </Box>
            <Box sx={{ fontSize: "10px" }}>77k subscribers</Box>
            <Box sx={{ fontSize: { xs: "8px", md: "15px" }, mt: 2, mb: 2 }}>
              this is video Description .this is video Description . this is
              video Description . this is video Description .this is video
              Description .this is video Description .
            </Box>
          </div>
        </Grid>
        <Grid item xs={4} sm={2} md={2} sx={{ mt: 2 }}>
          <Button variant="contained">
            {videoInfo?.channel_id?.subscriber}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDescription;
