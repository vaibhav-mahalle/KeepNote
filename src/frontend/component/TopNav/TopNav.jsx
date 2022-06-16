import React from "react";
import "./TopNav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";

export const TopNav = () => {
  const navigate = useNavigate();
  return (
    <header className="nav-container black-color">
      <div className="flex-row gap p-l-3">
        <AiOutlineMenu size={25} />
        <Link to={"/"}>
          <div className="txt-xlg">KipNote</div>
        </Link>
      </div>
      {true ? (
        <div className="p-r-1">
          <Link to={"/login"}>
            <BiLogOut size={35} />
          </Link>
        </div>
      ) : (
        <div className="p-r-1"><BiLogIn size={35} /></div>
      )}
    </header>
  );
};
