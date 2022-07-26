import { useNotes } from "../Notes/context";
import { createContext, useContext, useReducer } from "react";
import { compose, filterByPriority, filterByTags, sortByDate, filterBySearchText } from "./utils";
import { filterReducer } from "./reducer";

const FilterNotesContext = createContext();

const FilterNotesProvider = ({ children }) => {
  const [stateFilter, dispatchFilter] = useReducer(filterReducer, {
    searchText: "",
    sortByDate: "",
    priority: "",
    tags: [],
    isFilterApplied: false,
  });

  const { notes } = useNotes();
  const filterNotes = compose(
    stateFilter,
    sortByDate,
    filterByPriority,
    filterByTags,
    filterBySearchText
  )(notes);

  return (
    <FilterNotesContext.Provider
      value={{
        stateFilter,
        dispatchFilter,
        filteredNotes: filterNotes,
      }}
    >
      {children}
    </FilterNotesContext.Provider>
  );
};

const useFilterNotes = () => useContext(FilterNotesContext);

export { useFilterNotes, FilterNotesProvider };
