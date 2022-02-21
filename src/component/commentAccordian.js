import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import Comment from "./comment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CommentAccordian = () => {
  return (
    <>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Comment />
          </AccordionSummary>
          <AccordionDetails>
            <Comment />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CommentAccordian;
