import React from "react";
import "./Selection.css";
import Country from "./Country"
import Year from "./Year";
import Sector from "./Sector";
import SubSector from "./SubSector";
import Indicator from "./Indicator";
import Rank from "./Rank";
import {} from "@mui/material";

function Selection() {
  return (
    <>
      <div className="selection-container">
        <Country />
        <Year />
        <Sector />
        <SubSector />
        <Indicator />
        <Rank />
      </div>
    </>
  );
}

export default Selection;
