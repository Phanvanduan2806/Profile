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
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="#">
                <div class="btn__social">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default About;
