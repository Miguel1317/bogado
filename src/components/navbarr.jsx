import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Navbarr() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="espacio" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="About">About</Nav.Link>
            <Nav.Link as={Link} to="Work">Work</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="redes">
          <a className="sociales" href="https://www.instagram.com/petgroomerboost/">
            <FaInstagram className="sociales" />
          </a>
          <a className="sociales" href="https://www.facebook.com/petgroomerboost/">
            <FaFacebook className="sociales" />
          </a>
          <a className="sociales" href="tel:03541 27-6955">
            <FaWhatsapp className="sociales" />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbarr;


