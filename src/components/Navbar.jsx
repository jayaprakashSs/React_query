import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
import RegularFetch from './RegularFetch';
import '../app.css'; // Ensure app.css is imported
import ReactQueryFetch from './ReactQueryFetch';
import QueryByClick from './QueryByClick';
import QueryById from './QueryById';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="" className="nav-link">Home</NavLink>
        <NavLink to="/regular" className="nav-link">Regular Fetch</NavLink>
        <NavLink to="/react-query" className="nav-link">React query Fetch</NavLink>
        <NavLink to="/query-click" className="nav-link"> Query By Click</NavLink>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/regular" element={<RegularFetch />} />
        <Route path="/react-query" element={<ReactQueryFetch />} />
        <Route path="/react-query/:postId" element={<QueryById />} />
        <Route path="/query-click" element={<QueryByClick/>} />
        <Route path="/query-id" element={<QueryById/>} />
      </Routes>
    </>
  );
};

export default Navbar;
