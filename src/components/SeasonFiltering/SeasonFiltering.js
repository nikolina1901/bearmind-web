import React from "react";
// Component imports
import SeasonSwitches from "./SeasonSwitches";

const SeasonFiltering = ({ activeSessionType, onDataFilter }) => {
  
  const switches = [
    { type: "all", label: "All" },
    { type: "training", label: "Training" },
    { type: "match", label: "Match" },
  ];

  return (
    <SeasonSwitches
      switches={switches}
      activeSessionType={activeSessionType}
      onDataFilter={onDataFilter}
    />
  );
};

export default SeasonFiltering;
