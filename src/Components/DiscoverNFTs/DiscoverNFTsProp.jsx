import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./DiscoverNFTs.css";
import monky from "../../assets/monky.svg";
import girl from "../../assets/VRgirl.svg";
import dog from "../../assets/dog.svg";
import skull from "../../assets/skull.svg";
import etherum from "../../assets/ethereum 2.svg";

const images = [
  { src: monky, name: "ArtCrypto" },
  { src: girl, name: "This NFT" },
  { src: dog, name: "NameCrypto" },
  { src: skull, name: "KingCrypto" },
];

const shuffleImages = (images) => {
  const shuffledImages = [];
  for (let i = 0; i < 4; i++) {
    const rowImages = [...images];
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * rowImages.length);
      shuffledImages.push(rowImages.splice(randomIndex, 1)[0]);
    }
  }
  return shuffledImages;
};

function DiscoverNFTsProp() {
  const shuffledImages = shuffleImages(images);

  return (
    <Container fluid className="text-white-font ">
      {Array.from({ length: 4 }).map((_, rowIndex) => (
        <Row key={rowIndex} className="nfts-boxes-divs-stlye">
          {shuffledImages
            .slice(rowIndex * 4, rowIndex * 4 + 4)
            .map((img, colIndex) => (
              <Col
                key={colIndex}
                className="p-0 d-flex justify-content-center"
              >
                <Card className="image-card">
                  <Card.Img variant="top" src={img.src} alt={img.name} />
                  <Card.Body>
                    <Card.Title className="title-names">{img.name}</Card.Title>
                    <div className="card-info">
                      <Card.Text className="d-flex ether-img ">
                        <span className="d-flex">
                        <img src={etherum}  />
                       <p>0.25 ETH</p>
                        </span>
                      </Card.Text>
                      <Card.Text className="card-OF-font-size">1 of 321</Card.Text>
                    </div>
                    <div className="button-box">
                   
                      {" "}
                      <Button variant="primary" className="time-left">3h 50m 2s left</Button>
                      <p className="mb-0">Place a bid</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      ))}
    </Container>
  );
}

export default DiscoverNFTsProp;
