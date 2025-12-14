import { Container, Row, Col } from "react-bootstrap";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import styles from "../../assets/css/fade.module.css"
import stylesHome from "../../assets/css/Home/home.module.css"
import techBackground from "../../../public/images/techBackground.webp"
import TechCards from "../../pages/Home/TechCards.tsx";
import { useEffect,useState } from "react";

interface TechItem {
  id: number;
  category: string;
  techName: string;
  percent: number;
  svg_icon: string;
}

const FALLBACK_TECH: TechItem[] = [
    {
        "id": 2,
        "techName": "htmlCss",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M128 96L162.9 491.8L320 544L477.1 491.8L512 96L128 96zM441.1 176L436.3 223.3L321 272.6L320.7 272.7L432.2 272.7L419.4 419.3L321.2 448L222.4 418.8L216 344.9L264.9 344.9L268.1 383.2L320.7 396.5L375.4 381.1L379.1 319.5L212.8 319L212.8 318.9L212.6 319L209 272.7L321.1 226L327.6 223.3L204.7 223.3L198.9 176L441.1 176z\"/></svg>",
        "percent": 80,
        "category": "web"
    },
    {
        "id": 3,
        "techName": "JavaScript",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM276.9 508.9C243.2 508.9 223.7 491.5 213.7 470.4L248 449.7C254.6 461.4 260.6 471.3 275.1 471.3C288.9 471.3 297.7 465.9 297.7 444.8L297.7 301.7L339.8 301.7L339.8 445.4C339.8 489 314.2 508.9 276.9 508.9zM362.7 465.9L397 446.1C406 460.8 417.8 471.7 438.5 471.7C455.9 471.7 467.1 463 467.1 450.9C467.1 436.5 455.7 431.4 436.4 422.9L425.9 418.4C395.5 405.5 375.4 389.2 375.4 354.9C375.4 323.3 399.5 299.3 437 299.3C463.8 299.3 483 308.6 496.8 333L464 354C456.8 341.1 449 336 436.9 336C424.6 336 416.8 343.8 416.8 354C416.8 366.6 424.6 371.7 442.7 379.6L453.2 384.1C489 399.4 509.1 415.1 509.1 450.3C509.1 488.1 479.3 508.9 439.4 508.9C400.3 508.9 375 490.3 362.7 465.9z\"/></svg>",
        "percent": 70,
        "category": "web"
    },
    {
        "id": 4,
        "techName": "React",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M482.2 241.2C476.8 239.4 471.4 237.7 466 236.1C466.9 232.4 467.7 228.7 468.5 225C480.8 165.4 472.7 117.5 445.4 101.7C419.1 86.6 376.2 102.3 332.8 140.1C328.5 143.8 324.3 147.7 320.3 151.6C317.6 149 314.8 146.4 312 143.9C266.5 103.5 220.9 86.5 193.6 102.4C167.4 117.6 159.6 162.7 170.6 219.1C171.7 224.7 172.9 230.2 174.3 235.8C167.9 237.6 161.6 239.6 155.7 241.7C102.3 260.2 64 289.4 64 319.6C64 350.8 104.8 382.1 160.3 401.1C164.8 402.6 169.3 404.1 173.9 405.4C172.4 411.4 171.1 417.3 169.9 423.4C159.4 478.9 167.6 522.9 193.8 538C220.8 553.6 266.2 537.6 310.4 498.9C313.9 495.8 317.4 492.6 320.9 489.2C325.3 493.5 329.9 497.6 334.5 501.6C377.3 538.4 419.6 553.3 445.7 538.2C472.7 522.6 481.5 475.3 470.1 417.7C469.2 413.3 468.2 408.8 467.1 404.2C470.3 403.3 473.4 402.3 476.5 401.3C534.2 382.2 576 351.3 576 319.6C576 289.3 536.6 259.9 482.2 241.2zM346.9 156.3C384.1 123.9 418.8 111.2 434.6 120.3C451.5 130 458 169.2 447.4 220.7C446.7 224.1 446 227.4 445.1 230.7C422.9 225.7 400.4 222.1 377.8 220.1C364.8 201.5 350.6 183.7 335.2 167C339.1 163.3 342.9 159.8 346.9 156.3zM231.2 371.5C236.3 380.2 241.5 388.9 247 397.4C231.4 395.7 215.9 393.2 200.6 389.9C205 375.5 210.5 360.6 216.9 345.4C221.5 354.2 226.2 362.9 231.2 371.5zM200.9 251.2C215.3 248 230.6 245.4 246.5 243.4C241.2 251.7 236 260.2 231.1 268.8C226.2 277.3 221.4 286 216.9 294.8C210.6 279.9 205.3 265.3 200.9 251.2zM228.3 320.1C234.9 306.3 242.1 292.8 249.7 279.5C257.3 266.2 265.5 253.3 274.1 240.6C289.1 239.5 304.4 238.9 320 238.9C335.6 238.9 351 239.5 365.9 240.6C374.4 253.2 382.5 266.1 390.2 279.3C397.9 292.5 405.1 306 411.9 319.7C405.2 333.5 398 347.1 390.3 360.5C382.7 373.8 374.6 386.7 366.1 399.5C351.2 400.6 335.7 401.1 320 401.1C304.3 401.1 289.1 400.6 274.4 399.7C265.7 387 257.5 374 249.8 360.7C242.1 347.4 235 333.9 228.3 320.1zM408.9 371.3C414 362.5 418.8 353.6 423.5 344.6C429.9 359.1 435.5 373.8 440.4 388.9C424.9 392.4 409.2 395.1 393.4 396.9C398.8 388.5 403.9 379.9 408.9 371.3zM423.3 294.8C418.6 286 413.8 277.2 408.8 268.6C403.9 260.1 398.8 251.7 393.5 243.4C409.6 245.4 425 248.1 439.4 251.4C434.8 266.2 429.4 280.6 423.3 294.8zM320.2 182.3C330.7 193.7 340.6 205.7 349.8 218.1C330 217.2 310.1 217.2 290.3 218.1C300.1 205.2 310.2 193.2 320.2 182.3zM204.2 121C221 111.2 258.3 125.2 297.6 160C300.1 162.2 302.6 164.6 305.2 167C289.7 183.7 275.4 201.5 262.3 220.1C239.7 222.1 217.3 225.6 195.1 230.5C193.8 225.4 192.7 220.2 191.6 215C182.2 166.6 188.4 130.1 204.2 121zM179.7 384.6C175.5 383.4 171.4 382.1 167.3 380.7C146 374 121.8 363.4 104.3 349.5C94.2 342.5 87.4 331.7 85.5 319.6C85.5 301.3 117.1 277.9 162.7 262C168.4 260 174.2 258.2 180 256.5C186.8 278.2 195 299.5 204.5 320.1C194.9 341 186.6 362.6 179.7 384.6zM296.3 482.6C279.8 497.7 260.7 509.7 239.9 517.9C228.8 523.2 216 523.7 204.6 519.2C188.7 510 182.1 474.7 191.1 427.2C192.2 421.6 193.4 416 194.8 410.5C217.2 415.3 239.8 418.6 262.7 420.3C275.9 439 290.4 456.9 305.9 473.7C302.7 476.8 299.5 479.8 296.3 482.6zM320.8 458.3C310.6 447.3 300.4 435.1 290.5 422C300.1 422.4 310 422.6 320 422.6C330.3 422.6 340.4 422.4 350.4 421.9C341.2 434.6 331.3 446.7 320.8 458.3zM451.5 488.3C450.6 500.5 444.6 511.9 435 519.6C419.1 528.8 385.2 516.8 348.6 485.4C344.4 481.8 340.2 477.9 335.9 473.9C351.2 457 365.3 439.1 378.1 420.3C401 418.4 423.8 414.9 446.3 409.8C447.3 413.9 448.2 418 449 422C453.9 443.6 454.7 466.1 451.5 488.3zM469.7 380.8C466.9 381.7 464.1 382.6 461.2 383.4C454.2 361.6 445.6 340.3 435.7 319.6C445.3 299.2 453.4 278.2 460.2 256.7C465.4 258.2 470.4 259.8 475.2 261.4C521.8 277.4 554.5 301.2 554.5 319.4C554.5 339 519.6 364.3 469.7 380.8zM320 365.8C345.3 365.8 365.8 345.3 365.8 320C365.8 294.7 345.3 274.2 320 274.2C294.7 274.2 274.2 294.7 274.2 320C274.2 345.3 294.7 365.8 320 365.8z\"/></svg>",
        "percent": 70,
        "category": "web"
    },
    {
        "id": 5,
        "techName": "BootstrapMUI",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M365.5 265.4C365.5 243.3 349.9 231.1 322.5 231.1L272.1 231.1L272.1 302.3L314.6 302.3C347.4 302.2 365.5 289 365.5 265.4zM549 252.6C539.5 221.7 538.1 183.8 539.2 154.5C540.3 124 516.5 96 484.5 96L155.7 96C123.6 96 99.9 124.1 101 154.5C102 183.8 100.7 221.7 91.2 252.6C81.6 283.6 65.5 303.2 39 305.7L39 334.2C65.4 336.7 81.6 356.3 91.2 387.3C100.7 418.2 102.1 456.1 101 485.4C99.9 515.9 123.7 543.9 155.7 543.9L484.4 543.9C516.5 543.9 540.2 515.8 539.1 485.4C538.1 456.1 539.4 418.2 548.9 387.3C558.5 356.3 574.6 336.7 601 334.2L601 305.7C574.7 303.2 558.5 283.6 549 252.6zM332.2 439.1L234.3 439.1L234.3 200.8L331.7 200.8C375 200.8 403.4 224.2 403.4 260.2C403.4 285.5 384.3 308.1 359.9 312L359.9 313.3C393.1 316.9 415.4 339.9 415.4 371.6C415.4 413.7 384.1 439.1 332.2 439.1zM322.2 330.4L272.1 330.4L272.1 408.8L324.4 408.8C358.6 408.8 376.7 395.1 376.7 369.3C376.7 343.6 358.1 330.4 322.2 330.4z\"/></svg>",
        "percent": 85,
        "category": "web"
    },
    {
        "id": 7,
        "techName": "Python",
        "svg_icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 640\"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M535.8 264.5C528.1 233.6 513.5 210.3 482.4 210.3L442.3 210.3L442.3 257.7C442.3 294.5 411.1 325.5 375.5 325.5L268.7 325.5C239.5 325.5 215.3 350.5 215.3 379.8L215.3 481.6C215.3 510.6 240.5 527.6 268.7 535.9C302.5 545.8 335 547.6 375.5 535.9C402.4 528.1 428.9 512.4 428.9 481.6L428.9 440.9L322.2 440.9L322.2 427.3L482.4 427.3C513.5 427.3 525 405.6 535.8 373.1C547 339.6 546.5 307.4 535.8 264.5zM382.2 508.7C374.6 509.2 367.3 505.5 363.3 499C359.4 492.4 359.4 484.3 363.3 477.7C367.3 471.2 374.6 467.5 382.2 468C389.8 467.5 397.1 471.2 401.1 477.7C405 484.3 405 492.4 401.1 499C397.1 505.5 389.8 509.2 382.2 508.7zM263.8 312.1L370.6 312.1C400.3 312.1 424 287.6 424 257.8L424 155.9C424 126.9 399.6 105.2 370.6 100.3C334.8 94.4 295.9 94.7 263.8 100.4C218.6 108.4 210.4 125.1 210.4 156L210.4 196.7L317.3 196.7L317.3 210.3L170.3 210.3C139.2 210.3 112 229 103.5 264.5C93.7 305.2 93.3 330.6 103.5 373.1C111.1 404.7 129.2 427.3 160.3 427.3L197 427.3L197 378.5C197 343.2 227.5 312.1 263.8 312.1zM257.2 128.7C268.5 128.7 277.6 137.8 277.6 149.1C277.6 160.4 268.5 169.5 257.2 169.5C245.9 169.5 236.8 160.4 236.8 149.1C236.8 137.8 245.9 128.7 257.2 128.7z\"/></svg>",
        "percent": 80,
        "category": "machine vision"
    },
    {
        "id": 8,
        "techName": "typescript",
        "svg_icon": "none",
        "percent": 50,
        "category": "web"
    },
    {
        "id": 9,
        "techName": "wordpress",
        "svg_icon": "none",
        "percent": 90,
        "category": "web"
    },
    {
        "id": 10,
        "techName": "django",
        "svg_icon": "none",
        "percent": 40,
        "category": "web"
    },
    {
        "id": 11,
        "techName": "djangoRest",
        "svg_icon": "none",
        "percent": 50,
        "category": "web"
    },
    {
        "id": 12,
        "techName": "opencv",
        "svg_icon": "none",
        "percent": 90,
        "category": "machine vision"
    },
    {
        "id": 13,
        "techName": "nextJs",
        "svg_icon": "none",
        "percent": 60,
        "category": "web"
    },
    {
        "id": 14,
        "techName": "numpy",
        "svg_icon": "none",
        "percent": 60,
        "category": "machine vision"
    }
]

