import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Archieve, Home, Login, PageNotFound, SignUp, Trash } from '../pages';

export const RouterPath = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/trash" element={<Trash/>}/>
        <Route path="/archive" element={<Archieve/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}
