import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './landing.css';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="landing-root">
      <h1>Welcome to <span className="brand">Skill Sync</span></h1>
      <p>
        <Link to="/profile" className="edit-link">
          <button>Edit Profile</button>
        </Link>
      </p>
    </div>
  );
};

export default Landing;
