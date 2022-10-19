import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export const Header = () => {
  return (
    <div className="navbar-container">
      <Navbar expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="/"><h1 className="header-title">DotFerreira.com</h1></Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="mx-auto">
              <Nav.Item>
                <Nav.Link href="about-me"><p className="header-text">About Me</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="projects"><p className="header-text">Projects</p></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="contact"><p className="header-text">Contact</p></Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link href="feedback" className=""><p className="header-text">Give me your feedback</p></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>

      </Navbar>
      <div className="elipse">
      </div>
    </div>
  )
};
