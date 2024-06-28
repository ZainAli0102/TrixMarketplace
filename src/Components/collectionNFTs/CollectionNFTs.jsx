import React from "react";
import "./CollectionNFTs.css";
import triximgmetaverse from "../../assets/PFP 350 x 350.png";
import popularityicon from "../../assets/Frame.png";
import { Row, Col } from "react-bootstrap";

function CollectionNFTs() {
  return (
    <>
    <div className="bg-img-for-metaverse">
      <div className="main-div">
        <div className="metaverse-text">
          <img src={triximgmetaverse} />
          <h3>
            Trix for Metaverse <img src={popularityicon} />
          </h3>
        </div>
        <div className="RHS-text">
          <div>
            <h3>15ETH</h3> <p>Total Volume</p>
          </div>
          <div>
            <h3>0.0001ETH</h3> <p>Floor Price</p>
          </div>
          <div>
            <h3>2%</h3> <p>Listed</p>
          </div>
          <div>
            <h3>1,483 (25%)</h3> <p>Owner (Unique)</p>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-dark text-white">dkmsd</div>
    </>
  );
}

export default CollectionNFTs;
