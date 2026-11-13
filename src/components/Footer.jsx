
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import footerImg from '../assets/images/img6.jpg';

const Footer = () => {
  return (
    <footer
  className="glass-footer"
  style={{ backgroundImage: `url(${footerImg})` }}
>
      <Container>
        <Row className="gy-4">

          <Col lg={4} md={6}>
            <h3 className="footer-logo">
              GLASS <span>Plants</span>
            </h3>
            <p className="footer-text">
              Bring nature into your home with beautiful indoor
              plants. Create a peaceful and refreshing space.
            </p>
          </Col>

          <Col lg={2} md={6}>
            <h5>Explore</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#plants">Shop</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h5>Help</h5>
            <ul>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h5>Get In Touch</h5>
            <p className="footer-text">
              Stay connected with us for more greenery and inspiration.
            </p>
            <p className="footer-contact">Email: hello@glassplants.com</p>
            <p className="footer-contact">Follow us on Instagram</p>
          </Col>

        </Row>

        <div className="footer-bottom">
          <p>© 2026 GLASS Plants. All rights reserved.</p>
          <p>Made with love for nature 🌿</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
