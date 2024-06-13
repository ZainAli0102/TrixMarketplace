import React from "react";
import { Container } from "react-bootstrap";
import bidimg from "../../assets/Group 1597877999.png";
import "./Main.css";
import styled from "styled-components";
import shares from "../../assets/List.png";

const Exlporebtn = styled.button`
  width: 137px;
  height: 53px;
  padding: 17px 19px 17px 19px;
  gap: 10px;
  border: #85d8eb;
  border-radius: 7.5px;
  background: linear-gradient(94.74deg, #85d8eb 9.96%, #1177e8 90.04%);
  font-size: 16px;
  font-weight: 600;
  line-height: 19.36px;
  text-align: left;
  color: #ffffff;
`;

function Main() {
  return (
    <>
      <Container fluid className="bg-img-color">
        <div className="HLHS-div">
          <div className="LHS-text">
            <h3>
              Discover, and <br />
              Collect Digital Art <br /> NFTs{" "}
            </h3>
            <p>
              Digital marketplace for crypto collectibles and non-
              <br />
              fungible tokens (NFTs). Buy, Sell, and discover exclusive
              <br /> digital assets.
            </p>
            <Exlporebtn>Explore Now</Exlporebtn>
          </div>
          <div className="biding-img">
            <img src={bidimg} />
          </div>
        </div>
        <div className="comunity-members">
          <div className="likes">
            <div className="artwork"> <h3>98K+</h3> <p className="text-center ">Artwork</p></div>
            <div className="artwork"> <h3>12k+</h3> <p className="text-center ">Auction</p></div>
            <div className="artwork"> <h3>15k+</h3> <p className="text-center ">Artist</p></div>
          </div>
          <div className="shares">
            <img src={shares} />
            <div>
              <h5>47k+</h5>
              <p>Community members</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Main;
