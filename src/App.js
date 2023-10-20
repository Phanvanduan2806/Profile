import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Sidebar from "./Component/Sidebar/Sidebar";
import Main from "./Component/Main/Main";

function App() {
  return (
    <>
      <div className="d-lg-flex d-block align-items-lg-center">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
