import React from "react";
import { Box, TextField, Modal, IconButton, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const ShareModal = ({ shareModalOpen, setShareModal, videoUrl }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(videoUrl);
    alert(`You have copied "${videoUrl}"`);
    setShareModal(false);
  };
  return (
    <Modal open={shareModalOpen} onClose={() => setShareModal(false)}>
      <Box sx={style}>
        <Typography variant="h5" gutterBottom component="div">
          Share
        </Typography>
        <TextField
          id="outlined-read-only-input"
          defaultValue={videoUrl}
          InputProps={{
            readOnly: true,
          }}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{ m: 1 }}
          onClick={() => copyToClipboard()}
        >
          <ContentCopyIcon />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ShareModal;
