import React from "react";
import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter-container">
      <div>
        <h3>Filter By:</h3>
      </div>
        <h5>Date Added:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill txt-xs">latest</div>
        <div className="filter-pill txt-xs">oldest</div>
      </div>
        <h5>Priority:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill txt-xs">low</div>
        <div className="filter-pill txt-xs">medium</div>
        <div className="filter-pill txt-xs">high</div>
      </div>
        <h5>Labels:</h5>
      <div className="filter-pill-container">
        <div className="filter-pill txt-xs">label 123</div>
        <div className="filter-pill txt-xs">label 123</div>
        <div className="filter-pill txt-xs">label 123</div>
        <div className="filter-pill txt-xs">label 123</div>
      </div>
      <button>clear</button>
    </div>
  );
};
