import { createContext, useContext } from "react";

const NotesContext = createContext(null);

const NotesProvider = ({ children }) => {
  return (
    <NotesContext.Provider value={0}>{children}</NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
