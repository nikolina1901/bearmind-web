import React from "react";
import { Radio, RadioGroup, FormControlLabel } 
from "@mui/material"; 
import colors from "../style/colors";

const CustomRadioGroup = ({ ariaLabel, name, value, onChange, sx, options }) =>{
  return (
    <RadioGroup
      aria-label={ariaLabel}
      name={name}
      value={value}
      sx={{ color: colors.white, flexWrap: "wrap", alignItems: "center" }}
      onChange={onChange}
      row
    >
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio sx={{ color: colors.white }} />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}


export default CustomRadioGroup;