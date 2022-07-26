import React from "react";
import "./Trash.css";
import { GiNotebook } from "react-icons/gi";
import { Card, NoteCard } from "../../component";
import { useNotes } from "../../context/Notes/context";


export const Trash = () => {
  const {trash} = useNotes();
  return (
    <div>
      {trash.length === 0 ? (
        <div className="gray-light empty-notes-container">
          <GiNotebook size={150} color={"var(--primary-light)"} />
          <p className="txt-xlg">There is nothing in trash!!!</p>
        </div>
      ) : (
        <>
          <div className="d-grid notes-list">
            {trash?.map((item, idx) => {
              return (
                <div key={"trash" + idx}>
                  <NoteCard noteItem={item} isTrashPage={true} />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};
