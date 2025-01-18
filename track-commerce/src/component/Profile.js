import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <header className="profile-header">
        <h1>TrackCommerce</h1>
      </header>

      {/* Profile Section */}
      <div className="profile-content">
        <div className="profile-card">
          {/* Avatar */}
          <div className="profile-avatar">
            <img
              src="https://via.placeholder.com/100"
              alt="User Avatar"
              className="avatar-image"
            />
          </div>

          {/* Account Info */}
          <div className="account-info">
            <p className="account-address">
              <strong>Address:</strong> 0x001323Jc9dFPoe6dEFde3d118D8F3D361FA782
            </p>
            <p className="account-status">
              <strong>Status:</strong> <span className="status-safe">Safe</span>
            </p>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="activity-section">
        {/* Sign Up History */}
        <div className="history-card">
          <h2>Sign Up History</h2>
          <div className="history-list">
            <div className="history-item">
              <p>17 November 2024 | 18:28 WIB</p>
              <p>You just logged in to your Ecommerce account on your Chrome device.</p>
            </div>
            <div className="history-item">
              <p>15 November 2024 | 13:12 WIB</p>
              <p>You just logged in to your Ecommerce account on your Mobile device.</p>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="history-card">
          <h2>Transaction History</h2>
          <div className="history-list">
            <div className="history-item">
              <p><strong>Belanja | 17 November 2024</strong></p>
              <p>ITEM: 0x288112dsae31ed6dEFde3d118 (Electronic)</p>
              <p>STATUS: Delivered</p>
            </div>
            <div className="history-item">
              <p><strong>Belanja | 15 November 2024</strong></p>
              <p>ITEM: 0x288112dsae31ed6dEFL122002 (Fashion)</p>
              <p>STATUS: Pending</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
