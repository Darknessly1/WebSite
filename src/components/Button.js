import * as React from "react";
import Button from "@mui/material/Button";
// import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import ExploreIcon from "@mui/icons-material/Explore";


function TestButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={<ExploreIcon />}
        sx={{
          color: "white", 
          borderColor: "#212121",
          backgroundColor: "#212121",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#616161", 
            borderColor: "#757575",
          },
        }}
      >
        Discover More
      </Button>
    </Stack>
  );
}

export default TestButton;
