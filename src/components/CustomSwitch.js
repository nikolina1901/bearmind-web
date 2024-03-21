import React from "react";
// Material-UI imports
import { Switch } from "@mui/material";
// Custom style imports
import colors from "../style/colors";


const CustomSwitch = ({ checked, onChange }) => (
  <Switch
    checked={checked}
    onChange={onChange}
    sx={{
      "& .MuiSwitch-thumb": {
        backgroundColor: colors.white,
      },
      "& .MuiSwitch-track": {
        backgroundColor: colors.white,
      },
    }}
  />
);

export default CustomSwitch;
