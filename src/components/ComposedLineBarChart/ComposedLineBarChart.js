import React from "react";
import { ComposedChart, Line, Bar, XAxis, Tooltip } from "recharts";
import { Box } from "@mui/material";

import "./ComposedLineBarChart.css";

import CustomDateRangePicker from "../CustomDateRangePicker/CustomDateRangePicker";
import SeasonFiltering from "../SeasonFiltering/SeasonFiltering";

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

const ComposedLineBarChart = ({
  handleDataFilterByDate,
  data,
  filteredData,
  activeSessionType,
  filterDataBySessionType,
  setDateRange,
}) => {
  return (
    <Box className="chart-wrapper" sx={{ background: "#ffffff10" }}>
      <SeasonFiltering
        activeSessionType={activeSessionType}
        onDataFilter={filterDataBySessionType}
      />
      <CustomDateRangePicker
        data={data}
        onDataFilter={handleDataFilterByDate}
        setDateRange={setDateRange}
      />
      <Box className="chart">
        <Box sx={{ width: "100%" }}>
          <ComposedChart
            width={filteredData.length * 100}
            height={300}
            data={filteredData}
            margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
          >
            <XAxis
              dataKey="date"
              axisLine={{ stroke: "#ffffff00" }}
              tick={{ fill: "#fff" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              wrapperStyle={{ background: "#050f20" }}
            />
            <Bar
              dataKey="team"
              barSize={20}
              fill="#ffffff10"
              shape={(props) => <rect rx={5} ry={5} {...props} />}
            />
            <Line
              type="monotone"
              dataKey="player"
              stroke="red"
              strokeWidth={3}
            />
          </ComposedChart>
        </Box>
      </Box>
    </Box>
  );
};

export default ComposedLineBarChart;
