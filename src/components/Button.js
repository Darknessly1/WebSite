import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

// eslint-disable-next-line react/prop-types
function TestButton({ icon, text }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={icon} // Use the icon prop here
        sx={{
          color: "white",
          borderColor: "#212121",
          backgroundColor: "#212121",
          "&:hover": {
            color: "#212121",
            backgroundColor: "#FFFFFF",
            borderColor: "#757575",
          },
        }}
      >
        {text} {/* Use the text prop here */}
      </Button>
    </Stack>
  );
}

export default TestButton;
