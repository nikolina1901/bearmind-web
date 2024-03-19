import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mergePlayerAndTeamData } from "../../helper";
import "./PlayerDetailsPage.css";
import playerData from "../../data/player_load.json";
import teamData from "../../data/team_load.json";
import players from "../../data/players.json";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import ComposedLineBarChart from "../../components/ComposedLineBarChart/ComposedLineBarChart";

const PlayerDetailsPage = () => {
  const { id } = useParams();
  const player = players.find((player) => player.id === id);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeSessionType, setActiveSessionType] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      const mergedData = mergePlayerAndTeamData(playerData, teamData);
      setData(mergedData);
      setFilteredData(mergedData);
    };
    fetchData();
  }, []);

  const handleDataFilterByDate = (filteredData) => {
    setFilteredData(filteredData);
  };

  const filterDataBySessionType = (sessionType) => {
    if (sessionType === "all") {
      setFilteredData(data);
    } else {
      const filteredData = data.filter(
        (item) => item.session_type === sessionType
      );
      setFilteredData(filteredData);
    }
    setActiveSessionType(sessionType);
  };

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div className="playerDetailsPageWrap">
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
      />
    </div>
  );
};

export default PlayerDetailsPage;
