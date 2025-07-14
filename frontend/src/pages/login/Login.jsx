import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import loginImg from "../../assets/landingwith.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("userId", user.id);
        localStorage.setItem("username", user.username);
        localStorage.setItem("hasProfile", String(user.hasProfile));
        alert(`Welcome back, ${user.firstName || "user"}!`);
        if (user.hasProfile) {
          navigate("/landing");
        } else {
          navigate("/profile");
        }
      } else {
        alert(result.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };
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
  ];

  return (
    <div className="root">
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
            <div style={{ color: "white" }}>
              <Link to={"/about"}>About</Link>
            </div>
            <div style={{ color: "white" }}>
              <Link to={"/help"}>Help</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="half1"
        style={{
          backgroundImage: "../../assets/landing.with",
        }}
      ></div>
      <div className="half2">
        <div className="form_container poppins-regular">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2 className="pink">HELLO!</h2>
            <h2 className="welcome">WELCOME BACK</h2>
          </div>
          <form className="login_form" onSubmit={handleSubmit}>
            <div className="input_container">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_container">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="signup_container">
              <a href="#">Forgot Password</a>
              <Link to="/Register">Sign Up</Link>
            </div>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
