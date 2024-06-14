import React from "react";
import "./NFTsFeatures.css";
import amazingimg from "../../assets/collectionimges.svg";
import girlimg from "../../assets/girl.svg";
import catimg from "../../assets/cat.svg";
import { Col, Row } from "react-bootstrap";
import userimg from "../../assets/Ellipse 95.png";

function NFTsFeatures() {
  return (
    <div className="bg-color-box">
      <h3>Collection Featured NFTs</h3>
      <div className="collection-divs-boxes">
        <div className="user-title">
          <img src={amazingimg}  className="user-static-img"/>
          <h3>Amazing Collection</h3>
          <Row>
            <Col className="user-text">
              <img src={userimg} />
              <p>by Arkhan</p>
            </Col>
            <Col className="d-flex align-items-center">
              <button className="total-btn">Total 54 Items</button>
            </Col>
          </Row>
        </div>
        <div className="user-title">
          <img src={girlimg}   className="user-static-img" />
          <h3>Amazing Collection</h3>
          <Row>
            <Col className="user-text">
              <img src={userimg} />
              <p>by Arkhan</p>
            </Col>
            <Col className="d-flex align-items-center">
              <button className="total-btn">Total 54 Items</button>
            </Col>
          </Row>
        </div>
        <div className="user-title">
          <img src={catimg}   className="user-static-img"/>
          <h3>Amazing Collection</h3>
          <Row>
            <Col className="user-text">
              <img src={userimg} />
              <p>by Arkhan</p>
            </Col>
            <Col className="d-flex align-items-center">
              <button className="total-btn">Total 54 Items</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default NFTsFeatures;
