import styles from "../assets/css/Home/circle.module.css"
import React from "react"

function CircleComponent({percent, name, colorCircle}:{percent:number, name:string, colorCircle:string}) {
    return(
        <div className={styles.circle}>
            <div
                className={styles.circle_1}
            ></div>
            <div 
                className={styles.circle_2}
                style={{ "--target-angle": `${percent}%`, "--circle-color" : `${colorCircle}` } as React.CSSProperties}
            ></div>
            {name}
        </div>
    )
}
export default CircleComponent;