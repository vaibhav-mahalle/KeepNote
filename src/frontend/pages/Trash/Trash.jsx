import React from "react";
import "./Trash.css";
import { GiNotebook } from "react-icons/gi";
import { Card } from "../../component";

export const Trash = () => {
  return (
    <div >
      <div className="gray-light empty-notes-container">
        <GiNotebook size={150} color={"var(--primary-light)"}/>
        <p className="txt-xlg">An empty sack cannot stand upright</p>
        <div>
          <Card/>
        </div>
      </div>
    </div>
  );
};
