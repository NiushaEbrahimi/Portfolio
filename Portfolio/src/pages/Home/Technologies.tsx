import { Container, Row, Col } from "react-bootstrap";
import CircleComponent from "../../components/CircleComponent.tsx";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass, FaGit, FaGithub, FaJs, FaBootstrap, FaWordpress, FaPhp, FaLaravel, FaVuejs, FaJava, FaPython } from "react-icons/fa";

function Technologies() {
    // TODO: this should be rendered when the page is getting to the section of it
    return(
        <Container className="vh-100 mt-5 d-flex flex-column justify-content-center align-items-center text-center">
            <h2>Technologies i know and Use</h2>
            <Row className="w-100 d-flex justify-content-center align-items-center">
                <Col xs={4} className="">
                    <h4 className="w-100">Web</h4>
                    <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                        <CircleComponent percent={80} name={"react"}/>
                        <CircleComponent percent={90} name={"html"}/>
                        <CircleComponent percent={90} name={"css"}/>
                    </Container>
                </Col>
                <Col xs={4} className="">
                    <h4 className="w-100">ML</h4>
                    <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <CircleComponent percent={80} name={"react"}/>
                        <CircleComponent percent={90} name={"html"}/>
                    </Container>
                </Col>
                <Col xs={4} className="">
                    <h4 className="w-100">Machine Vision</h4>
                    <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                        <CircleComponent percent={80} name={"react"}/>
                        <CircleComponent percent={90} name={"html"}/>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Technologies;