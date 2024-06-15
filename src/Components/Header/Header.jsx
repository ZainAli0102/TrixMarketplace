import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../../assets/Frame 1597878176.png'
import './Header.css'

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-dark   ">
          <Container fluid className='main-box'>
            <Navbar.Brand href="#" className='me-0'><img src={logo}/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start align-items-center links-nav flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className='nav-links-market'>Marketplace</Nav.Link>
                  <Nav.Link>Resource</Nav.Link>
                  <Nav.Link>About</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <i className='bi-search'></i>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 sreach-bar"
                    aria-label="Search"
                  />
                  <Button className='conect-btn'> Connect Wallet</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;