import { Container, Row } from "react-bootstrap";

type StylesModule = { [key: string]: string };

function HomesFirstSection({styles} : {styles: StylesModule}) {
    return(
        <Container
            className="vh-100 d-flex align-items-center justify-content-center"
            id="Home"
        >
            <Row className="d-flex justify-content-center text-center">
                <h1>Hi, <span style={{color:"var(--color-7)"}}>Niusha</span> Here.</h1>
                <h6>I create stuff.</h6>
                <p><span className="change-word">Developer</span><span className={styles.typingEffect}>|</span></p>
            </Row>
        </Container>
    )
}
export default HomesFirstSection;