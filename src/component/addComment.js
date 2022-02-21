import { Grid, Avatar, FormControl, Input } from "@mui/material";

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
        </Grid>
      </Grid>
    </>
  );
};

export default AddComment;
