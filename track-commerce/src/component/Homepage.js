import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div className="track-commerce-container">
    <div className="track-commerce">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">TrackCommerce</h1>
        <nav className="header-nav">
          <a href="#project">Project</a>
          <a href="#profile">Profile</a>
        </nav>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for token, addresses, or entities..."
          className="search-input"
        />
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Time</th>
              <th>ID Transaction</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
            </tr>
            <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
              <tr>
              <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
              </tr>
              <tr>
              <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
              </tr>
              <tr>
              <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
              </tr>
              <tr>
              <td className="clickable"><Link to="/transaction-detail">Just Now</Link></td>
              <td>TR99102981989391333</td>
              <td className="clickable"><Link to="/profile">0x001323Jc9DfPo82</Link></td>
              <td className="clickable">0x002234Jd770Kf223</td>
              <td className="status">On Progress</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
