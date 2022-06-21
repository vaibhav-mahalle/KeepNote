import React, { useState } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";

export const TextEditor = () => {
  const [text, setText] = useState("");  
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
    setText(e.target.value);
  }
  return (<ReactQuill
    modules={modules}
    placeholder="Enter Note..."
    value={text}
    onChange={(e)=>handleChange(e)}
  />);
};
