import { Container, Row } from "react-bootstrap";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import stylesFade from "../../assets/css/fade.module.css"
import { useEffect } from "react";

type StylesModule = { [key: string]: string };

function HomesFirstSection({styles} : {styles: StylesModule}) {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0.8,
        root: null,
        rootMargin: "0px",
    });
    
    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#home")?.classList.add("active")
            console.log("hello")
        }else{
            document.querySelector("#home")?.classList.remove("active")
        }
    },[entry?.isIntersecting])
    return(
        <Container
            ref={ref}
            className="vh-100 d-flex align-items-center justify-content-center"
            id="home-page"
        >
            {entry?.isIntersecting && <>
                <Row className={`d-flex justify-content-center text-center ${stylesFade.fadeIn}`}>
                    <h1>Hi, <span style={{color:"var(--color-7)"}}>Niusha</span> Here.</h1>
                    <h6>I create stuff.</h6>
                    <p><span className="change-word">Developer</span><span className={styles.typingEffect}>|</span></p>
                </Row>
            </>}
        </Container>
    )
}
export default HomesFirstSection;