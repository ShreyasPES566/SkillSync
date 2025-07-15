import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import shreyas from "../../assets/shreyas.jpg";
import isha from "../../assets/isha.jpeg";

const About = () => {
  const links = [
    {
      id: 1,
      name: "ABOUT",
      path: "/about",
    },
    {
      id: 2,
      name: "HELP",
      path: "/help",
    },
    {
      id: 3,
      name: "EDIT PROFILE",
      path: "/edit-profile",
    },
    {
      id: 4,
      name: "LOGOUT",
      path: "/logout",
    },
    {
      id: 5,
      name: "HOME",
      path: "/landing",
    },
  ];

  return (
    <>
      <div className="about_wrapper">
        <div className="black_cover"></div>
        <div className="navbar">
          <div
            style={{
              margin: "1rem",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                color: "#00ccff",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
              className="bruno-ace-regular"
            >
              SKILLSYNC
            </div>
            <div className="subnav poppins-regular">
              {links.map((link) => {
                return <Link to={link.path}>{link.name}</Link>;
              })}
            </div>
          </div>
        </div>
        <div className="about_content">
          <div className="main_header poppins-regular">
            WELCOME TO{" "}
            <span className="heading_span bruno-ace-regular">SKILLSYNC</span>{" "}
            COMMUNITY
          </div>
          <div className="para_container poppins-regular"></div>
          <div className="introduction poppins-regular">
            <div class="intro-text">
              <div
                class="one"
                style={{
                  backgroundImage: "../../assets/plant.svg",
                }}
              >
                OUR MISSION
                <div className="littletext">
                  help employees connect with other employees equipped with the
                  required skillset
                </div>
              </div>
              <div class="two">
                TARGET AUDIENCE
                <div className="littletext">
                  We serve corporate teams, educational institutions, and
                  faculty members
                </div>
              </div>
              <div class="three">
                OUR VISION
                <div className="littletext">
                  To make our application a go-to tool for corporate employees
                </div>
              </div>
              <div class="four">
                TEAM
                <div className="littletext">
                  Founded by Isha and Shreyas, this project stems from a shared
                  passion for solving real-world problems through technology.
                </div>
              </div>
            </div>
            {/* <a
              href="https://www.linkedin.com/in/shreyas-v-8a8577297"
              target="_blank"
            >
              <img src={shreyas}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/praishaa-499137357"
              target="_blank"
            >
              <img src={isha}></img>
            </a> */}
          </div>
          <div
            className="contactus"
            style={{
              height: "100dvh",
            }}
          >
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/praishaa-499137357

"
                >
                  <i className="fab fa-facebook-f icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-google-plus-g icon"></i>
                </a>
              </li>
            </ul>
            contact
          </div>
        </div>
      </div>
      {/* <div class="holographic-container">
        <div class="holographic-card">
          <h2>WELCOME TO SKILL SYNC</h2>
        </div>
      </div> */}
    </>
  );
};

export default About;