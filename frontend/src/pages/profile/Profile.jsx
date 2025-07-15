import React, { useState, useEffect } from "react";
import "./profile.css";

const Profile = () => {
  const [formD, setFormD] = useState({
    companyName: "",
    phoneNumber: "",
    linkDN: "",
    skills: "",
    description: "",
  });

  const [preview, setPreview] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;
    fetch(`http://localhost:3001/api/profile/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("No profile found");
        return res.json();
      })
      .then((data) => {
        setFormD({
          companyName: data.companyName || "",
          phoneNumber: data.phoneNumber || "",
          linkDN: data.linkDN || "",
          skills: data.skill || "",
          description: data.description || "",
        });
        if (data.photo) {
          setPreview(data.photo);
          setImageData(data.photo);
        }
        setIsEditing(true);
      })
      .catch(() => {
        setIsEditing(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    setFormD({ ...formD, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("User not logged in!");
      return;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formD.phoneNumber)) {
      alert(`Please enter a valid mobile number.`);
      return;
    }

    try {
      const endpoint = isEditing
        ? `http://localhost:3001/api/profile/update`
        : "http://localhost:3001/api/profile/create";

      const method = isEditing ? "PUT" : "POST";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formD.companyName,
          phoneNumber: formD.phoneNumber,
          linkDN: formD.linkDN,
          skill: formD.skills,
          description: formD.description,
          photo: imageData || "",
          userId: parseInt(userId),
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(
          isEditing
            ? "Profile updated successfully!"
            : "Profile created successfully!"
        );
        setIsEditing(true);
      } else {
        alert(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Server error!");
    }
  };

  return (
    <div className="profile-root">
      <div className="navbar">
        <div className="logo bruno-ace-regular">Skill Sync</div>
        <div className="subnav poppins-regular">
          <div style={{ color: "white" }}>ABOUT US</div>
          <div style={{ color: "white" }}>HELP</div>
        </div>
      </div>

      <div className="profile-container">
        <form className="profile-left poppins-regular" onSubmit={handleSubmit}>
          <h2>
            <span className="black">MAKE YOUR </span>
            <span className="pink">PROFILE</span>
          </h2>

          <label>Enter Company Name</label>
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formD.companyName}
            onChange={handleChange}
          />

          <label>Enter Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone number"
            value={formD.phoneNumber}
            onChange={handleChange}
          />

          <label>Enter LinkedIn</label>
          <input
            type="text"
            name="linkDN"
            placeholder="LinkedIn URL"
            value={formD.linkDN}
            onChange={handleChange}
          />

          <label>Skills and Qualifications</label>
          <textarea
            name="skills"
            placeholder="e.g., JavaScript, React"
            value={formD.skills}
            onChange={handleChange}
          />

          <label>Describe Yourself</label>
          <textarea
            name="description"
            placeholder="Tell us about yourself"
            value={formD.description}
            onChange={handleChange}
          />

          <button type="submit">{isEditing ? "UPDATE" : "CREATE"}</button>
        </form>

        <div className="profile-right">
          <div className="image-container">
            <div className="circle">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="preview-image"
                />
              ) : (
                <span className="placeholder">Frame</span>
              )}
            </div>
            <label htmlFor="upload" className="upload-btn">
              +
            </label>
            <input type="file" id="upload" onChange={handleImageUpload} />
            <p className="upload-label">UPDATE PROFILE PHOTO</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
