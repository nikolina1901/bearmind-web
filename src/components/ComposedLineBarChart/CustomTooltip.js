import React from "react";
import "./ComposedLineBarChart.scss";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { date, player, team } = payload[0].payload;
    return (
      <div className="custom-tooltip">
        <p>{`Date: ${date}`}</p>
        <p className="tooltip-player">{`Player Load: ${player?.toFixed(2)}`}</p>
        <p className="tooltip-team">{`Team Load: ${team.toFixed(2)}`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;