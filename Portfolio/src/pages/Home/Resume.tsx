import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import GithubLogo from "../../../public/images/GithubLogo.png"
import resumeImage from "../../../public/images/ResumeImage.png"    
import stylesHome from "../../assets/css/Home/home.module.css"
import FolderIcon from "../../assets/images/folderIcon.png"

export default function Resume(){

    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;

        return contributions.filter(activity => {
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();

            return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
            );
        });
    };

    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#resume")?.classList.add("active")
        }else{
            document.querySelector("#resume")?.classList.remove("active")
        }
    },[entry?.isIntersecting])

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/images/ResumeImage.pdf";
        link.download = "resume-niush-ebrahimi.pdf";
        link.click();
    };

    return(

        <Container ref={ref} className="w-100 vh-100" style={{padding : "0vh 7vw"}}>
            <Container className="d-flex justify-content-center align-items-center gap-4" style={{position : "relative"}}>
            {entry?.isIntersecting && <>
                <Container className={` ${styles.fadeLeft}`} style={{flex :1 }}>
                    <div className={`d-flex justify-content-center align-items-center p-relative ${stylesHome.resumeContainerParent}`}>
                        <div className={stylesHome.resumeContainer} >
                            <img style={{maxWidth : "15vw" , maxHeight : "40vh", borderRadius : "1rem"}} src={resumeImage} alt="" />
                            <button className={stylesHome.downloadButton} onClick={handleDownload}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                </svg>
                            </button>
                        </div>
                        <img className={stylesHome.folderContainer} src={FolderIcon} />
                        <div className={stylesHome.folderOuterContainer}></div>
                        <div className={stylesHome.folderOuterContainerWhite} style={{backgroundColor : "white"}}></div>
                    </div>
                    {/* <h3>Resume</h3> */}
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
                                <GitHubCalendar 
                                    transformData={selectLastHalfYear} 
                                    username="NiushaEbrahimi" 
                                    style={{color : 'black'}}
                                    labels={{
                                        totalCount: '{{count}} contributions in the last half year',
                                    }}
                                />
                            </div>
                        </div>
                    
                    
                </Container>
            </>}
            </Container>
        </Container>
    )
}