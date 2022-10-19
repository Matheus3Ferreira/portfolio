import {Row, Col} from "react-bootstrap";
import FormEmail from "../../components/FormEmail";
import "./style.css"

export default function Contact() {
    return (
        <div className="page-container">
            <Row>
                <Col className="information-container">
                    <Row>
                        <h1>Contact Information</h1>
                    </Row>
                </Col>
                <FormEmail />
            </Row>
        </div>
    )
}