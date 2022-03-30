import { Grid, Typography, Box, Avatar } from "@mui/material";
import moment from "moment";

const Comment = ({ object }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", mt: 5, mb: 3, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <div style={{ marginLeft: "2%" }}>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: "12px", fontWeight: "bold" }}>
                {object.user_id.name}
              </Box>
              <Box sx={{ fontSize: "12px", ml: 1 }}>
                {moment(object.uploaded_at).format("DD-MMM-YYYY")}
              </Box>
            </div>
            <Typography sx={{ fontSize: { xs: "12px", md: "15px" }, m: 1 }}>
              {object.message}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
