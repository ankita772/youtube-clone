import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import ListItemText from "@mui/material/ListItemText";

const FilterList = () => {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {/* {filterData.map((val) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText inset primary={val} />
          </ListItemButton>
        </ListItem>
      ))}
    </List> */}
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText inset primary="ankita" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
export default FilterList;
