import { Container, Row, Col } from "react-bootstrap";
import CircleComponent from "../../components/CircleComponent.tsx";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import stylesHome from "../../assets/css/Home/home.module.css"
import techBackground from "../../../public/images/techBackground.webp"
import { useState,useEffect } from "react";

interface TechItem {
    id:number;
    category: string;
    techName: string;
    percent: number;
    svg_icon: string
}

function Technologies() {
    const [data, setData] = useState([]);
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/tech")
            .then(res => res.json())
            .then(json => setData(json))
            .catch(err => console.error(err));
    }, []);
    const webTech = data.filter((t:TechItem) => t.category === "web");
    const visionTech = data.filter((t:TechItem) => t.category === "machine vision");
    webTech.map(item => (
        console.log(item)
    ));
    // TODO: this should be rendered when the page is getting to the section of it
    return(
        <div
            id="tools-page" 
            ref={ref} 
            className={`vh-100 mt-5 d-flex flex-column justify-content-center align-items-center text-center ${ entry?.isIntersecting ? styles.fadeIn : ""}`}
        >
            <div className={stylesHome.techBackgroundConatiner}>
                <img className={stylesHome.techBackground} src={techBackground} alt="" />
            </div>
            {entry?.isIntersecting ? (
                <Container className="d-flex justify-content-center align-items-center flex-column"  style={{ maxWidth : "60vw"}}>
                    <h2 className="mb-4">Technologies i know and Use</h2>
                    <p>these Technologies have been fully self taught to myself</p>

                    <Row className="w-100 d-flex justify-content-center align-items-center">
                        <Col xs={6} className="p-0" style={{maxWidth : "20vw",backgroundColor : "black"}}>
                            <h4 className="w-100">Web</h4>
                            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                                {webTech.map((item:TechItem) => (
                                    <CircleComponent
                                        key={item.id}
                                        percent={item.percent}
                                        IconSvg={item.svg_icon}
                                    />
                                ))}
                            </div>
                        </Col>
                        <Col xs={6} className=" p-0" style={{maxWidth : "20vw"}}>
                            <h4 className="w-100">Machine Vision</h4>
                            <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr", padding : "0% 20%"}}>
                                {visionTech.map((item:TechItem) => (
                                    <CircleComponent
                                        key={item.id}
                                        percent={item.percent}
                                        IconSvg={item.svg_icon}
                                    />
                                ))}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            ) : ""}
        </div>
    )
}

export default Technologies;