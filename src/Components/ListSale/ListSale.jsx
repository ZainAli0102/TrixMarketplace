import React from "react";
import "./ListSale.css";
import { Col, Container, Row } from "react-bootstrap";
import squidDoll from "../../assets/Doll.png";
import tick from "../../assets/Frame.png";
import leftarrow from "../../assets/arrow-left.png";
import { Form } from "react-bootstrap";
import i from "../../assets/ph_info (1).png";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import thumbup from "../../assets/like-tag.png";

export default function ListSale() {
  return (
    <Container fluid className="bg-color">
      <Row className="divs-gap">
        <Col className="col-div p-0">
          <h3 className="list">
            <img src={leftarrow} /> List For Sale
          </h3>
          <div className="DIV-MANAGE duration">
            <h3>Choose a Type of Sale</h3>
            <div className="choice-box">
              <Form>
                {["radio"].map((type) => (
                  <div key={`reverse-${type}`} className="mb-3">
              <div>
                <div className="choice-box-divs">
                  <div>
                    <h3>Fixed Price</h3>
                    <p>The item is listed at the price you set</p>
                  </div>
                  <Form.Check
                      reverse
                      name="group1"
                      type={type}
                      id={`reverse-${type}-1`}
                    />
                  {/* <Form>
                    {[ "radio"].map((type) => (
                      <div key={`reverse-${type}`} className="mb-3">
                        <Form.Check
                          reverse
                          name="group1"
                          type={type}
                          id={`reverse-${type}-1`}
                        />
                      </div>
                    ))}
                  </Form> */}
                </div>
              </div>
              <div>
                <div className="choice-box-divs2">
                  <div>
                    <h3>Sell to Highest Bidder</h3>
                    <p>
                      The item is listed for auction. <span> Learn More</span>
                    </p>
                  </div>
                  <Form.Check
                      reverse
                      name="group1"
                      type={type}
                      id={`reverse-${type}-1`}
                    />
                  {/* <Form>
                    {[ "radio"].map((type) => (
                        <Form.Check
                          reverse
                          name="group2"
                          type={type}
                          id={`reverse-${type}-2`}
                        />
                  
                    ))}
                  </Form> */}
                </div>
              </div>
              </div>
                ))}
              </Form>
            </div>
            
          </div>
          <div>
            <h3 className="duration">
              Set a Price <img src={i} alt="" />
            </h3>

            <div className="set-price-box">
              <div className="price-box">
                <h3>Floor</h3>
                <p>0.0044 ETH</p>
              </div>
              <div className="price-box">
                <h3>Top Trait</h3>
                <p>0.149 ETH</p>
              </div>
            </div>
            <div className="price-set-title">
              <h3 className="price-set">Starting Price</h3>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Amount"
                  aria-label="ETH"
                  aria-describedby="btnGroupAddon"
                  className="amount"
                />
                <InputGroup.Text id="btnGroupAddon">ETH</InputGroup.Text>
              </InputGroup>
            </div>
          </div>
          <div>
            <h3 className="duration">Duration</h3>
            <InputGroup>
              <DropdownButton
                variant="outline-secondary"
                title="1 Month"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
            <InputGroup>
              <DropdownButton
                variant="outline-secondary"
                title="More Options"
                id="input-group-dropdown-3"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </div>
          <div className="summary">
            <h3>Summary</h3>
            <div className="summary-text">
              <p className="mb-0">Listing Price</p>
              <p className="mb-0">-- ETH</p>
            </div>
            <div className="summary-text">
              <p className="mb-0">Trix fee</p>
              <p className="mb-0">2.5%</p>
            </div>
            <div className="summary-text-creator">
              <p className="mb-0">Creator Earnings</p>
              <p className="mb-0">6.55%</p>
            </div>
          </div>
          <div className="create-box">
            <div className="creater-earn-div-boxes">
              <h3>6.55</h3>
              <p>%</p>
            </div>
            <div className="creater-earn-div-boxes">
              <h3>Custom</h3>
              <p>%</p>
            </div>
          </div>
          <div className="thubup">
            <img src={thumbup} />
            <div className="suggest-box">
              <h3>Show your support for this creator</h3>
              <p>They Suggested Creator Earnings of 6.55%</p>
            </div>
          </div>
          <div className="earn-potential">
            <h3 className="mb-0">Total Potential Earnings</h3>
            <h3 className="mb-0">-- ETH</h3>
          </div>
          <div className="complete-btn">
            <button>Complete Listings</button>
          </div>
        </Col>
        {/* <Col className="p-0">
          <div className="bg-card">
            <div className="squid-doll">
              <img src={squidDoll} />
            </div>
            <div className="bg-crd-lights">
              <h3>Red Light Green Light #22178</h3>
              <p>
                Squid Game Series 2 <img src={tick} />
              </p>
              <h3>-- ETH</h3>
              <div className="accept-btn">
                <button>Accept Offer | 0.0397 ETH</button>
              </div>
            </div>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}
