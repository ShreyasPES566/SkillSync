import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, username, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !username || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/")
      } else {
        alert(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="signup-root">
      <div className="navbar">
        <div className="nav-content">
          <div className="logo bruno-ace-regular">Skill Sync</div>
          <div className="subnav poppins-regular">
            <div>ABOUT US</div>
            <div>HELP</div>
          </div>
        </div>
      </div>

      <div className="half1"></div>

      <div className="half2">
        <div className="form_container poppins-regular">
          <h2 className="form-heading">
            <span className="pink">CREATE </span>
            <span className="white">YOUR ACCOUNT</span>
          </h2>

          <p>Already signed up? <Link to="/">LOGIN</Link></p>

          <form className="signup_form" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email" value={formData.email} onChange={handleChange} />

            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="Enter Your Username" value={formData.username} onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />

            <button type="submit">NEXT</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
