import { Container, Row } from "react-bootstrap";
import styles from "../../assets/css/Home/home.module.css"
import { useEffect } from "react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import imageDeveloper from "../../../public/images/developer.png"
import headsetImage from "../../../public/images/headset.png"
import coffeeCup from "../../../public/images/coffeeCup.png"
import stylesHome from "../../assets/css/Home/home.module.css"

// function AboutComponent({ dark }: { dark: boolean}) {
function AboutComponent() {
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
                className={`d-flex justify-content-start p-5 rounded-5 ${styles.scale_box}`}
                id="scaleBox"
                // style={{backgroundColor : dark ?  "transparent" : "var(--color-3)" , 
                //     color : dark ? "var(--color-6)" : "var(--color-1)"
                // }}
            >
                <Container className="d-flex ">
                <div className="p-2 w-100" style={{flex : 1 }}>
                    <h1 className={stylesHome.aboutTitle}>
                        About Me
                    </h1>
                    <p className="fs-4" style={{fontFamily : "Mona Sans", lineHeight : "2.5rem" , color : "rgba(255,255,255,0.4)"}}>
                        I'm a <span style={{color:"var(--color-8)"}}>frontend </span>
                        developer and Computer Engineer student 
                        with a strong passion for building clean, modern, and
                        user-focused web interfaces. I enjoy turning ideas into
                        responsive, interactive experiences.
                        
                        Alongside my
                        university studies, I'm constantly learning new tools and best
                        practices to write better code and create more polished products.
                    </p>
                </div>
                <div className={`w-100 d-flex justify-content-center align-items-center ${stylesHome.imageContainer} `} style={{flex : 1}}>
                    <img src={imageDeveloper} style={{width : "50%"}}/>
                    <img src={coffeeCup} className={stylesHome.coffeeCup}/>
                    <img src={headsetImage} className={stylesHome.headsetImage}/>
                </div>
                </Container>
            </Row>
        </Container>
    )
}
export default AboutComponent;