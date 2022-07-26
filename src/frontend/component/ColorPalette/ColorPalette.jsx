
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth/context";
import { useNotes } from "../../context/Notes/context";
import { modifyNote } from "../../context/Notes/utils";
import "./colorpalette.css";

export function ColorPalette({ isEdit, setShowEditor, note, setShowPalette }) {
    const {authState} = useAuth();
    const {isLoggedIn} = authState;
  const { note_editor, dispatchNotes } = useNotes();
  const shadeNames = [
    "card-shade-1",
    "card-shade-2",
    "card-shade-3",
    "card-shade-4",
    "card-shade-5",
  ];

  const shadeColors = [
    "var(--white-color)",
    "var(--pastel-shade-yellow)",
    "var(--pastel-shade-green)",
    "var(--pastel-shade-blue)",
    "var(--pastel-shade-red)",
  ];

  const setNewColorOnCard = color => {
    if (isEdit) {
      const noteModified = {
        ...note_editor,
        cardColor: color,
      };
      modifyNote(
        isLoggedIn,
        noteModified,
        dispatchNotes,
        navigate,
        setShowEditor,
        true
      );
      setShowPalette(false);
    } else {
      dispatchNotes({
        type: "SET_NOTE_EDITOR",
        payload: { key: "cardColor", value: color },
      });
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="children-center grid-gap card-palette">
        {shadeNames.map((item, idx) => (
          <div
            key={idx}
            className={`shade-ball ${item}`}
            onClick={() => {
              setNewColorOnCard(shadeColors[idx]);
            }}
          ></div>
        ))}
      </div>
    </>
  );
}