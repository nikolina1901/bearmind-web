import React, { useState } from "react";
// Material-UI imports
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import ClearIcon from "@mui/icons-material/Clear";
// Custom style imports
import colors from "../style/colors";

const CustomSearchBar = ({ placeholder, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    if (onChange) {
      onChange("");
    }
  };

  return (
    <TextField
      size="small"
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
        "& .MuiIconButton-root": {
          color: colors.white,
        },
        "& .MuiIconButton-root:hover": {
          color: colors.blue,
        },
      }}
      InputProps={{
        style: {
          color: colors.white,
        },
        endAdornment: (
          <InputAdornment position="end">
            {searchTerm && (
              <IconButton
                aria-label="clear search"
                onClick={handleClearSearch}
                edge="end"
              >
                <ClearIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default CustomSearchBar;
