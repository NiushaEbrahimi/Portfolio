import { Container, Row, Col } from "react-bootstrap";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import stylesHome from "../../assets/css/Home/home.module.css"
import techBackground from "../../../public/images/techBackground.webp"
import TechCards from "../../pages/Home/TechCards.tsx";
import { useEffect,useState } from "react";
// import ChainScroll from "./blurredband.tsx";

interface TechItem {
  id: number;
  category: string;
  techName: string;
  percent: number;
  svg_icon: string;
}

function Technologies() {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    const [data, setData] = useState<TechItem[]>([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/tech")
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, []);

    const webTech = data.filter(t => t.category === "web");
    const machineVisionTech = data.filter(t => t.category === "machine vision");
    
    return(
        <div
            id="tools-page" 
            ref={ref} 
            className={`vh-100 mt-5 d-flex flex-column justify-content-center align-items-center text-center ${ entry?.isIntersecting ? styles.fadeIn : ""}`}
        >
            <div className={stylesHome.techBackgroundConatiner}>
                <img className="w-100 h-100" src={techBackground} />
            </div>
            {entry?.isIntersecting ? (
                <Container className="d-flex justify-content-center align-items-center flex-column">
                    <h2 className={stylesHome.aboutTitle}>Technologies</h2>
                    <p>these Technologies have been fully self taught to myself</p>
                    <Row className="w-100 d-flex justify-content-center align-items-center" >
                        <Col xs={12} md={12} lg={6} style={{ maxWidth : "450px"}} >
                            <TechCards category={"web"} contentComponent={webTech} />
                        </Col>
                        <Col xs={12} md={12} lg={6} style={{ maxWidth : "450px"}}>
                            <TechCards category={"machine vision"} contentComponent={machineVisionTech} />
                        </Col>
                    </Row>
                    {/* <Row style={{maxWidth : "40vw"}}>
                        <ChainScroll/>
                    </Row> */}
                </Container>
            ) : ""}
        </div>
    )
}

export default Technologies;