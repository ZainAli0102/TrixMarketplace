import React from "react";
import "./DiscoverNFTs.css";
import "./DiscoverNFTsProp";
import DiscoverNFTsProp from "./DiscoverNFTsProp";

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
          <button className="filter-btn">
            <span className="d-flex justify-content-center align-items-center">
              <i className="bi-filter" width="24" height="24"></i>{" "}
              <p className="mb-0"> All Filters</p>
            </span>
          </button>
        </div>
      </div>
      
      <DiscoverNFTsProp />
      <div className="d-flex justify-content-center align-items-center">
        <button className="more-NFTs "> More NFTs</button>
      </div>
    </div>
  );
}
