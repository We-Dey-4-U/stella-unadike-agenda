import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileSettings from './ProfileSettings';
import DashboardSidebar from './DashboardSidebar';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showProfileSettings, setShowProfileSettings] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  // Fetch dashboard data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('https://serialreporter-oobf.vercel.app/api/auth/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log('Dashboard Data:', response.data); // Debugging the response
        setDashboardData(response.data);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchDashboardData();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  // Handle profile image upload
  const handleProfileImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const response = await axios.put(
          'https://serialreporter-oobf.vercel.app/api/auth/updateProfile',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        console.log('Profile Image Response:', response.data); // Debugging the upload response
        setDashboardData((prevData) => ({
          ...prevData,
          profileImage: response.data.profileImage, // Assuming profileImage is returned correctly
        }));
      } catch (err) {
        console.error('Error uploading profile image:', err);
      }
    }
  };

  // Handle loading state and fallback image
  if (loading) return <p className="loading">Loading...</p>;

  const defaultImage = "https://your-default-image.jpg"; // Add a fallback image URL
  const profileImageUrl = dashboardData?.profileImage 
    ? `https://serialreporter-oobf.vercel.app${dashboardData.profileImage}` 
    : defaultImage;

  console.log('Profile Image URL:', profileImageUrl); // Debugging the URL construction

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <label htmlFor="profile-image-upload" className="header-profile-image-label">
          <img
            src={profileImageUrl} // Use the dynamic profile image or fallback
            alt="User Profile"
            className="header-profile-image"
          />
          <input
            type="file"
            id="profile-image-upload"
            style={{ display: 'none' }}
            onChange={handleProfileImageUpload}
          />
        </label>
      </header>

      <div className="dashboard-content">
        <DashboardSidebar setShowProfileSettings={setShowProfileSettings} />

        <main className="dashboard-main">
          {showProfileSettings ? (
            <ProfileSettings />
          ) : (
            <div className="user-dashboard">
              <div className="user-profile">
                <p><strong>Username:</strong> {localStorage.getItem('username')}</p>
                <p><strong>Email:</strong> {localStorage.getItem('email')}</p>
                <p><strong>Bio:</strong> {dashboardData.bio}</p>
                <p><strong>Address:</strong> {dashboardData.address}</p>
              </div>

              <div className="user-products">
                <h2>Your Products</h2>
                <ul>
                  {dashboardData.products.map((product) => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                  ))}
                </ul>
              </div>

              <div className="user-orders">
                <h2>Your Orders</h2>
                <ul>
                  {dashboardData.orders.map((order) => (
                    <li key={order._id}>{order.productName} - {order.status}</li>
                  ))}
                </ul>
              </div>

              <div className="user-revenue">
                <h2>Total Revenue</h2>
                <p>${dashboardData.totalRevenue}</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;