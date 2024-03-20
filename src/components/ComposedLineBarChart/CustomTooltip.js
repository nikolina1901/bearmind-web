import React from "react";

const CustomTooltip = ({ active, payload, className1, className2 }) => {
  if (active && payload && payload.length) {
    const { date, player, team } = payload[0].payload;
    return (
      <div className={className1}>
        <p>{`Date: ${date}`}</p>
        <p className={className2}>{`Player Load: ${player?.toFixed(2)}`}</p>
        <p className="tooltip-team">{`Team Load: ${team.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
