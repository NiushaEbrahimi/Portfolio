import stylesHome from "../assets/css/Home/home.module.css";
import { Col, Row } from "react-bootstrap";
export default function Footer({dark}:{dark:boolean}){
  const year = new Date().getFullYear();

  return (
    <footer
      className={`d-flex justify-content-center `}
      aria-label="Site footer"
    >
      <Row 
        style={{minWidth : "80vw" , maxWidth : "100vw"}}

      >
        <Col xs={12} md={6} style={{color:`${dark ? "var(--color-white)" : "var(--color-1)"}`,fontSize : "1rem" , marginBottom : "5vh" , textAlign : "center"}}>
          <p className=" m-0 mb-1"> 
            Built and designed by <span style={{fontSize : "1rem"}} className={stylesHome.mainTitle}>Niusha Ebrahimi</span>
          </p>

          <p className="m-0 mb-2"> 
            All rights reserved- © {year} 
          </p>
        </Col>
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center gap-4" style={{marginBottom : "5vh"}}>
          <div className={stylesHome.socialContainer}>
            <button className={stylesHome.buttonCall}>
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
                </svg>
              </span>
            </button>
          </div>
          <div className={stylesHome.socialContainer}>
            <button className={stylesHome.buttonMail}>
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/>
                </svg>
              </span>
            </button>
          </div>
        </Col>
      </Row>
    </footer>
  );
};
