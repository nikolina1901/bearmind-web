import React from "react";
// Component imports
import LastEvents from "./LastEvents";
import { PlayerDetails } from "./PlayerDetails";
// Material-UI imports
import { Card, CardContent } from "@mui/material";
// Stylesheet import
import "./PlayerCard.scss";
// Custom style imports
import colors from "../../style/colors";

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
      className="player-card"
      sx={{ backgroundColor: colors.whiteOpacity, borderRadius: 4 }}
    >
      <CardContent className="player-card-content">
        <PlayerDetails
          photo={photo}
          name={name}
          position={position}
          number={number}
          status={status}
          detailsWrap="player-details"
          contentWrap="player-card-content"
        />
        <LastEvents
          title={lastEventCreatedAt}
          listTitle="Symptoms reported:"
          list={symptoms}
          listWrap="symptoms-list"
        />
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
