import React, { useState } from "react";
import "./Home.css";
import { Filter, TextEditor } from "../../component";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineFilterAlt, MdOutlineAddCircleOutline } from "react-icons/md";

export const Home = () => {
  const [filterToggle, setFilterToggle] = useState(false);
  const [addToggle, setAddToggle] = useState(false);
  return (
    <div>
      <div className="btn-home-container">
        <MdOutlineFilterAlt
          size={50}
          color="var(--primary-notes)"
          className="cursorPointer"
          onClick={() => setFilterToggle((prev) => !prev)}
        />
        <MdOutlineAddCircleOutline
          size={50}
          color="var(--primary-notes)"
          className="cursorPointer"
          onClick={() => setAddToggle((prev) => !prev)}
        />
      </div>
      {filterToggle && <div className="home-filter-container"><Filter /></div>}
      {addToggle && <TextEditor />}
     { !(filterToggle || addToggle) && (<div className="home-empty-container">
        <div className="gray-light empty-notes-container">
          <GiNotebook size={150} color={"var(--primary-light)"} />
          <p className="txt-xlg">An empty sack cannot stand upright</p>
        </div>
      </div>)}
    </div>
  );
};
