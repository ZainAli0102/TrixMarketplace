import React from "react";
import { Container } from "react-bootstrap";
import sideimg from "../../../assets/sells.svg";
import './CreateNFTs.css'
import bgcolor from '../../../assets/Ellipse 604.png'


function CreateNFTs() {
  return(
    <Container fluid className="bg-color">
    <div className="main-div">
      <div lg={6} className="main-color-div">
      <img src={bgcolor} className="bg-colrs-effect"/>
        <img src={sideimg} className="side-img" />
      </div>
      <div lg={6} className="create-and-sell">
      <h3>Create and sell your NFTs</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac <br/> phasellus placerat a pellentesque tellus sed egestas. Et tristique<br/> dictum sit tristique sed non. Lacinia lorem id consectetur pretium<br/> diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
      <button className="signup-btn">Sign Up Now</button>
      </div>
    </div>
  </Container>
  )
}

export default CreateNFTs;
