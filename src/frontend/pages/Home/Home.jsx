import React, { useEffect, useState } from "react";
import "./Home.css";
import { Filter, AddNote, NoteCard } from "../../component";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineFilterAlt, MdAddCircle } from "react-icons/md";
import { getAllNotes } from "../../context/Notes/utils";
import { useAuth } from "../../context/Auth/context";
import { useNotes } from "../../context/Notes/context";
import { useNavigate } from "react-router-dom";
import { useFilterNotes } from "../../context/Filter/context";

export const Home = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const navigate = useNavigate();
  const { authState } = useAuth();
  const { dispatchNotes } = useNotes();
  const { isLoggedIn } = authState;
  const { filteredNotes, stateFilter } = useFilterNotes();
  const { isFilterApplied } = stateFilter;

  useEffect(() => getAllNotes(isLoggedIn, dispatchNotes, navigate), []);
  return (
    <div>
      <div className="btn-home-container">
        <MdOutlineFilterAlt
          size={50}
          color="var(--primary-notes)"
          className="cursorPointer"
          onClick={() => setShowFilterModal((prev) => !prev)}
        />
        <MdAddCircle
          size={50}
          color="var(--primary-notes)"
          className="cursorPointer"
          onClick={() => setShowEditor((prev) => !prev)}
        />
      </div>
      {showFilterModal && (
        <div className="home-filter-container">
          <Filter />
        </div>
      )}
      {showEditor && <AddNote setShowEditor={setShowEditor} />}
      {!(showFilterModal || showEditor || filteredNotes.length !== 0) && (
        <div className="home-empty-container">
          <div className="gray-light empty-notes-container">
            <GiNotebook size={150} color={"var(--primary-light)"} />
            <p className="txt-xlg">An empty sack cannot stand upright</p>
          </div>
        </div>
      )}
      {
        <ul className="d-grid notes-list">
        {filteredNotes?.map((note, idx) => {
          return (
            <div key={"notecard" + idx}>
              <li className="notelist-no-bullet">
                <NoteCard
                  noteItem={note}
                  showEditor={showEditor}
                  setShowEditor={setShowEditor}
                />
              </li>
            </div>
          );
        })}
      </ul>
      }
    </div>
  );
};
