import { Grid, Typography, Box, Avatar } from "@mui/material";

const Comment = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", mt: 5, mb: 3, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <div style={{ marginLeft: "2%" }}>
            <div style={{ display: "flex" }}>
              <Box sx={{ fontSize: "12px", fontWeight: "bold" }}>Ankita</Box>
              <Box sx={{ fontSize: "12px", ml: 1 }}>2 months ago</Box>
            </div>
            <Typography sx={{ fontSize: { xs: "8px", md: "15px" }, mt: 1 }}>
              it is a comment line.it is a comment line.it is a comment line.it
              is a comment line.it is a comment line.it is a comment line.it is
              a comment line.it is a comment line
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
