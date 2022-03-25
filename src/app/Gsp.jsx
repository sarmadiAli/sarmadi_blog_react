import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import RefContext from './context/refContext'
function Gsp(props) {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const context = React.useContext(RefContext)
    console.log(context)

    React.useEffect(() => {
        const refsCurrent = context.StartPagesRef.current;
        gsap.from(
            refsCurrent.sarmadi__img, {
            scale: 1.5,
            transformOrigin: "center center",
            ease: "expo",
            scrollTrigger: {
                trigger: refsCurrent.sarmadi__img,
                start: "center center",
                end: "center top",
                pin: true,
                scrub: 0.5,
            }
        })

        gsap.fromTo(
            refsCurrent.sarmadi__img,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 2,
                ease: "expo.inOut"
            }
        );
        gsap.to(refsCurrent.react__ring__right, {
            rotate: "+=360",
            scrollTrigger: {
                trigger: refsCurrent.react__ring__right,
                start: "bottom bottom",
                end: "bottom top",
                pin: false,
                scrub: 0.5,
            }
        });

        gsap.to(refsCurrent.react__ring__left, {
            rotate: 360 * 4,
            scrollTrigger: {
                trigger: refsCurrent.react__ring__left,
                start: "top bottom",
                end: "bottom top",
                pin: false,
                scrub: 0.5,

            }
        });
        gsap.to(refsCurrent.js__ring__left, {
            scale: 1.2,
            ease: "power4",
            scrollTrigger: {
                trigger: refsCurrent.js__ring__left,
                start: "center+=100% center+=25%",
                end: "bottom+=300 top+=10%",
                // pin: true,
                scrub: 0.25,


            }
        });


    gsap.to(refsCurrent.sarmadi__title__1, {
        xPercent: -50,
        scrollTrigger: {
          trigger: refsCurrent.sarmadi__title__1,
          start: "center center",
          pin: true,
          scrub: 0.5,
  
  
        }
      });
  
      gsap.to(refsCurrent.sarmadi__title__2, {
        xPercent: 50,
        scrollTrigger: {
          trigger: refsCurrent.sarmadi__title__2,
          start: "center center",
          end: "bottom top",
          pin: true,
          scrub: 0.5,
  
        }
      });
 
    }, [])
    return (
        <>
            {props.children}
        </>
    )
}

export default Gsp;