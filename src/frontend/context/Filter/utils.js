import { ToastMsg } from "../../component";

const compose =
  (state, ...functions) =>
  (data) => {
    return functions.reduce((acc, cur) => cur(state, acc), data);
  };

const sortByDate = (state, data) => {
  switch (state.sortByDate) {
    case "oldest":
      return [...data].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    case "latest":
      return [...data].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    default:
      return data;
  }
};

const filterByPriority = (state, data) => {
  switch (state.priority) {
    case "high":
      return data.filter((item) => item.priority === "high");
    case "medium":
      return data.filter((item) => item.priority === "medium");
    case "low":
      return data.filter((item) => item.priority === "low");
    default:
      return data;
  }
};

const filterByTags = (state, data) => {
  return state.tags.length === 0
    ? data
    : data.filter((note) =>
        note.labels.some((tag) => state.tags.indexOf(tag) >= 0)
      );
};

const filterBySearchText = (state, data) =>
  data.filter((item) => item.title.includes(state.searchText));

const isLabelInNote = (note_labels, item) =>
  note_labels?.find((i) => i === item) ? true : false;

const addLabels = (item, dispatchNotes) => {
  dispatchNotes({
    type: "SET_NOTE_TAG",
    payload: item,
  });
};

const removeLabels = (item, note_labels, dispatchNotes) => {
  note_labels = note_labels.filter((l) => l !== item);
  dispatchNotes({
    type: "SET_NOTE_EDITOR",
    payload: {
      key: "labels",
      value: note_labels,
    },
  });
};

const addNewTag = (tagName, tags, dispatchNotes, setTagName) => {
  if (tagName) {
    if (tags.find((tag) => tag === tagName)) {
      ToastMsg(`Tag "${tagName}" already exists`, "error");
      return;
    }
    dispatchNotes({ type: "ADD_NEW_TAG", payload: tagName });
    setTagName("");
    ToastMsg("Tag created successfully.", "success");
  }
};

export {
  compose,
  sortByDate,
  filterByPriority,
  filterByTags,
  filterBySearchText,
  isLabelInNote,
  addLabels,
  addNewTag,
  removeLabels,
};
