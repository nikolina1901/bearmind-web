import React from "react";
// Stylesheet import
import "./ActionBar.scss";

const ActionBar = ({ child }) => {
  return (
    <header className="action-bar-wrapper">
      <div className="action-bar">{child}</div>
    </header>
  );
};

export default ActionBar;
