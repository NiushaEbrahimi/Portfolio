import { Container, Row } from "react-bootstrap";
import styles from "../../assets/css/Home/home.module.css"

function AboutComponent() {
    return(
        <Container
            className="vh-100 d-flex align-items-center justify-content-center"
            id="Home"
        >
            <Row className={`d-flex justify-content-center text-center p-5 rounded-5 ${styles.scale_box}`} id="scaleBox">
                <h1>About <span style={{color:"var(--color-7)"}}>Me</span></h1>
                <p>
                    Im a frontend developer and computer science student with a strong passion for building clean, modern, and user-focused web interfaces. I enjoy turning ideas into responsive, interactive experiences using technologies like JavaScript, React, CSS, and modern UI frameworks. Alongside my university studies, I’m constantly learning new tools and best practices to write better code and create more polished products.
                </p>
            </Row>
        </Container>
    )
}
export default AboutComponent;