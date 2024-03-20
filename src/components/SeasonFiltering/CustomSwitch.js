// CustomSwitch.js
import React from "react";
import { Switch } from "@mui/material";

const CustomSwitch = ({ checked, onChange }) => (
  <Switch
    checked={checked}
    onChange={onChange}
    sx={{
      "& .MuiSwitch-thumb": {
        backgroundColor: "#fff",
      },
      "& .MuiSwitch-track": {
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },
    }}
  />
);

export default CustomSwitch;
