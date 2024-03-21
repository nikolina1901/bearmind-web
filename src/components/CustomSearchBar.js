import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import colors from "../style/colors";

const CustomSearchBar = ({ placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <TextField
      label={placeholder}
      variant="outlined"
      sx={{
        "& .MuiOutlinedInput-root": {
          width: 400,
          backgroundColor: colors.whiteOpacity,
          borderColor: searchTerm !== "" ? colors.blue : colors.white,
          color: colors.white,
          transition: "all 0.3s ease",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: searchTerm !== "" ? colors.blue : colors.white,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.blue,
          },
        },
        "& .MuiInputLabel-root": {
          color: colors.white,
        },
        "& .MuiFormHelperText-root": {
          color: colors.white,
        },
      }}
      InputProps={{
        style: {
          color: colors.white,
        },
      }}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default CustomSearchBar;
