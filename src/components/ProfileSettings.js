import React, { useState } from 'react';
import axios from 'axios';
import './ProfileSettings.css';

const ProfileSettings = () => {
  const [bio, setBio] = useState(localStorage.getItem('bio') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [profileImage, setProfileImage] = useState(null);
  const token = localStorage.getItem('token');
  
  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bio', bio);
    formData.append('address', address);
    if (profileImage) {
      formData.append('profileImage', profileImage);
    }
  
    try {
      const response = await axios.put('https://serialreporter-oobf.vercel.app/api/auth/updateProfile', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Profile updated successfully!');
      // Update local storage with new values
      localStorage.setItem('bio', bio);
      localStorage.setItem('address', address);
      if (profileImage) {
        localStorage.setItem('profileImage', response.data.profileImage); // Assuming the server returns the new image path
      }
    } catch (err) {
      console.error('Error updating profile:', err);
    }
  };

  return (
    <div className="profile-settings">
      <h2>Update Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us something about yourself"
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Your address"
          />
        </div>
        <div className="form-group">
          <label>Profile Image</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileSettings;