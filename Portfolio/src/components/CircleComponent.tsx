import styles from "../assets/css/Home/circle.module.css"
import React from "react"

function CircleComponent({percent, IconSvg}:{percent:number, IconSvg:string }) {
    const currentColor = "white"
    return(
        <div className={styles.circle}>
            <div
                className={styles.circle_1}
            >
                <span
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
                />
            </div>
            <div 
                className={styles.circle_2}
                style={{ "--target-angle": `${percent}%` } as React.CSSProperties}
            ></div>
        </div>
    )
}
export default CircleComponent;