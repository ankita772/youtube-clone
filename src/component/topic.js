import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function FloatingActionButtonExtendedSize() {
  const topics = [
    "",
    "All",
    "Mixes",
    "Music",
    "Live",
    "Scene",
    "Bollywood Music",
    "Comedies",
    "C++",
    "JavaScript",
    "Material Ui",
    "React",
    "Python",
    "Movie",
    "Canvas Etcher",
    "Node js",
    "SQL",
  ];

  const [allTopic, setAllTopic] = React.useState(topics);
  const [next, setNext] = React.useState(0);

  const handleNext = () => {
    setNext(next + 1);
  };
  const handleBack = () => {
    setNext(next - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        p: 1,
        m: 1,
        justifyContent: "space-between",
        transition: 3,
      }}
      className="topicsBar"
    >
      <IconButton onClick={handleBack} disabled={next === 0}>
        <KeyboardArrowLeft />
      </IconButton>

      {allTopic.map((i, index) =>
        index > next && index < next + 12 ? (
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label={i}
            key={index}
          >
            {i}
          </Fab>
        ) : (
          ""
        )
      )}

      <IconButton onClick={handleNext} disabled={next === 5}>
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
}
