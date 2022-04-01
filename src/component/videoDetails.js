import { Grid, Box, Button } from "@mui/material";
import moment from "moment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ShareIcon from "@mui/icons-material/Share";

const VideoDetails = ({
  videoInfo,
  handleUpdateLike,
  // handleUpdateDislike,
}) => {
  return (
    <>
      <Grid container sx={{ display: "flex", mb: 2 }}>
        <Grid item xs={12} md={4} lg={4} sx={{ display: "flex" }}>
          <Box sx={{ fontSize: 14 }}>{videoInfo.views} views</Box>
          <Box sx={{ fontSize: 14, ml: 1 }}>
            • {moment(videoInfo.created_at).format("DD-MMM-YYYY")}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: { xs: 2, sm: 0, md: 0, lg: 0 },
            mb: { xs: 2, md: 0, lg: 0 },
            fontSize: { xs: 5 },
          }}
        >
          <Button
            startIcon={<ThumbUpAltIcon />}
            onClick={() => handleUpdateLike(videoInfo._id)}
          >
            {videoInfo.like}
          </Button>

          <Button
            startIcon={<ThumbDownAltIcon />}
            // onClick={() =>
            //   handleUpdateDislike(videoInfo._id)
            // }
          >
            {videoInfo.dislike}
          </Button>
          {/* <WhatsappShareButton /> */}
          <Button startIcon={<ShareIcon />}>Share</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetails;
