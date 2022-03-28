import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ProjectPanel from './screensOfPanle/FourProject'
import One_about from './screensOfPanle/One_about'
import ThreeTimeLine from './screensOfPanle/ThreeTimeLine'
import TwoSkill from './screensOfPanle/TwoSkill'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function Panels(props, ref) {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  const boxRef = useRef({});
  let location = useLocation()


  React.useEffect(() => {
    if (location.pathname === '/') {



      const tl = gsap.timeline();
      tl.from(boxRef.current.panle__screen__2, { xPercent: -100 })
        .from(boxRef.current.panle__screen__3, { xPercent: 100 })
        .from(boxRef.current.panle__screen__4, { yPercent: -100 })
      // .from('.one' ,{y : 350})
      ScrollTrigger.create({
        animation: tl,
        trigger: boxRef.current.panle__screen,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        anticipatePin: 1
      });

    }
  }, [])
  return (
    <>
      {
        location.pathname === '/' ?
          <section ref={ele => boxRef.current['panle__screen'] = ele} className="section section__panel">
            <div ref={ele => boxRef.current['panle__screen__1'] = ele} className="panel panle__screen__1 ">
              <One_about />
            </div>
            <div ref={ele => boxRef.current['panle__screen__2'] = ele} className="panel panle__screen__2 ">
              <TwoSkill />
            </div>
            <div ref={ele => boxRef.current['panle__screen__3'] = ele} className="panel panle__screen__3">
              <ThreeTimeLine />
            </div>
            <div ref={ele => boxRef.current['panle__screen__4'] = ele} className="panel panle__screen__4">
              <ProjectPanel />
            </div>

          </section> : null
      }

    </>
  )
}

export default React.forwardRef(Panels)