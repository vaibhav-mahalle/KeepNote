import React from "react";
import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter-container">
      <div>
        <h3>Filter By:</h3>
      </div>
      <h5 className="gray-col">Labels:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill gray-col txt-xs">Todo</div>
        <div className="filter-pill gray-col txt-xs">Work</div>
        <div className="filter-pill gray-col txt-xs">Chore</div>
        <div className="filter-pill gray-col txt-xs">Shopping</div>
      </div>
      
      <h5 className="gray-col">Priority:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill gray-col txt-xs">low</div>
        <div className="filter-pill gray-col txt-xs">medium</div>
        <div className="filter-pill gray-col txt-xs">high</div>
      </div>
      
      <h5 className="gray-col">Date Added:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill gray-col txt-xs">latest</div>
        <div className="filter-pill gray-col txt-xs">oldest</div>
      </div>
      
      <div className="p-1 filter-btn-container">
        <button className="filter-pill-btn primary-note-bg txt-xs">clear</button>
        <button className="filter-pill-btn primary-col txt-xs">cancel</button>
      </div>
    </div>
  );
};
