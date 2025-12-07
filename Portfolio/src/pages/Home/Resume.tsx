import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import GithubLogo from "../../../public/images/GithubLogo.png"
    
export default function Resume(){
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#resume")?.classList.add("active")
            console.log("hello")
        }else{
            document.querySelector("#resume")?.classList.remove("active")
        }
    },[entry?.isIntersecting])
    return(
        <Container ref={ref} className="w-100 vh-100" style={{padding : "0vh 7vw"}}>
            <Container className="d-flex justify-content-center align-items-center gap-4" style={{position : "relative"}}>
            {entry?.isIntersecting && <>
                <Container className={`${styles.fadeLeft}`} style={{flex :1}}>
                    resume placement
                </Container>
                <Container className={`text-center ${styles.fadeRight} d-flex flex-column justify-content-center align-items-center`} style={{flex :1,gap:"10vh"}}>
                        <Row>
                            <h2>Resume</h2>
                            <p>Check out my resume and github,getting to know more about me and my work.</p>
                        </Row>
                        <div className={styles.githubContribution} style={{position : "relative"}}>
                            <div className={styles.githubDecor1}></div>
                            <div className={styles.githubDecor2}></div>
                            <div className={styles.githubDecor3}></div>
                            <div className={styles.githubDecor4}></div>
                            <div className={styles.githubDecor5}></div>
                            <div className={styles.githubDecor6}></div>
                            <div className={styles.githubDecor7}></div>
                            <div className={styles.githubLogo}>
                                <img src={GithubLogo} alt="Github Logo" />
                            </div>
                            <div style={{overflowX : "hidden",maxWidth : "30vw",backgroundColor : "white",borderRadius : "0.7rem",padding : "1rem",cursor : "pointer"}}>
                                <GitHubCalendar username="NiushaEbrahimi" style={{color : 'black'}}/>
                            </div>
                        </div>
                    
                    
                </Container>
            </>}
            </Container>
        </Container>
    )
}