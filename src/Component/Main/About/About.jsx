import React from "react";
import "./About.scss";

function About(props) {
  return (
    <>
      <div className="about">
        <div className="wrapper__about">
          <div className="about__logo">
            <img
              className="img-fluid"
              src="https://themewagon.github.io/profile-bootstrap/img/logo-white.png"
              alt=""
            />
          </div>
          <h1 className="about__name mb-0">
            Phan văn <span>duẩn</span>
          </h1>
          <span className="about__subheading mb-5">
            THE NEXT BIG IDEA IS WAITING FOR ITS NEXT BIG CHANGER WITH THEMSBIT
          </span>
          <span className="mb-5" style={{ maxWidth: "630px", color: "gray" }}>
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </span>
          <ul className="list-inline mb-0 d-flex">
            <li>
              <a href="#" className="text-decoration-none">
                <div className="btn__social">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-decoration-none">
                <div className="btn__social">
                <i class="fa-solid fa-envelope"></i>
                </div>
              </a>
            </li>
            <li className="ms-3">
              <a href="#" className="text-decoration-none">
                <div className="btn__social">
                <i class="fa-solid fa-phone"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
