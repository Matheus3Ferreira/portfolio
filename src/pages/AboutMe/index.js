import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="page-container">
      <Row className="row-spacing title-row">
        <Col>
          <h1>This is me, Matheus</h1>
        </Col>
        <Col>
          <h1>These are my objectives</h1>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <p>
            Development of systems Student 
            at Universidade Paulista (UNIP)
          </p>
        </Col>
        <Col>
          <p>Make my first personal site</p>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <p>
            I live in Santos, São Paulo, Brazil. (UNIP)
          </p>
        </Col>
        <Col>
          <p>Give a travel to my grandmother</p>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <p>
            I like write code, and think about a
            logic solutions for problems.
          </p>
        </Col>
        <Col>
          <p>Learn more than yesterday</p>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <p>
            Now I want to learn how to make
            
            great things with Javascript, and
            
            feel gratified with my creations.
          </p>
        </Col>
        <Col>
          <p>Get my first job with development of systems</p>
        </Col>
      </Row>
    </Container>
  );
}
