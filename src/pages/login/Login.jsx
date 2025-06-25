import React from 'react'
import { useState } from 'react';
import './login.css'
import {Link} from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Email:', email);
    console.log('Password:', password);

    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    }

    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };
  return (
    <div className="root">
      <div className="navbar">
        <div
                   style={{
            margin:"1rem",
            width:"100%",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center"
          }}
        >
          <div
           
            style={{
                color:"#00ccff",
                fontWeight:"bold",
                fontSize:"2rem"
            }}
            className="bruno-ace-regular"
          >
            Skill Sync
          </div>
          <div className="subnav poppins-regular">
            <div>About</div>
            <div>Help</div>
          </div>
        </div>
      </div>

      <div className="half1"></div>
      <div className="half2">
        <div className="form_container poppins-regular">
          <div
                       style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column"
            }}
          >
            <h2 className="pink">HELLO!</h2>
            <h2 className="welcome">WELCOME BACK</h2>
          </div>
          <form className="login_form" onSubmit={handleSubmit}>
            <div className="input_container">
              <label for="email">Email</label>
            <input type="text" placeholder="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input_container">
              <label for="password">Password</label>
              <input type="password" placeholder="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="signup_container">
            <a href="forgot_password.html">Forgot Password</a>
            <Link to="/Register">Sign Up</Link>
        </div>
          
            <button type="submit">LOGIN</button>
          </form>
          
      </div>
    </div>
    </div>
  )
}

export default Login
