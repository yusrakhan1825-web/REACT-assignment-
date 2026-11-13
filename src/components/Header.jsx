
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar expand="lg" className="glass-navbar">
      <Container fluid>
        <Navbar.Brand href="#home" className="glass-logo">
          GLASS <span>Plants</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="glass-navbar-nav" />

        <Navbar.Collapse id="glass-navbar-nav">
          <Nav className="ms-auto glass-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#plants">Shop</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Nav className="ms-lg-4">
            <Nav.Link href="#plants" className="nav-explore">
              Explore Plants
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
