import { Container, Row, Col } from "react-bootstrap";
import styles from "../../assets/css/Home/home.module.css"
import { useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import imageDeveloper from "../../../public/images/developer.png"
import headsetImage from "../../../public/images/headset.png"
import coffeeCup from "../../../public/images/coffeeCup.png"
import stylesHome from "../../assets/css/Home/home.module.css"

function AboutComponent({ dark }: { dark: boolean}) {
    const [ref, entry] = useIntersectionObserver({
            threshold: 0.2,
            root: null,
            rootMargin: "0px",
        });
    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#about")?.classList.add("active")
        }else{
            document.querySelector("#about")?.classList.remove("active")
        }
    },[entry?.isIntersecting])
    return(
        <Container
            className="vh-100 d-flex align-items-center justify-content-center"
            id="about-page"
            ref={ref}
        >
            <Row 
                style={{
                    background : `${dark ? "linear-gradient(var(--color-2) 0%, var(--color-3) 100%)" : "white"}`
                    }}
                className={`p-5 rounded-5 ${styles.scale_box}`}
                id="scaleBox"
            >
                <Col xs={12} md={12} lg={6} className="p-2" >
                    <h1 className={stylesHome.mainTitle}>
                        About Me
                    </h1>
                    <p className={stylesHome.explanation} style={{fontFamily : "Mona Sans", lineHeight : "2.5rem" , color : `${dark ?"rgba(255,255,255,0.4)":"rgba(0, 0, 0, 0.72)"}`}}>
                        I'm a <span style={{color:"var(--color-8)"}}>frontend </span>
                        developer and Computer Engineer student 
                        with a strong passion for building clean, modern, and
                        user-focused web interfaces. I enjoy turning ideas into
                        responsive, interactive experiences.
                        
                        Alongside my
                        university studies, I'm constantly learning new tools and best
                        practices to write better code and create more polished products.
                    </p>
                </Col>
                <Col xs={12} md={12} lg={6} className={`d-flex justify-content-center align-items-center ${stylesHome.imageContainer} `}>
                    <img src={imageDeveloper} style={{width : "50%"}}/>
                    <img src={coffeeCup} className={stylesHome.coffeeCup}/>
                    <img src={headsetImage} className={stylesHome.headsetImage}/>
                </Col>
            </Row>
        </Container>
    )
}
export default AboutComponent;