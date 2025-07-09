import React, {useState} from "react";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
import './landing.css'
const Landing = () => {
    return(
        <>
          <p><Link to="/profile">EDIT PROFILE</Link></p>
        </>
    );
};
export default Landing;