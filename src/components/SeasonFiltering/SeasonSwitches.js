import React from "react";
// Material-UI imports
import { FormControlLabel, FormGroup } from "@mui/material";
// Component imports
import CustomSwitch from "../CustomSwitch";
// Custom style import
import colors from "../../style/colors";

const SeasonSwitches = ({ switches, activeSessionType, onDataFilter }) => (
  <FormGroup row>
    {switches.map(({ type, label }) => (
      <FormControlLabel
        key={type}
        control={
          <CustomSwitch
            checked={activeSessionType === type}
            onChange={() => onDataFilter(type)}
          />
        }
        label={label}
        sx={{ color: colors.white }}
      />
    ))}
  </FormGroup>
);

export default SeasonSwitches;
