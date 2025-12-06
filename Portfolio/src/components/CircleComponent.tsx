import styles from "../assets/css/Home/circle.module.css"
import React from "react"

function CircleComponent({percent, name}:{percent:number, name:string}) {
    return(
        <div className={styles.circle}>
            <div
                className={styles.circle_1}
            ></div>
            <div 
                className={styles.circle_2}
                style={{ "--target-angle": `${percent}%` } as React.CSSProperties}
            ></div>
            {name}
        </div>
    )
}
export default CircleComponent;