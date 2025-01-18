import React from "react";
import "./TransactionDetail.css";

const TransactionDetail = () => {
    
  return (
    <div className="transaction-detail">
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
      
      {/* Transaction Explorer */}
      <div className="transaction-explorer">
        <h2 className="explorer-title">Transaction Explorer</h2>
        <div className="transaction-info">
          <p><strong>NETWORK:</strong> Polygon</p>
          <p>
            <strong>TRANSACTION HASH:</strong>{" "}
            <a
              href="#"
              className="hash-link"
            >
              0xcd1bf584aef6ce024f0fc496958db2a52b1dc75624de9120c1a77f001c63eb227
            </a>
          </p>
          <p><strong>STATUS:</strong> Completed</p>
          <p><strong>BLOCK:</strong> #1203383214</p>
          <p><strong>TIME:</strong> 1 day ago (20 Nov, 2024 04:40:21 WIB)</p>
          <hr />
          <p><strong>FROM:</strong> 0x17cBeBb3A1ad014e9aEB4f68ec761F27f660274 (Seller)</p>
          <p><strong>TO:</strong> 0x132Jal23AA894dLe90Ad123BDc031B5F33d9813j (Courier)</p>
          <p><strong>FROM:</strong> 0x132Jal23AA894dLe90Ad123BDc031B5F33d9813j (Courier)</p>
          <p><strong>TO:</strong> 0x29661f8593560a3BD024131151A29923FA4d3de9 (Customer)</p>
          <hr />
          <p><strong>ITEM:</strong> 0x288112d5ade31e6dEfEd3d118D82313F3D61FA7 (Electronic) </p>
          <p><strong>STATUS:</strong> Delivered</p>
          <p><strong>TIME:</strong> Today (21 Nov, 2024 13:32:43 WIB)</p>
          <p><strong>LOCATION:</strong> Jakarta</p>
          <p><strong>ESTIMATED ARRIVAL:</strong> Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
