import React from "react";
import { Switch } from "@mui/material";
import colors from "../../style/colors";

const CustomSwitch = ({ checked, onChange }) => (
  <Switch
    checked={checked}
    onChange={onChange}
    sx={{
      "& .MuiSwitch-thumb": {
        backgroundColor: colors.white,
      },
      "& .MuiSwitch-track": {
        backgroundColor: colors.whiteOpacity,
      },
    }}
  />
);

export default CustomSwitch;
