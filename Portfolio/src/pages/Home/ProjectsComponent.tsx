import { Container } from "react-bootstrap";
import image1 from "../../../public/images/CodePenDashboard.png"
import image2 from "../../../public/images/PixlrClone.jpeg"
import image3 from "../../../public/images/Dashboard-app-react-bootstrap.png"
import image4 from "../../../public/images/CompuTech-wordpress.png"

type StylesModule = { [key: string]: string };


function ProjectsComponent({stylesModule}: {stylesModule: StylesModule}) {
    return(

        <Container className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
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
        </Container>
    
    )
}

export default ProjectsComponent;