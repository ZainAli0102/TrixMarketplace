import React from "react";
import './DiscoverNFTs.css';


export default function DiscoverNFTs() {
  return (
    <div className="bg-img">
      <h3>Discover more NFTs</h3>\
      <div className="boxes">
        <div className="items-buttons">
          <button className="selection-btn-items ">All Categories</button>
          <button className="selection-btn-items ">Art</button>
          <button className="selection-btn-items ">Celebrities</button>
          <button className="selection-btn-items ">Games</button>
          <button className="selection-btn-items ">Sport</button>
          <button className="selection-btn-items ">Music</button>
          <button className="selection-btn-items ">Crypto</button>
        </div>
        <div>
            <button className="filter-btn"><span><i className="bi-filter"></i> All Filters</span></button>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="more-NFTs ">  More NFTs</button></div>

    </div>
  );
}
