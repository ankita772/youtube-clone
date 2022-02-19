import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const StyledPaper = styled(Paper)(() => ({
  maxWidth: 200,
}));

const VideoTitle = ({ title }) => {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
      <StyledPaper sx={{ boxShadow: "none" }}>
        <Grid container wrap="nowrap">
          <Grid item xs zeroMinWidth>
            <Typography noWrap variant="body2" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </StyledPaper>
    </Box>
  );
};
export default VideoTitle;
