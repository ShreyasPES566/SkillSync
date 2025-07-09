import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-root">
      <h1>Welcome to Skill Sync</h1>
      <p><Link to="/profile" className="edit-link">EDIT PROFILE</Link></p>
    </div>
  );
};

export default Landing;
