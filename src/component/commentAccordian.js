import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Comment from "./comment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommentAccordian = ({ object }) => {
  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            l;;l;
          </AccordionSummary>
          <AccordionDetails>
            <Comment object={object} />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CommentAccordian;
