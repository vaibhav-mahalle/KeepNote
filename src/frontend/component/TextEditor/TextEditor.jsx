import React, { useState } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";
import { MdCheckCircle, MdOutlineCancel } from "react-icons/md";

export const TextEditor = () => {
  const [text, setText] = useState({ title: "", note: "" });
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["clean"],
    ],
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setText({ ...text, [inputName]: inputValue });
  };
  console.log(text);
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
            value={text.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="title">
            <span className="txt-lg">Priority:</span>
            <select name="priority" className="txt-sm">
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </label>
        </div>
        <div className="primary-col txt-lg cursorPointer">Add tags</div>
      </div>
      <div>
        <ReactQuill
          modules={modules}
          name="note"
          placeholder="Enter Note..."
          value={text.note}
          onChange={(e) => setText({ ...text, note: e })}
        />
      </div>
      <div className="editor-btn-container">
        <div className="primary-col cursorPointer">
          <MdCheckCircle size={30} />
        </div>
        <div className="primary-col cursorPointer">
          <MdOutlineCancel size={30} />
        </div>
      </div>
    </div>
  );
};
