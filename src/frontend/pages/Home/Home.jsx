import React from "react";
import "./Home.css";
import { Filter, TextEditor } from "../../component";
import { GiNotebook } from "react-icons/gi";


export const Home = () => {

  return (
    <div>
      <Filter />
      {false ? (<TextEditor/>):(<div>
        <div className="gray-light empty-notes-container">
          <GiNotebook size={150} color={"var(--primary-light)"}/>
          <p className="txt-xlg">An empty sack cannot stand upright</p>
        </div>
      </div>)}
    </div>
  );
};
