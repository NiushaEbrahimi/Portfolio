import { useEffect } from "react";
import changeWord from '../../utils/typingEffect.ts'
import styles from "../../assets/css/Home/home.module.css"
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../../public/images/CodePenDashboard.png"
import image2 from "../../../public/images/PixlrClone.jpeg"
import image3 from "../../../public/images/Dashboard-app-react-bootstrap.png"
import image4 from "../../../public/images/CompuTech-wordpress.png"
function HomeComponent() {
    useEffect(() => {
        const cleanup = changeWord();
        return cleanup;
    }, []);

    useEffect(() => {
        const el = document.getElementById('scaleBox');
        const containers = document.querySelectorAll<HTMLElement>('.carts-container');
        if (!el) return;

        const MIN_SCALE = 0.6;
        const MAX_ROT = 22;
        const MAX_SHIFT_VW = 12;
        let ticking = false;
        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

        function update() {
            const rect = el.getBoundingClientRect();
            const quarterPoint = window.innerHeight * 0.95;
            const distanceMoved = Math.max(0, quarterPoint - rect.top);
            const maxDistance = quarterPoint + rect.height;
            const progress = clamp(distanceMoved / maxDistance, 0, 1);
            const scale = 1 - progress * (1 - MIN_SCALE);
            el.style.transform = `scale(${scale})`;
            el.classList.toggle('scaling', progress > 0);

            containers.forEach(container => {
                const cart1 = container.querySelector<HTMLElement>('.cart-1');
                const cart2 = container.querySelector<HTMLElement>('.cart-2');
                let rotProgress = 0;

                if (container) {
                    const crect = container.getBoundingClientRect();
                    const enter = window.innerHeight - crect.top;
                    const full = window.innerHeight + crect.height;
                    rotProgress = clamp(enter / full, 0, 1);
                }

                const r1 = -MAX_ROT * rotProgress;
                const r2 = MAX_ROT * rotProgress;

                const maxShiftPx = window.innerWidth * (MAX_SHIFT_VW / 100);
                const shift1 = -maxShiftPx * rotProgress;
                const shift2 = maxShiftPx * rotProgress;

                if (cart1 && cart2) {
                    cart1.style.transform = `translateX(${Math.round(shift1 * 5)}px) rotate(${r1}deg)`;
                    cart2.style.transform = `translateX(${Math.round(shift2 * 5)}px) rotate(${r2}deg)`;
                }
            });

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        }

        const onResize = () => requestAnimationFrame(update);

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return (
        <>
            {/* make these components */}
            <Container
                className="vh-100 d-flex align-items-center justify-content-center"
                id="Home"
            >
                <Row className="d-flex justify-content-center text-center">
                    <h1>Hi, <span style={{color:"var(--color-7)"}}>Niusha</span> Here.</h1>
                    <h6>I create stuff.</h6>
                    <p><span className="change-word">Developer</span><span className={styles.typingEffect}>|</span></p>
                </Row>
            </Container>
            <Container className="mb-5 vh-80 d-flex align-items-center justify-content-center">
                <div id="scaleBox" className={`${styles.box} rounded-4 shadow d-flex align-items-center justify-content-center text-center flex-column`}>
                    <h1>Niusha Ebrahimi</h1>
                    <p>hello</p>
                    
                </div>
            </Container>
            <Container className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
                <h2 className="m-0">Projects</h2>
                <Container className={`vh-100 d-flex justify-content-center align-items-center ${styles.projects_container}`} id="Projects">
                <div className={`overflow-hidden ${styles.scroll_container_wrapper}`}>
                    <div className={`"d-flex flex-row g-5 justify-content-center align-items-center text-center ${styles.scroll_container}`}>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}>
                            <img src={image1} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}>
                            <img src={image2} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}> 
                            <img src={image3} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}> 
                            <img src={image4} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}>
                            <img src={image1} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}>
                            <img src={image2} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}> 
                            <img src={image3} style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className={`p-2 rounded-4 ${styles.scroll_item}`}> 
                            <img src={image4} style={{width:"100%" , height:"auto"}}/>
                        </div>
                    </div>
                </div>
            </Container>
            </Container>
            <Container className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
                {/* technologies that i know */}
            </Container>
            <Container className="mt-5 d-flex flex-column justify-content-center align-items-center text-center">
                {/* aboute me */}
            </Container>
            
        </>
    )
};

export default HomeComponent;