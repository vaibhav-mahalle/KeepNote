import React, { useState } from "react";
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";


export const TextEditor = (props) => {
  const { value, setValue } = props;
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

  
  const formats = [
    // "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];


  return (
    <>
      <ReactQuill
        theme="snow"
        placeholder="Add a note"
        value={value}
        onChange={setValue}
        formats={formats}
        modules={modules}
        {...props}
      />
    </>
  );
};
