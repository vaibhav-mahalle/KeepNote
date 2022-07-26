import React, { useEffect } from "react";
import "./Archieve.css";
import { GiNotebook } from "react-icons/gi";
import { useNotes } from "../../context/Notes/context";
import { useAuth } from "../../context/Auth/context";
import { useNavigate } from "react-router-dom";
import { getArchivedNotes } from "../../context/Notes/utils";
import { NoteCard } from "../../component";

export const Archieve = () => {
  const { archives, dispatchNotes} = useNotes();
  const {authState} = useAuth();
  const {isLoggedIn} = authState;
  const navigate = useNavigate();
  useEffect(() => getArchivedNotes(isLoggedIn, dispatchNotes, navigate), []);
  return (
    <div>
      {archives.length === 0 ? (
        <div className="gray-light empty-notes-container">
          <GiNotebook size={150} color={"var(--primary-light)"} />
          <p className="txt-xlg">Nothing in Archives!!!</p>
        </div>
      ) : (
        <>
          <div className="d-grid notes-list">
            {archives?.map((item, idx) => {
              return (
                <div key={"archive" + idx}>
                  <NoteCard noteItem={item} isArchivePage={true} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
