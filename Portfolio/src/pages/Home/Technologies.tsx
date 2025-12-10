import { Container, Row, Col } from "react-bootstrap";
import CircleComponent from "../../components/CircleComponent.tsx";
// import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass, FaGit, FaGithub, FaJs, FaBootstrap, FaWordpress, FaPhp, FaLaravel, FaVuejs, FaJava, FaPython } from "react-icons/fa";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import stylesHome from "../../assets/css/Home/home.module.css"
import techBackground from "../../../public/images/techBackground.webp"
function Technologies() {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    // TODO: this should be rendered when the page is getting to the section of it
    return(
        <div ref={ref} 
            className={`vh-100 mt-5 d-flex flex-column justify-content-center align-items-center text-center ${ entry?.isIntersecting ? styles.fadeIn : ""}`}
        >
            <div className={stylesHome.techBackgroundConatiner}>
                <img className={stylesHome.techBackground} src={techBackground} alt="" />
            </div>
            {entry?.isIntersecting ? (
                <Container>
                    <h2>Technologies i know and Use</h2>
                    <Row className="w-100 d-flex justify-content-center align-items-center">
                        <Col xs={4} className="">
                            <h4 className="w-100">Web</h4>
                            <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                                <CircleComponent percent={80} name={"react"} colorCircle="var(--color-8)"/>
                                <CircleComponent percent={60} name={"html"} colorCircle="var(--color-8)"/>
                                <CircleComponent percent={90} name={"css"} colorCircle="var(--color-8)"/>
                            </Container>
                        </Col>
                        <Col xs={4} className="">
                            <h4 className="w-100">ML</h4>
                            <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr", padding : "0% 20%"}}>
                                <CircleComponent percent={80} name={"react"} colorCircle="var(--color-6)"/>
                                <CircleComponent percent={40} name={"html"} colorCircle="var(--color-6)"/>
                            </Container>
                        </Col>
                        <Col xs={4} className="">
                            <h4 className="w-100">Machine Vision</h4>
                            <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr", padding : "0% 20%"}}>
                                <CircleComponent percent={50} name={"react"} colorCircle="var(--color-7)"/>
                                <CircleComponent percent={90} name={"html"} colorCircle="var(--color-7)"/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            ) : ""}
        </div>
    )
}

export default Technologies;