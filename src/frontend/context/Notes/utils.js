import axios from "axios";
import { ToastMsg} from "../../component";

const getArchivedNotes = async (isLoggedIn, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    try {
      const response = await axios.get("/api/archives", {
        headers: {
          authorization: localStorage.getItem("UserToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "GET_ARCHIVED_NOTES",
          payload: response.data.archives,
        });
      } else {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } catch (err) {
      ToastMsg(
        "Some error occured, please try again later",
         "error");
    }
  } else {
    navigate("/signup");

    ToastMsg(
      "Please login to continue.",
       "warning");
  }
};

const moveNoteToArchive = async (isLoggedIn, note, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    const path = `/api/notes/archives/${note._id}`;
    try {
      const response = await axios.post(
        path,
        { note },
        {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        }
      );
      if (response.status === 201) {
        dispatchNotes({
          type: "MOVE_TO_ARCHIVE",
          payload: response.data,
        });
        ToastMsg(
          "Note moved to archives.",
           "success");
      } else {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } catch (err) {
      ToastMsg(
        "Some error occured, please try again later",
         "error");
    }
  } else {
    navigate("/signup");

    ToastMsg(
      "Please login to continue.",
       "warning");
  }
};

const restoreFromArchive = async (isLoggedIn, id, dispatchNotes, navigate) => {
  if (isLoggedIn) {
    const path = `/api/archives/restore/${id}`;
    try {
      const response = await axios.post(
        path,
        {},
        {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        }
      );
      if (response.status === 200) {
        dispatchNotes({
          type: "MOVE_TO_ARCHIVE",
          payload: response.data,
        });
        ToastMsg(
          "Note unarchived successfully",
           "success");
      } else {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } catch (err) {
      ToastMsg(
        "Some error occured, please try again later",
         "error");
    }
  } else {
    navigate("/signup");
    ToastMsg(
      "Please login to continue.",
       "warning");
  }
};

const moveNoteToTrashFromArchive = async (
  isLoggedIn,
  id,
  dispatchNotes,
  navigate
) => {
  if (isLoggedIn) {
    const path = `/api/archives/delete/${id}`;
    try {
      const response = await axios.delete(path, {
        headers: {
          authorization: localStorage.getItem("UserToken"),
        },
      });
      if (response.status === 200) {
        dispatchNotes({
          type: "DELETE_FROM_ARCHIVE",
          payload: { archives: response.data.archives, note_id: id },
        });

        ToastMsg(
          "Note moved to trash.",
           "success");
      } else {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } catch (err) {
      ToastMsg(
        "Some error occured, please try again later",
         "error");
    }
  } else {
    navigate("/signup");
    ToastMsg(
      "Please login to continue.",
       "warning");
  }
};

const getAllNotes = async (isLoggedIn, dispatchNotes, navigate) => {
    if (isLoggedIn) {
      try {
        const response = await axios.get("/api/notes", {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        });
        if (response.status === 200) {
          dispatchNotes({
            type: "GET_ALL_NOTES",
            payload: response.data.notes,
          });
        } else {
          ToastMsg(
            "Some error occured, please try again later",
            "error"
);
        }
      } catch (err) {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } else {
      navigate("/login");
  
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };
  
  const createNote = async (
    isLoggedIn,
    note,
    dispatchNotes,
    navigate,
    setShowEditor
  ) => {
    if (!note.title) {
      ToastMsg(
        "Please add a title to your note",
         "error");
      return;
    }
    if (isLoggedIn) {
      note.createdAt = new Date().toLocaleString();
      console.log(note);
      console.log(localStorage.getItem("UserToken"),"localstorage");
      try {
        const response = await axios.post(
          "/api/notes",
          { note },
          {
            headers: {
              authorization: localStorage.getItem("UserToken"),
            },
          }
        );
        console.log(response,"response")
        if (response.status === 201) {
          dispatchNotes({
            type: "CREATE_NOTE",
            payload: response.data.notes,
          });
          setShowEditor(false);
  
          ToastMsg(
            "Added new note successfully",
            "success"
);
        } else {
          ToastMsg(
            "Some error occured in creating note, please try again later",
            "error"
);
        }
      } catch (err) {
        console.log(err);
        ToastMsg(
          "Some error occured cannot post notes, please try again later",
           "error");
      }
    } else {
      navigate("/signup");
  
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };
  
  const moveNoteToTrash = async (isLoggedIn, note, dispatchNotes, navigate) => {
    if (isLoggedIn) {
      const path = `/api/notes/${note._id}`;
      try {
        const response = await axios.delete(path, {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        });
        if (response.status === 200) {
          dispatchNotes({
            type: "MOVE_TO_TRASH",
            payload: { notes: response.data.notes, note: note },
          });
  
          ToastMsg(
            "Note moved to trash.",
            "success"
);
        } else {
          ToastMsg(
            "Some error occured, please try again later",
            "error"
);
        }
      } catch (err) {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } else {
      navigate("/signup");
  
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };
  
  const modifyNote = async (
    isLoggedIn,
    note,
    dispatchNotes,
    navigate,
    setShowEditor,
    isOnlyColorChange
  ) => {
    if (isLoggedIn) {
      const path = `/api/notes/${note._id}`;
      try {
        const response = await axios.post(
          path,
          { note },
          {
            headers: {
              authorization: localStorage.getItem("UserToken"),
            },
          }
        );
        if (response.status === 201) {
          dispatchNotes({
            type: "CREATE_NOTE",
            payload: response.data.notes,
          });
  
          if (!isOnlyColorChange) {
            setShowEditor(false);
            ToastMsg(
              "Modified note.",
              "success"
  );
          }
        } else {
          ToastMsg(
            "Some error occured, please try again later",
            "error"
);
        }
      } catch (err) {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } else {
      navigate("/signup");
  
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };
  
  const deleteNote = async (isLoggedIn, id, dispatchNotes, navigate) => {
    if (isLoggedIn) {
      const path = `/api/notes/${id}`;
      try {
        const response = await axios.delete(path, {
          headers: {
            authorization: localStorage.getItem("UserToken"),
          },
        });
        if (response.status === 200) {
          dispatchNotes({
            type: "DELETE_NOTE",
            payload: { notes: response.data.notes, delete_id: id },
          });
          ToastMsg(
            "Note deleted successfully",
            "success"
);
        } else {
          ToastMsg(
            "Some error occured, please try again later",
            "error"
);
        }
      } catch (err) {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } else {
      navigate("/signup");
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };
  
  const restoreFromTrash = async (isLoggedIn, note, dispatchNotes, navigate) => {
    if (isLoggedIn) {
      const path = `/api/notes`;
      try {
        const response = await axios.post(
          path,
          { note },
          {
            headers: {
              authorization: localStorage.getItem("UserToken"),
            },
          }
        );
        if (response.status === 201) {
          dispatchNotes({
            type: "RESTORE_FROM_TRASH",
            payload: { notes: response.data.notes, restore_id: note._id },
          });
          ToastMsg(
            "Note restored successfully",
            "success"
);
        } else {
          ToastMsg(
            "Some error occured, please try again later",
            "error"
);
        }
      } catch (err) {
        ToastMsg(
          "Some error occured, please try again later",
           "error");
      }
    } else {
      navigate("/signup");
      ToastMsg(
        "Please login to continue.",
         "warning");
    }
  };

export {
  getAllNotes,
  createNote,
  moveNoteToTrash,
  modifyNote,
  deleteNote,
  restoreFromTrash,
  moveNoteToArchive,
  restoreFromArchive,
  getArchivedNotes,
  moveNoteToTrashFromArchive,
};