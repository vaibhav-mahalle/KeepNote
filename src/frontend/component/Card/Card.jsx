import React from "react";
import "./Card.css";
import { MdColorLens, MdRestoreFromTrash } from "react-icons/md";
import { BsVectorPen } from "react-icons/bs";
import { ImFolderDownload, ImFolderUpload } from "react-icons/im";
import { IoMdTrash } from "react-icons/io";

export const Card = () => {
  return (
    <div className="noteCard">
      <div className="txt-lg p-small p-l-1">
        Title
      </div>
      <div className="noteContent">
        <p className="note-desc p-1">Contentsdjkfoa;dsiguasdjfnalishflkasjdhgukaygh.kshgjlsdbhfgnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</p>
      </div>
      <div className="noteCardIcons">
        <div className="noteIcon">
          <MdColorLens size={20} />
        </div>
        <div className="noteIcon">
          <BsVectorPen size={20} />
        </div>
        <div className="noteIcon">
          <ImFolderDownload size={20} />
        </div>
        <div className="noteIcon">
          <IoMdTrash size={20} />
        </div>
      </div>
    </div>
  );
};
