import React, { useEffect, useState } from "react";
import "./Home.css";
import { Filter, AddNote } from "../../component";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineFilterAlt, MdAddCircle } from "react-icons/md";
import { getAllNotes } from "../../context/Notes/utils";
import { useAuth } from "../../context/Auth/context";
import { useNotes } from "../../context/Notes/context";
import { useNavigate } from "react-router-dom";
import { useFilterNotes } from "../../context/Filter/context";

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
        <MdAddCircle
          size={50}
          color="var(--primary-notes)"
          className="cursorPointer"
          onClick={() => setAddToggle((prev) => !prev)}
        />
      </div>
      {filterToggle && <div className="home-filter-container"><Filter /></div>}
      {addToggle && <AddNote />}
     { !(filterToggle || addToggle) && (<div className="home-empty-container">
        <div className="gray-light empty-notes-container">
          <GiNotebook size={150} color={"var(--primary-light)"} />
          <p className="txt-xlg">An empty sack cannot stand upright</p>
        </div>
      </div>)}
    </div>
  );
};
