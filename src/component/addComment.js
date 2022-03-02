import { Grid, Avatar, FormControl, Input, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AddComment = () => {
  return (
    <>
      <Grid container>
        <Grid xs={12} sx={{ display: "flex", mt: 2, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <FormControl fullWidth sx={{ ml: 2 }} variant="standard">
            <Input
              id="standard-adornment-amount"
              placeholder="Add a public comment"
            />
          </FormControl>
          <IconButton aria-label="delete" disabled color="primary">
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AddComment;
