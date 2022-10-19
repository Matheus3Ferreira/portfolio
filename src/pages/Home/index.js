import {  Container, Stack, Row, Col } from "react-bootstrap";
import BtnWhite from "../../components/BtnWhite";
import "../../global/style.css";
import "./style.css";

export default function Home() {
  return (
    <Container className="page-container">
        <Row>
            <Col>
                <Stack gap={3}> 
                    <h1 className="title-home">
                        Hello, I'm Matheus Ferreira,
                    <br />
                        Student and web developer.
                    </h1>
                    
                    <p>
                        Click here and meet more about me, my objectives and who I am. 👇
                    </p>
                    <BtnWhite>About me</BtnWhite>
                </Stack>
            </Col>
            <Col className="d-flex justify-content-center">
                <img className="picture" alt="Matheus da Silva Ferreira" src="https://www.comprerural.com/wp-content/uploads/2019/11/DSC_0390-2-640x486.jpg"></img>
            </Col>
        </Row>
    </Container>
  );
}
