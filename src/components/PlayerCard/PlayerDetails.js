import React from "react";
// Helper function import
import { formatStrData } from "../../helper";
// Material-UI imports
import { Chip, Avatar, Typography } from "@mui/material";
// Custom style imports
import colors from "../../style/colors";

export const PlayerDetails = ({
  photo,
  number,
  name,
  position,
  status,
  contentWrap,
  detailsWrap,
}) => {
  const renderStatus = (status) => {
    const color = status === "IN RECOVERY" ? "error" : "success";
    return (
      <Chip
        label={status}
        color={color}
        size="medium"
        sx={{ fontWeight: "bold", mt:0.5 }}
      />
    );
  };

  return (
    <div className={contentWrap}>
      <Avatar
        src={photo}
        sx={{
          width: 100,
          height: 100,
          backgroundColor: !photo ? colors.mainBackground : colors.transparent,
        }}
        variant="square"
      >
        {photo ? undefined : number}
      </Avatar>
      <div className={detailsWrap}>
        <Typography
          variant="h5"
          color={colors.white}
          sx={{ fontWeight: "bold" }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          color={colors.white}
          sx={{ fontWeight: "bold" }}
        >
          {position && number
            ? `${number} ${formatStrData(position)}`
            : formatStrData(position) || number || null}
        </Typography>
        {status && renderStatus(formatStrData(status))}
      </div>
    </div>
  );
};
