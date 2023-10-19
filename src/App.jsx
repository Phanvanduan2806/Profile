import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Main from "./Component/Main/Main";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
