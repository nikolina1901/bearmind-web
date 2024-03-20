import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { formatStrData } from "../../helper";

const LastEvents = ({ title, listTitle, list, listWrapper }) => {
  const renderTypography = (text) => (
    <Typography variant="body1" color="#FFF" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  );

  return (
    <Card
      sx={{
        backgroundColor: "#ffffff10",
        width: "300px",
      }}
    >
      <CardHeader
        sx={{
          backgroundColor: "#ffffff10",
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
            <ul key={index} className={listWrapper}>
              <li>{formatStrData(item)}</li>
            </ul>
          ))}
        </CardContent>
      )}
    </Card>
  );
};

export default LastEvents;
