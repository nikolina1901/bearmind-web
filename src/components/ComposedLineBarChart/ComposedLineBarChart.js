import { Box } from "@mui/material";
import React from "react";
import { ComposedChart, Line, Bar, XAxis, Tooltip } from "recharts";
import CustomDateRangePicker from "../CustomDateRangePicker/CustomDateRangePicker";
import SeasonFiltering from "../SeasonFiltering/SeasonFiltering";


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { date, player, team } = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{
          width: "auto",
          height: "auto",
          fontSize: "18px",
          padding: "0 20px",
        }}
      >
        <p style={{ color: "#fff" }}>{`Date: ${date}`}</p>
        <p style={{ color: "red" }}>{`Player Load: ${player?.toFixed(2)}`}</p>
        <p style={{ color: "#565c67" }}>{`Team Load: ${team.toFixed(2)}`}</p>
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
}) => {
  return (
    <Box
      sx={{
        width: "90%",
        margin: "0 auto",
        background: "#ffffff10",
        borderRadius: "10px",
      }}
    >
      <CustomDateRangePicker
        data={data}
        onDataFilter={handleDataFilterByDate}
      />
      <SeasonFiltering
        activeSessionType={activeSessionType}
        filterDataBySessionType={filterDataBySessionType}
      />
      <Box
        sx={{
          width: "95%",
          overflowX: "auto",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
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
