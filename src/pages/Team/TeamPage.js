import React from "react";
import "./TeamPage.css";
import { Link } from "react-router-dom";
import players from "../../data/players.json";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

const TeamPage = () => {
  return (
    <div className="teamPageWrap">
      {players.map((player) => (
        <div key={player.id} className="playerCardWrapper">
          <Link to={`/player/${player.id}`} style={{ textDecoration: "none" }}>
            <PlayerCard
              photo={player.photoPath || ""}
              name={`${player.firstName} ${player.lastName}`}
              position={player.position || null}
              number={player.jerseyNumber ? `#${player.jerseyNumber}` : null}
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
    </div>
  );
};

export default TeamPage;
