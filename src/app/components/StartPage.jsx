import React ,{useRef} from 'react'
import { useEffect } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import React_croos 
import sarmadiImg from './../../images/alisarmadi2.jpg'
function StartPage(props , ref) {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
    const boxRef = useRef({});
    useEffect(() =>{
          gsap.from(
               boxRef.current.sarmadi__img, {
                scale: 1.5,
                transformOrigin: "center center",
                ease: "expo",
                scrollTrigger: {
                    trigger:boxRef.current.sarmadi__img,
                    start: "center center",
                    end: "center top",
                    pin: true,
                    scrub: 0.5,
                }
            })

            gsap.fromTo(
               boxRef.current.sarmadi__img,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 2,
                    ease: "expo.inOut"
                }
            );
            gsap.to(boxRef.current.react__ring__right, {
                rotate: "+=360",
                scrollTrigger: {
                    trigger:boxRef.current.react__ring__right,
                    start: "bottom bottom",
                    end: "bottom top",
                    pin: false,
                    scrub: 0.5,
                }
            });

            gsap.to(boxRef.current.react__ring__left, {
                rotate: 360 * 4,
                scrollTrigger: {
                    trigger:boxRef.current.react__ring__left,
                    start: "top bottom",
                    end: "bottom top",
                    pin: false,
                    scrub: 0.5,

                }
            });
            gsap.to(boxRef.current.js__ring__left, {
                scale: 1.2,
                ease: "power4",
                scrollTrigger: {
                    trigger:boxRef.current.js__ring__left,
                    start: "center+=100% center+=25%",
                    end: "bottom+=300 top+=10%",
                    // pin: true,
                    scrub: 0.25,


                }
            });


            gsap.to(boxRef.current.sarmadi__title__1, {
                xPercent: -50,
                scrollTrigger: {
                    trigger:boxRef.current.sarmadi__title__1,
                    start: "center center",
                    pin: true,
                    scrub: 0.5,


                }
            });

            gsap.to(boxRef.current.sarmadi__title__2, {
                xPercent: 50,
                scrollTrigger: {
                    trigger:boxRef.current.sarmadi__title__2,
                    start: "center center",
                    end: "bottom top",
                    pin: true,
                    scrub: 0.5,

                }
            });
    },[boxRef.current])
    return (
        <>
            <img ref={ele => boxRef.current['sarmadi__img'] = ele} className='sarmadi__image' src={sarmadiImg} alt="aliSarmadi" />
            {/* <React_croos className='cross_ٍreact_right' /> */}
            <span ref={ele => boxRef.current['react__ring__right'] = ele} className=" react__ring__right devicon-react-original colored "></span>
            <span ref={ele => boxRef.current['react__ring__left'] = ele} className="react__ring__left  devicon-react-original colored "></span>
            <span ref={ele => boxRef.current['js__ring__right'] = ele} className="js__ring__right  devicon-javascript-plain colored"></span>
            <span ref={ele => boxRef.current['js__ring__left'] = ele} className="js__ring__left devicon-javascript-plain colored"></span>

            {/* <JsSvg_ringLeft className='ring js__ring__left' /> */}
            {/* <JsSvg_ringLeft className="ring js__ring__right" /> */}


            <h3 ref={ele => boxRef.current['sarmadi__title__1'] = ele} className="sarmadi__title sarmadi__title__1">HI,I'M ALI SARMADI</h3>
            <h3 ref={ele => boxRef.current['sarmadi__title__2'] = ele} className="sarmadi__title sarmadi__title__2">WEB DEVELOPER</h3>

            <p className="arrow">
                <span>Scroll</span>
                <span className="chevron-down">
                    <i className="arrow__symbols" aria-hidden="true">&dArr;</i>
                </span>
            </p>
        </>
    )
}
export default StartPage