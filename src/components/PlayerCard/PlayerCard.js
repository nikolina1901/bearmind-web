import React from "react";
import { Card, CardContent } from "@mui/material";
import "./PlayerCard.css";
import LastEvents from "./LastEvents";
import { PlayerDetails } from "./PlayerDetails";

const PlayerCard = ({
  photo,
  name,
  position,
  number,
  status,
  lastEventCreatedAt,
  symptoms,
}) => {
  return (
    <Card
      className="playerCard"
      sx={{ backgroundColor: "#ffffff10", borderRadius: 4 }}
    >
      <CardContent className="playerCardContent">
        <PlayerDetails
          photo={photo}
          name={name}
          position={position}
          number={number}
          status={status}
          detailsWrapper="playerDetails"
          contentWrapper="playerCardContent"
        />
        <LastEvents
          title={lastEventCreatedAt}
          listTitle="Symptoms reported:"
          list={symptoms}
          listWrapper="symptomsList"
        />
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
