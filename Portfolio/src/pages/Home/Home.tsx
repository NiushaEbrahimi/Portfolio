import { useEffect } from "react";
import changeWord from '../../utils/typingEffect.ts'
import styles from "../../assets/css/Home/home.module.css"
import AboutComponent from "../../pages/Home/AboutComponent.tsx";
import Technologies from "../../pages/Home/Technologies.tsx";
import ProjectsComponent from "../../pages/Home/ProjectsComponent.tsx";
import HomesFirstSection from "../../pages/Home/HomesFirstSection.tsx";


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
            <HomesFirstSection styles={styles}/>
            <AboutComponent styles={styles}/>
            
            <ProjectsComponent stylesModule={styles} />
            <div style={{height:"40vh"}}></div>
            <Technologies />
            
        </>
    )
};

export default HomeComponent;