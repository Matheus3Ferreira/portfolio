import "./style.css";
import {Row, Col} from "react-bootstrap"

export default function ProjectContainer(props) {
    const title = props.title;
    const text = props.text;
    const hrefImage = props.hrefImage;
    const type = props.type;

    return (
        <Row className={`${type} project-container px-4 py-4`}>
            <Col className="text-project-container px-5" xs={{order: type === "project-light" ? "first" : "last"}}>
                    <h1 className="title-project">{title}</h1>
                    <p className="text-justify">
                        {text}
                    </p>
            </Col>
            <Col className="d-flex justify-content-center">
                <img src={hrefImage} alt="printscreen of project" className="image-project"/>
            </Col>
        </Row>
    )
}