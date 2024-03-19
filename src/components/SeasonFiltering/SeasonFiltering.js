import React from "react";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";

// Custom Switch component with predefined styling
const CustomSwitch = ({ label, checked, onChange }) => (
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

const SeasonFiltering = ({ activeSessionType, filterDataBySessionType }) => {
  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={
            <CustomSwitch
              checked={activeSessionType === "training"}
              onChange={() => filterDataBySessionType("training")}
            />
          }
          label="Training"
          sx={{ color: "#fff" }}
        />
        <FormControlLabel
          control={
            <CustomSwitch
              checked={activeSessionType === "match"}
              onChange={() => filterDataBySessionType("match")}
            />
          }
          label="Match"
          sx={{ color: "#fff" }}
        />
        <FormControlLabel
          control={
            <CustomSwitch
              checked={activeSessionType === "all"}
              onChange={() => filterDataBySessionType("all")}
            />
          }
          label="All"
          sx={{ color: "#fff" }}
        />
      </FormGroup>
    </div>
  );
};

export default SeasonFiltering;
