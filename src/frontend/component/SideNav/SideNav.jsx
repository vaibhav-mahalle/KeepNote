import React from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";
import { FiCheckCircle } from "react-icons/fi";
import { MdArchive, MdOutlineWork } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { FaTrash, FaShoppingBag } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export const SideNav = () => {
  const getActiveStyle = ({ isActive }) => {
    return isActive ? { backgroundColor: "#AECAEE" } : {};
  };
  return (
    <div className="sidenav-container">
      <NavLink to="/" style={getActiveStyle} className="sidebar-pill">
        <AiFillHome size={25} />
        <p className="p-l-1 btn-label">Home</p>
      </NavLink>

      <NavLink to="/archive" style={getActiveStyle} className="sidebar-pill">
        <MdArchive size={25} />
        <p className="p-l-1 btn-label">Archive</p>
      </NavLink>

      <NavLink to="/trash" style={getActiveStyle} className="sidebar-pill">
        <FaTrash size={25} />
        <p className="p-l-1 btn-label">Trash</p>
      </NavLink>

      <p className="p-1 p-l-2 gray-light txt-lg">Labels</p>

      <NavLink to="/" className="sidebar-pill">
        <FiCheckCircle size={25} />
        <p className="p-l-1 btn-label">Todo</p>
      </NavLink>

      <NavLink to="/" className="sidebar-pill">
        <MdOutlineWork size={25} />
        <p className="p-l-1 btn-label">Work</p>
      </NavLink>

      <NavLink to="/" className="sidebar-pill">
        <BsListCheck size={25} />
        <p className="p-l-1 btn-label">Chore</p>
      </NavLink>

      <NavLink to="/" className="sidebar-pill">
        <FaShoppingBag size={25} />
        <p className="p-l-1 btn-label">Shopping</p>
      </NavLink>
    </div>
  );
};
