import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import sideimg from "../../assets/createnftsimg.svg";
import './CreateNFTs.css'

function CreateNFTs() {
  return(
    <Container fluid className="bg-color">
    <div className="main-div">
      <div lg={6}>
        <img src={sideimg} className="side-img" />
      </div>
      <div lg={6} className="create-and-sell">
      <h3>Create and sell your NFTs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac <br/> phasellus placerat a pellentesque tellus sed egestas. Et tristique<br/> dictum sit tristique sed non. Lacinia lorem id consectetur pretium<br/> diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
      <button className="signup-btn">Sign Up Npw</button>
      </div>
    </div>
  </Container>
  )
}

export default CreateNFTs;
