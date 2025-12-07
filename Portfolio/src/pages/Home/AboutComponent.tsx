import { Container, Row } from "react-bootstrap";
import styles from "../../assets/css/Home/home.module.css"
import { useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";

function AboutComponent({ dark }: { dark: boolean}) {
    const [ref, entry] = useIntersectionObserver({
            threshold: 0.2,
            root: null,
            rootMargin: "0px",
        });
    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#about")?.classList.add("active")
            console.log("hello")
        }else{
            document.querySelector("#about")?.classList.remove("active")
        }
    },[entry?.isIntersecting])
    return(
        <Container
            className="vh-100 d-flex align-items-center justify-content-center"
            id="Home"
            ref={ref}
        >
            <Row 
                className={`d-flex justify-content-start p-5 rounded-5 ${styles.scale_box}`}
                id="scaleBox"
                style={{backgroundColor : dark ?  "transparent" : "var(--color-3)" , 
                    color : dark ? "var(--color-6)" : "var(--color-1)"
                }}
            >
                <h1 className="mb-3">About <span style={{color:"var(--color-7)"}}>Me</span></h1>
                <Container className="d-flex ">
                <p className="fs-4 p-2 w-100" style={{flex : 1 }}>
                    I'm a <span style={{color:"var(--color-8)"}}>frontend </span>
                    developer and Computer Engineer student 
                    with a strong passion for building clean, modern, and
                    user-focused web interfaces. I enjoy turning ideas into
                    responsive, interactive experiences using technologies like 
                    JavaScript, React, Nest.js, TypeScript, and modern UI frameworks. Alongside my
                    university studies, I'm constantly learning new tools and best
                    practices to write better code and create more polished products.
                </p>
                <p className="w-100" style={{flex : 1}}></p>
                </Container>
            </Row>
        </Container>
    )
}
export default AboutComponent;