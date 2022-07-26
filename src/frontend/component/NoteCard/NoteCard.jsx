import "./notecard.css";
import { BsVectorPen } from "react-icons/bs";
import { IoMdTrash } from "react-icons/io";
import {
    MdPalette,
    MdArchive,
    MdRestore,
    MdUnarchive,
  } from "react-icons/md";
  import { useState } from "react";
  
  import { ColorPalette } from "../ColorPalette/ColorPalette";
  import { useNotes } from "../../context/Notes/context";
  import { useNavigate } from "react-router-dom";
  import {
    deleteNote,
    moveNoteToTrash,
    restoreFromTrash,
    moveNoteToArchive,
    moveNoteToTrashFromArchive,
    restoreFromArchive,
  } from "../../context/Notes/utils";
import { useAuth } from "../../context/Auth/context";
  
  export function NoteCard({
    noteItem,
    setShowEditor,
    isTrashPage,
    isArchivePage,
  }) {
    const {authState} = useAuth();
    const [showPalette, setShowPalette] = useState(false);
    const { _id, title, cardColor, priority, body, labels, createdAt } = noteItem;
    const { isLoggedIn } = authState;
    const { dispatchNotes } = useNotes();
    const navigate = useNavigate();
  
    const changeCardColor = item => {
      setShowPalette(prev => !prev);
      dispatchNotes({
        type: "EDIT_NOTE",
        payload: item,
      });
    };
    return (
      <>
        <div
          className="notecard children-stacked p-rel"
          key={_id}
          style={{ backgroundColor: cardColor }}
        >
          <div className="notecard-badge txt-xs p-l-1">{priority}</div>
          <div className="notecard-header d-flex">
            <div className="notecard-title p-l-1">{title}</div>
          </div>
  
          <div className="notecard-content">
            <p
              className="note-desc"
              dangerouslySetInnerHTML={{
                __html: body,
              }}
            ></p>
          </div>
          <div className="notecard-details">
            <div className="d-flex gap-sm notecard-labels">
              {noteItem?.labels?.map((label, idx) => {
                return (
                  <span className="text-sm notecard-label" key={"tag" + idx}>
                    {label}
                  </span>
                );
              })}
            </div>
            <div className="text-sm info-created">Created at: {createdAt}</div>
          </div>
  
          {showPalette && (
            <ColorPalette
              isEdit={true}
              setShowEditor={setShowEditor}
              note={noteItem}
              setShowPalette={setShowPalette}
            />
          )}
          <div className="notecard-action d-flex note-actions">
            {!isTrashPage && !isArchivePage && (
              <button
                className="notebtn notebtn-link"
                onClick={() => {
                  changeCardColor(noteItem);
                }}
              >
                <MdPalette size={20} />
              </button>
            )}
            {isTrashPage ? (
              <button
                className="notebtn notebtn-link"
                onClick={() => {
                  restoreFromTrash(isLoggedIn, noteItem, dispatchNotes, navigate);
                }}
              >
                <MdRestore size={20} />
              </button>
            ) : (
              !isArchivePage && (
                <button
                  className="notebtn notebtn-link"
                  onClick={() => {
                    setShowEditor(true);
                    dispatchNotes({
                      type: "EDIT_NOTE",
                      payload: noteItem,
                    });
                  }}
                >
                  <BsVectorPen size={20} />
                </button>
              )
            )}
            {isArchivePage ? (
              <button
                className="notebtn notebtn-link"
                onClick={() =>
                  restoreFromArchive(isLoggedIn, _id, dispatchNotes, navigate)
                }
              >
                <MdUnarchive size={20} />
              </button>
            ) : (
              !isTrashPage && (
                <button
                  className="notebtn notebtn-link"
                  onClick={() =>
                    moveNoteToArchive(
                      isLoggedIn,
                      noteItem,
                      dispatchNotes,
                      navigate
                    )
                  }
                >
                  <MdArchive size={20} />
                </button>
              )
            )}
            <button
              className="notebtn notebtn-link"
              onClick={() => {
                if (isTrashPage) {
                  return deleteNote(isLoggedIn, _id, dispatchNotes, navigate);
                } else if (isArchivePage) {
                  return moveNoteToTrashFromArchive(
                    isLoggedIn,
                    _id,
                    dispatchNotes,
                    navigate
                  );
                }
                return moveNoteToTrash(
                  isLoggedIn,
                  noteItem,
                  dispatchNotes,
                  navigate
                );
              }}
            >
              <IoMdTrash size={20} />
            </button>
          </div>
        </div>
      </>
    );
  }