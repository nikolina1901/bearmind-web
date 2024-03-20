import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Tooltip } from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import { mergePlayerAndTeamData } from "../../helper";
import "./PlayerDetailsPage.scss";
import playerData from "../../data/player_load.json";
import teamData from "../../data/team_load.json";
import players from "../../data/players.json";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import ComposedLineBarChart from "../../components/ComposedLineBarChart/ComposedLineBarChart";
import colors from "../../style/colors";

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const player = players.find((player) => player.id === id);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeSessionType, setActiveSessionType] = useState("all");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    const fetchData = async () => {
      const mergedData = mergePlayerAndTeamData(playerData, teamData);
      setData(mergedData);
      setFilteredData(mergedData);
      // Set initial date range to cover all data
      const oldestDate = new Date(
        Math.min(...mergedData.map((item) => new Date(item.date)))
      );
      const newestDate = new Date(
        Math.max(...mergedData.map((item) => new Date(item.date)))
      );
      setDateRange({
        startDate: oldestDate,
        endDate: newestDate,
        key: "selection",
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    filterDataBySessionType(activeSessionType);
  }, [dateRange]);

  const handleDataFilterByDate = (filteredData) => {
    setFilteredData(filteredData);
  };

  const filterDataBySessionType = (sessionType) => {
    let filteredData = [];

    if (sessionType === "all") {
      filteredData = data.filter(
        (item) =>
          new Date(item.date).getTime() >= dateRange.startDate.getTime() &&
          new Date(item.date).getTime() <= dateRange.endDate.getTime()
      );
    } else {
      filteredData = data.filter(
        (item) =>
          item.session_type === sessionType &&
          new Date(item.date).getTime() >= dateRange.startDate.getTime() &&
          new Date(item.date).getTime() <= dateRange.endDate.getTime()
      );
    }

    setFilteredData(filteredData);
    setActiveSessionType(sessionType);
  };

  return (
    <>
      <header className="header">
        <div className="player-info">
          <Typography
            variant="h5"
            color={colors.white}
            sx={{ fontWeight: "bold" }}
          >
            {`${player.firstName} ${player.lastName}`}
          </Typography>
          <Tooltip title="Team page" placement="left">
            <Link to="/" className="go-back-button">
              <Groups2Icon fontSize="large" style={{ color: colors.white }} />
            </Link>
          </Tooltip>
        </div>
      </header>
      <div className="player-wrapper">
        <PlayerCard
          photo={player.photoPath || ""}
          name={`${player.firstName} ${player.lastName}`}
          position={player.position || null}
          number={player.jerseyNumber ? `#${player.jerseyNumber}` : null}
          status={player.player.status || null}
          lastEventCreatedAt={
            player.player.lastEvent?.createdAt
              ? new Date(player.player.lastEvent.createdAt).toLocaleDateString()
              : null
          }
          symptoms={player.player.lastEvent?.symptoms || null}
        />
        <ComposedLineBarChart
          handleDataFilterByDate={handleDataFilterByDate}
          filteredData={filteredData}
          data={data}
          activeSessionType={activeSessionType}
          filterDataBySessionType={filterDataBySessionType}
          setDateRange={setDateRange}
        />
      </div>
    </>
  );
};

export default PlayerDetailsPage;
