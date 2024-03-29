import { createContext, useContext, useReducer } from "react";
import {notesReducer} from './reducer';

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {

  const [stateNotes, dispatchNotes] = useReducer(notesReducer, {
    notes: [],
    archives: [],
    trash: [],
    tags: ["home", "work", "daily", "other", "weekly"],
    note_editor: {
      title: "",
      body: "",
      priority: "medium",
      labels: [],
      createdAt: "",
      cardColor: "white",
    },
  });
  return (
    <>
      <NotesContext.Provider
        value={{
          notes: stateNotes.notes,
          archives: stateNotes.archives,
          trash: stateNotes.trash,
          note_editor: stateNotes.note_editor,
          tags: stateNotes.tags,
          dispatchNotes,
        }}
      >
        {children}
      </NotesContext.Provider>
    </>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
