import { useEffect } from "react";
import changeWord from '../../utils/typingEffect.ts';
import styles from "../../assets/css/Home/home.module.css";
import AboutComponent from "../../pages/Home/AboutComponent.tsx";
import Technologies from "../../pages/Home/Technologies.tsx";
import ProjectsComponent from "../../pages/Home/ProjectsComponent.tsx";
import HomesFirstSection from "../../pages/Home/HomesFirstSection.tsx";
import Resume from "./Resume.tsx";

function HomeComponent({dark}:{dark:boolean}) {
    useEffect(() => {
        const cleanup = changeWord();
        return cleanup;
    }, []);

    useEffect(() => {
        const el = document.getElementById("scaleBox");
        if (!el) return;

        const element = el;
        const containers = document.querySelectorAll<HTMLElement>(".carts-container");

        const MIN_SCALE = 0.6;
        const MAX_ROT = 22;
        const MAX_SHIFT_VW = 12;

        let ticking = false;

        const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

        function update() {
            const rect = element.getBoundingClientRect();
            const quarterPoint = window.innerHeight * 0.95;
            const distanceMoved = Math.max(0, quarterPoint - rect.top);
            const maxDistance = quarterPoint + rect.height;
            const progress = clamp(distanceMoved / maxDistance, 0, 1);

            const scale = 1 - progress * (1 - MIN_SCALE);
            element.style.transform = `scale(${scale})`;
            element.classList.toggle("scaling", progress > 0);

            containers.forEach((container) => {
                const cart1 = container.querySelector<HTMLElement>(".cart-1");
                const cart2 = container.querySelector<HTMLElement>(".cart-2");

                const crect = container.getBoundingClientRect();
                const enter = window.innerHeight - crect.top;
                const full = window.innerHeight + crect.height;

                const rotProgress = clamp(enter / full, 0, 1);
                const r1 = -MAX_ROT * rotProgress;
                const r2 = MAX_ROT * rotProgress;

                const maxShiftPx = window.innerWidth * (MAX_SHIFT_VW / 100);
                const shift1 = -maxShiftPx * rotProgress;
                const shift2 = maxShiftPx * rotProgress;

                if (cart1) {
                    cart1.style.transform = `translateX(${Math.round(shift1 * 5)}px) rotate(${r1}deg)`;
                }
                if (cart2) {
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
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <>
            <HomesFirstSection styles={styles} />
            <AboutComponent dark={dark} />

            <div style={{ height: "20vh" }}></div>
            <ProjectsComponent stylesModule={styles} />

            <div style={{ height: "20vh" }}></div>
            <Technologies />

            <div style={{ height: "20vh" }}></div>
            <Resume/>
        </>
    );
}

export default HomeComponent;
