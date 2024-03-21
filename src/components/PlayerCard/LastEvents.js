import React from "react";
// Helper function import
import { formatStrData } from "../../helper";
// Material-UI imports
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
// Custom style imports
import colors from "../../style/colors";

const LastEvents = ({ title, listTitle, list, listWrap }) => {
  const renderTypography = (text) => (
    <Typography
      variant="body1"
      color={colors.white}
      sx={{ fontWeight: "bold" }}
    >
      {text}
    </Typography>
  );

  return (
    <Card
      sx={{
        backgroundColor: colors.whiteOpacity,
        width: "450px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: colors.whiteOpacity,
          padding: 0,
          pl: 1,
          textAlign: "left",
        }}
        title={title ? renderTypography(title) : null}
        subheader={
          title && listTitle
            ? renderTypography(listTitle)
            : renderTypography("Symptoms reported: N/A")
        }
      />
      {list && (
        <CardContent
          className="scrollable-container"
          sx={{ maxHeight: "50px", overflowY: "auto", pt: 0.5 }}
        >
          {list.map((item, index) => (
            <ul key={index} className={listWrap}>
              <li>{formatStrData(item)}</li>
            </ul>
          ))}
        </CardContent>
      )}
    </Card>
  );
};

export default LastEvents;
