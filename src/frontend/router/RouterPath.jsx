import React from "react";
import { Route, Routes } from "react-router-dom";
import { RequiresAuth } from "../component";
import { Archieve, Home, Login, PageNotFound, SignUp, Trash } from "../pages";

export const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/trash"
        element={
          <RequiresAuth>
            <Trash />
          </RequiresAuth>
        }
      />

      <Route
        path="/archive"
        element={
          <RequiresAuth>
            <Archieve />
          </RequiresAuth>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
