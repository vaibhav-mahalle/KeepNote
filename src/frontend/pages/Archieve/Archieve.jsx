import React from "react";
import "./Archieve.css";
import { GiNotebook } from "react-icons/gi";

export const Archieve = () => {
  return (
    <div>
      <div className="gray-light empty-notes-container">
      <GiNotebook size={150} color={"var(--primary-light)"}/>
      <p className="txt-xlg">An empty sack cannot stand upright</p>
      </div>
    </div>
  );
};
