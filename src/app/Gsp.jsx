import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import RefContext from './context/refContext'
function Gsp(props) {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const context = React.useContext(RefContext)

    React.useEffect(() => {
        const refsCurrentStartPage = context.StartPagesRef.current;
        const refsCurrentPanelsRef = context.PanelsRef.current;
        /* 
                gsp for start page
         */
        gsap.from(
            refsCurrentStartPage.sarmadi__img, {
            scale: 1.5,
            transformOrigin: "center center",
            ease: "expo",
            scrollTrigger: {
                trigger: refsCurrentStartPage.sarmadi__img,
                start: "center center",
                end: "center top",
                pin: true,
                scrub: 0.5,
            }
        })

        gsap.fromTo(
            refsCurrentStartPage.sarmadi__img,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "expo.inOut"
            }
        );
        gsap.to(refsCurrentStartPage.react__ring__right, {
            rotate: "+=360",
            scrollTrigger: {
                trigger: refsCurrentStartPage.react__ring__right,
                start: "bottom bottom",
                end: "bottom top",
                pin: false,
                scrub: 0.5,
            }
        });

        gsap.to(refsCurrentStartPage.react__ring__left, {
            rotate: 360 * 4,
            scrollTrigger: {
                trigger: refsCurrentStartPage.react__ring__left,
                start: "top bottom",
                end: "bottom top",
                pin: false,
                scrub: 0.5,

            }
        });
        gsap.to(refsCurrentStartPage.js__ring__left, {
            scale: 1.2,
            ease: "power4",
            scrollTrigger: {
                trigger: refsCurrentStartPage.js__ring__left,
                start: "center+=100% center+=25%",
                end: "bottom+=300 top+=10%",
                // pin: true,
                scrub: 0.25,


            }
        });


        gsap.to(refsCurrentStartPage.sarmadi__title__1, {
            xPercent: -50,
            scrollTrigger: {
                trigger: refsCurrentStartPage.sarmadi__title__1,
                start: "center center",
                pin: true,
                scrub: 0.5,


            }
        });

        gsap.to(refsCurrentStartPage.sarmadi__title__2, {
            xPercent: 50,
            scrollTrigger: {
                trigger: refsCurrentStartPage.sarmadi__title__2,
                start: "center center",
                end: "bottom top",
                pin: true,
                scrub: 0.5,

            }
        });
        /* 
                        gsp for panles page
                 */
        const nTl = gsap.timeline();

        const tl = gsap.timeline();
        tl.from(refsCurrentPanelsRef?.panle__screen__2, { xPercent: -100 })
            .from(refsCurrentPanelsRef?.panle__screen__3, { xPercent: 100 })
            .from(refsCurrentPanelsRef?.panle__screen__4, { yPercent: -100 })
        // .from('.one' ,{y : 350})
        ScrollTrigger.create({
            animation: tl,
            trigger: refsCurrentPanelsRef?.panle__screen,
            start: "top top",
            end: "+=4000",
            scrub: true,
            pin: true,
            anticipatePin: 1
        });
        ScrollTrigger.create({
            animation: nTl,
            trigger: refsCurrentPanelsRef?.panle__screen,
            start: "right 1px",
            end: "bottom bottom",
            markers: false,
            yoyo: true,
            ease: "sine.inOut",
            scrub: 1
        });
    }, [])
    return (
        <>
            {props.children}
        </>
    )
}

export default Gsp;