import React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import CustomSwitch from "../CustomSwitch";
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
