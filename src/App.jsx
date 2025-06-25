import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import { ButtonClickCounter } from "./components/callback/UseCallBack";
import Usememo from "./components/usememo/Usememo";
import Dashboard from "./components/sTank/Dashboard";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <ButtonClickCounter/> */}
      {/* <Usememo/> */}
      <Dashboard/>
    </BrowserRouter>
  );
}

export default App;
