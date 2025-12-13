import styles from "../assets/css/Home/circle.module.css"
import React from "react"
import { imageMap } from "../../public/icons/icons.tsx";

function CircleComponent({percent,name,IconSvg}:{percent:number, name:string, IconSvg:string }) {
    // const currentColor = "white"
    return(
        <div className={styles.circle}>
            <div
                className={styles.circle_1}
            >
                {/* <span
                    className="h-100 d-flex justify-content-center align-items-center"
                    dangerouslySetInnerHTML={{ __html: IconSvg }}
                    ref={(el) => {
                    if (el) {
                        const svg = el.querySelector("svg");
                        if (svg) {
                            svg.setAttribute("fill", currentColor);
                        }
                    }
                    }}
                /> */}
                    
                    <img src={imageMap[name]} alt="" style={{width : "20px", height  : "20px"}}/>
            </div>
            <div 
                className={styles.circle_2}
                style={{ "--target-angle": `${percent}` } as React.CSSProperties}
            ></div>
        </div>
    )
}
export default CircleComponent;