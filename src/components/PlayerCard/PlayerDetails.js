import React from "react";
import { Avatar, Typography } from "@mui/material";
import { formatStrData } from "../../helper";

export const PlayerDetails = ({
  photo,
  number,
  name,
  position,
  status,
  contentWrapper,
  detailsWrapper,
}) => {
  const renderStatus = (status) => {
    const color = status === "IN RECOVERY" ? "error" : "green";
    return (
      <Typography variant="body1" fontWeight="bold" color={color}>
        {status}
      </Typography>
    );
  };

  return (
    <div className={contentWrapper}>
      <Avatar src={photo} sx={{ width: 100, height: 100 }} variant="square">
        {photo ? undefined : number}
      </Avatar>
      <div className={detailsWrapper}>
        <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Typography variant="body1" color="white" sx={{ fontWeight: "bold" }}>
          {position && number
            ? `${position} ${number}`
            : position || number || null}
        </Typography>
        {status && renderStatus(formatStrData(status))}
      </div>
    </div>
  );
};
