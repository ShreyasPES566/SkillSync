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
        <div className="para_container poppins-regular">
          simplifying employee collaboration in corporate environments.
        </div>
        <div className="introduction poppins-regular">
          <div class="intro-text">
            we are Isha Prabhu and Shreyas V, two passionate cse students. This
            web application is the result of our summer internship project at
            ZiniosEdge Software Technologies.
          </div>
          <a
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
