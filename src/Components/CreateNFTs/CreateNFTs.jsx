import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./CreateNFTs.css";
import exportimg from "../../assets/export.png";
import Form from "react-bootstrap/Form";
import addimg from '../../assets/Frame 1597878487.png'
import addicon from '../../assets/fluent_add-16-filled.png'
import bgcolor from '../../assets/Ellipse 604.png'

export default function CreateNFTs() {
  return (
    <Container fluid className="bg-div">
      <Row className="bg-color">
        <Col className="createnfts">
          <h3>Create an NFT</h3>
          <p className="createnfts-para">
            Once your item is minted you will not be able to change any of its
            information
          </p>
          <div className="drag-n-drop">
            <div className="drag-n-drop-imgs">
              <img src={exportimg} />
              <h3>Drag and Drop Media</h3>
              <p className="browser">Browse Files</p>
              <p className="max-size-text">Max Size: 50MB</p>
              <p className="max-size-text">JPG, PNG, GIF, SVG, MP4</p>
            </div>
          </div>
        </Col>
        <img src={bgcolor} className="bg-color-img"/>
        <Col className="RHS-padding">
          <div >
            <h3 className="title-heading">Collection *</h3>
            <div className="create-collection-box">
              <img src={addimg} />
              <p>Create a New Collection</p>
            </div>
            <p className="collections-eligible mb-0">
              Not all collections are eligible. <span> Learn More</span>
            </p>
          </div>
          <Form.Label htmlFor="inputPassword5" className="title-headings">Name *</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            placeholder="Name your NFT"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Label htmlFor="inputPassword5" className="title-heading">Supply *</Form.Label>
          <Form.Control
            type="text"
            id="inputPassword5"
            placeholder="1"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="title-heading">Description</Form.Label>
            <Form.Control
              as="textarea"
            id="inputPassword5"
              rows={3}
              placeholder="Enter your Description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="title-heading">External Link</Form.Label>

            <Form.Control type="email"            id="inputPassword5"  placeholder="https://collection.io/item/123" />
          </Form.Group>
          <h3 className="title-heading">Traits</h3>
          <p className="rorem-text">Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
          <p className="add-trait">
            <img src={addicon} />
          Add Trait</p>
          <div className="d-flex justify-content-end">
          <button className="create-btn">Create</button></div>
        </Col>
      </Row>
    </Container>
  );
}
