import React from "react";
import "./Sidebar.scss";

function Sidebar(props) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-2" id="sideNav">
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none  mx-0 px-0">
              <img src="https://themewagon.github.io/profile-bootstrap/img/logo-white.png" alt="" className="img-fluid" style={{height: '50px'}}/>
            </span>
            <span className="d-none d-lg-block">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src="https://cdn.sanity.io/images/kts928pd/production/f4c7836ed6007da3af8264ae52c1f7133dd1fe5c-731x731.png"
                alt=""
              />
            </span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Skill
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">
                  Skill
                </a>
              </li>
            </ul>
          </div>

      </nav>
    </>
  );
}

export default Sidebar;
