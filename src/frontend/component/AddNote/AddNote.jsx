import React, { useState } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./addNote.css";
import { MdCheckCircle, MdOutlineCancel } from "react-icons/md";
import { useAuth } from "../../context/Auth/context";
import { useNotes } from "../../context/Notes/context";
import { useNavigate } from "react-router-dom";
import { modifyNote, createNote } from "../../context/Notes/utils";
import { TextEditor } from "../TextEditor/TextEditor";

export const AddNote = ({ setShowEditor }) => {
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn } = authState;
  const { note_editor, dispatchNotes } = useNotes();
  const navigate = useNavigate();
  const { _id, title, cardColor, priority, body, labels } = note_editor;

  const handleNewNoteChange = ({ target }) => {
    dispatchNotes({
      type: "SET_NOTE_EDITOR",
      payload: { key: target.name, value: target.value },
    });
  };

  const saveNotes = () => {
    console.log(isLoggedIn,"savenote");
    if (_id) {
      modifyNote(
        isLoggedIn,
        note_editor,
        dispatchNotes,
        navigate,
        setShowEditor,
        false
      );
    } else
      createNote(
        isLoggedIn,
        note_editor,
        dispatchNotes,
        navigate,
        setShowEditor
      );
  };

  const cancelSave = () => {
    dispatchNotes({
      type: "CLEAR_EDITOR",
    });
    setShowEditor(false);
  };

  return (
    <div className="editor-container">
      <div className="tags-container p-b-1">
        <div>
          <label htmlFor="title" className="txt-lg">
            Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => handleNewNoteChange(e)}
          />
        </div>
        <div>
          <label htmlFor="title">
            <span className="txt-lg">Priority:</span>
            <select
              name="priority"
              value={priority}
              onChange={(e) => handleNewNoteChange(e)}
              className="txt-sm"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
        </div>
        <div className="primary-col txt-lg cursorPointer">Add tags</div>
      </div>
      <div>
        <TextEditor
          value={body}
          setValue={(e) =>
            dispatchNotes({
              type: "SET_NOTE_EDITOR",
              payload: { key: "body", value: e },
            })
          }
        />
      </div>
      <div className="editor-btn-container">
        <div className="primary-col cursorPointer">
          <MdCheckCircle
            size={30}
            onClick={
              saveNotes}
          />
        </div>
        <div className="primary-col cursorPointer">
          <MdOutlineCancel
            size={30}
            onClick={() => {
              cancelSave();
            }}
          />
        </div>
      </div>
    </div>
  );
};
