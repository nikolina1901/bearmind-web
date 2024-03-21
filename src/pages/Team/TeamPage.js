import React, { useState } from "react";
import { Link } from "react-router-dom";
// JSON data import
import players from "../../data/players.json";
// Component imports
import ActionBar from "../../components/ActionBar/ActionBar";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import CustomSearchBar from "../../components/CustomSearchBar";
import CustomRadioGroup from "../../components/CustomRadioGroup";
import Placeholder from "../../components/Placeholder/Placeholder";
// Stylesheet import
import "./TeamPage.scss";

const statusOptions = [
  { value: "none", label: "All" },
  { value: "IN_RECOVERY", label: "Recovery" },
  { value: "ACTIVE", label: "Active" },
];

const TeamPage = () => {
  const [filter, setFilter] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");

  const filterPlayers = (player) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      player.firstName.toLowerCase().includes(searchTermLower) ||
      player.lastName.toLowerCase().includes(searchTermLower) ||
      player.jerseyNumber.toString().includes(searchTermLower)
    );
  };

  const filterByStatus = (player) => {
    if (filter === "none") {
      return true;
    } else {
      return player.player && player.player.status === filter;
    }
  };

  const playersDataSort = players
    .filter(filterPlayers)
    .filter(filterByStatus)
    .sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <ActionBar
        child={
          <>
            <CustomSearchBar
              placeholder="Search by name or jersey number"
              onChange={handleSearchChange}
            />
            <CustomRadioGroup
              ariaLabel="filter"
              name="filter"
              value={filter}
              options={statusOptions}
              onChange={handleFilterChange}
            />
          </>
        }
      />

      <div className="team-page-wrap">
        {playersDataSort.length ? (
          <>
            {playersDataSort.map((player) => (
              <div key={player.id} className="player-card-wrap">
                <Link
                  to={`/player/${player.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <PlayerCard
                    photo={player.photoPath || ""}
                    name={`${player.firstName} ${player.lastName}`}
                    position={player.position || null}
                    number={
                      player.jerseyNumber ? `#${player.jerseyNumber}` : null
                    }
                    status={player.player.status || null}
                    lastEventCreatedAt={
                      player.player.lastEvent?.createdAt
                        ? new Date(
                            player.player.lastEvent.createdAt
                          ).toLocaleDateString()
                        : null
                    }
                    symptoms={player.player.lastEvent?.symptoms || null}
                  />
                </Link>
              </div>
            ))}
          </>
        ) : (
          <Placeholder />
        )}
      </div>
    </>
  );
};

export default TeamPage;
