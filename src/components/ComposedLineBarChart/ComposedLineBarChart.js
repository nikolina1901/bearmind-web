import React from "react";
// Component imports
import CustomDateRangePicker from "../CustomDateRangePicker/CustomDateRangePicker";
import SeasonFiltering from "../SeasonFiltering/SeasonFiltering";
import CustomTooltip from "./CustomTooltip";
import Placeholder from "../Placeholder/Placeholder";
// Material-UI imports
import { ComposedChart, Line, Bar, XAxis, Tooltip } from "recharts";
import { Box } from "@mui/material";
// Stylesheet import
import "./ComposedLineBarChart.scss";
// Custom style imports
import colors from "../../style/colors";

const ComposedLineBarChart = ({
  handleDataFilterByDate,
  data,
  filteredData,
  activeSessionType,
  filterDataBySessionType,
  setDateRange,
}) => {
  return (
    <Box className="chart-wrap" sx={{ background: colors.whiteOpacity }}>
      <SeasonFiltering
        activeSessionType={activeSessionType}
        onDataFilter={filterDataBySessionType}
      />
      <CustomDateRangePicker
        data={data}
        onDataFilter={handleDataFilterByDate}
        setDateRange={setDateRange}
      />
      <Box className="chart" sx={{ background: colors.chartBackground }}>
        <Box sx={{ width: "100%" }}>
          {filteredData.length ? (
            <ComposedChart
              width={filteredData.length * 100}
              height={400}
              data={filteredData}
              margin={{ top: 30, right: 30, bottom: 30, left: 30 }}
            >
              <XAxis
                dataKey="date"
                axisLine={{ stroke: colors.whiteOpacity }}
                tick={{ fill: colors.white }}
              />
              <Tooltip
                content={
                  <CustomTooltip
                    className1="custom-tooltip"
                    className2="tooltip-player"
                  />
                }
              />
              <Bar
                dataKey="team"
                barSize={20}
                fill={colors.teamData}
                shape={(props) => <rect rx={3} ry={3} {...props} />}
              />
              <Line
                type="monotone"
                dataKey="player"
                stroke={colors.playerData}
                strokeWidth={3}
              />
            </ComposedChart>
          ) : (
            <Placeholder />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ComposedLineBarChart;
