import React from "react";
import "./TopNav.css";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useAuth } from "../../context/Auth/context";
import { handleLogout } from "../../context/Auth/utils";

export const TopNav = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { isLoggedIn } = authState;

  return (
    <header className="nav-container black-color">
      <div className="flex-row gap p-l-3">
        <Link to="/">
          <div className="txt-xlg">KipNote</div>
        </Link>
      </div>
      <div className="p-r-1 cursorPointer">
        {isLoggedIn ? (
          <div className="p-r-1">
            <div>
              <BiLogOut
                className="gray-col"
                size={35}
                onClick={() => handleLogout(authDispatch, navigate)}
              />
            </div>
            <div className="txt-xs gray-col align-icon-pd">logout</div>
          </div>
        ) : (
          <div className="p-r-1 cursorPointer empty-notes-container icon-container">
            <Link to="/login">
              <div>
                <BiLogIn size={35} className="gray-col" />
              </div>
              <div className="txt-xs gray-col align-icon-pd ">login</div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
