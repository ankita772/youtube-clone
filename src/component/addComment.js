import { Grid, Avatar, FormControl, Input, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const AddComment = ({ handleComment, handleSendComment }) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ display: "flex", mt: 2, mr: 2 }}>
          <Avatar alt="Cindy Baker" src="" />
          <FormControl fullWidth sx={{ ml: 2 }} variant="standard">
            <Input
              id="standard-adornment-amount"
              placeholder="Add a public comment"
              onChange={handleComment}
            />
          </FormControl>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={handleSendComment}
          >
            <SendIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AddComment;
