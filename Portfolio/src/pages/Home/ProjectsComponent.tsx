import { Container } from "react-bootstrap";
import image1 from "../../../public/images/CodePenDashboard.png"
import image2 from "../../../public/images/PixlrClone.jpeg"
import image3 from "../../../public/images/Dashboard-app-react-bootstrap.png"
import image4 from "../../../public/images/CompuTech-wordpress.png"
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

type StylesModule = { [key: string]: string };

function ProjectsComponent({stylesModule}: {stylesModule: StylesModule,dark:boolean}) {
    const [ref, entry] = useIntersectionObserver({
            threshold: 0,
            root: null,
            rootMargin: "0px",
        });
    useEffect(()=>{
            if( entry?.isIntersecting){
                document.querySelector("#projects")?.classList.add("active")
                console.log("hello")
            }else{
                document.querySelector("#projects")?.classList.remove("active")
            }
        },[entry?.isIntersecting])
    return(

        <Container ref={ref} className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="m-0">Projects</h2>
            <Container className={`vh-100 d-flex justify-content-center align-items-center ${stylesModule.projects_container}`} id="Projects">
                <div className={`overflow-hidden ${stylesModule.scroll_container_wrapper}`}>
                    <div className={`"d-flex flex-row g-5 justify-content-center align-items-center text-center ${stylesModule.scroll_container}`}>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}>
                            <img src={image1} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}>
                            <img src={image2} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}> 
                            <img src={image3} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}> 
                            <img src={image4} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}>
                            <img src={image1} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}>
                            <img src={image2} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}> 
                            <img src={image3} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${stylesModule.scroll_item}`}> 
                            <img src={image4} style={{width:"100%" , height:"auto"}}/>
                        </div>
                    </div>
                </div>
            </Container>
            <a className="icon-link icon-link-hover fs-3" style={{textDecorationColor: "var(--color-7)", color : "var(--color-7)"}} href="#">
                Check Them Out
                <svg xmlns="http://www.w3.org/2000/svg" className="bi" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
            </a>
        </Container>
    
    )
}

export default ProjectsComponent;