function Technologies() {
    const [ref, entry] = useIntersectionObserver({
        threshold: 0,
        root: null,
        rootMargin: "0px",
    });
    const [data, setData] = useState<TechItem[]>(FALLBACK_TECH);

    useEffect(() => {
        const fetchTech = async () => {
            try {
            const res = await fetch("http://127.0.0.1:8000/api/tech");
            if (!res.ok) throw new Error("Backend failed");

            const json: TechItem[] = await res.json();

            if (Array.isArray(json) && json.length > 0) {
                setData(json);
            } else {
                setData(FALLBACK_TECH);
            }
            } catch (err) {
            console.error("Using frontend tech fallback", err);
            setData(FALLBACK_TECH);
            }
        };

        fetchTech();
        }, []);


    useEffect(()=>{
        if( entry?.isIntersecting){
            document.querySelector("#tools")?.classList.add("active")
        }else{
            document.querySelector("#tools")?.classList.remove("active")
        }
    },[entry?.isIntersecting])

    const webTech = data.filter(t => t.category === "web");
    const machineVisionTech = data.filter(t => t.category === "machine vision");
    
    return(
        <div
            id="tools-page" 
            ref={ref} 
            className={`mt-5 d-flex flex-column justify-content-center align-items-center text-center ${ entry?.isIntersecting ? styles.fadeIn : ""}`}
        >
            <div className={stylesHome.techBackgroundConatiner}>
                <img className="w-100 h-100" src={techBackground} />
            </div>
            {entry?.isIntersecting ? (
                <Container className="d-flex justify-content-center align-items-center flex-column" style={{gap : "2vh"}}>
                    <h2 className={stylesHome.mainTitle}>Technologies</h2>
                    <p>these Technologies have been fully self taught to myself</p>
                    <Row className="w-100 d-flex justify-content-center align-items-center" style={{marginTop : "5vh" , rowGap : "10vh"}}>
                        <Col xs={12} md={12} lg={6} style={{ maxWidth : "450px"}} >
                            <TechCards category={"web"} contentComponent={webTech} />
                        </Col>
                        <Col xs={12} md={12} lg={6} style={{ maxWidth : "450px"}}>
                            <TechCards category={"machine vision"} contentComponent={machineVisionTech} />
                        </Col>
                    </Row>
                </Container>
            ) : ""}
        </div>
    )
}

export default Technologies;