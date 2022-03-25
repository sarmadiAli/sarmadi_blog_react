import React ,{useRef} from 'react'
import { useImperativeHandle } from 'react'
import { forwardRef } from 'react'
// import React_croos 
import sarmadiImg from './../../images/alisarmadi2.jpg'
function StartPage(props , ref) {

    return (
        <>
            <img ref={ele => ref.current['sarmadi__img'] = ele} className='sarmadi__image' src={sarmadiImg} alt="aliSarmadi" />
            {/* <React_croos className='cross_ٍreact_right' /> */}
            <span ref={ele => ref.current['react__ring__right'] = ele} className=" react__ring__right devicon-react-original colored "></span>
            <span ref={ele => ref.current['react__ring__left'] = ele} className="react__ring__left  devicon-react-original colored "></span>
            <span ref={ele => ref.current['js__ring__right'] = ele} className="js__ring__right  devicon-javascript-plain colored"></span>
            <span ref={ele => ref.current['js__ring__left'] = ele} className="js__ring__left devicon-javascript-plain colored"></span>

            {/* <JsSvg_ringLeft className='ring js__ring__left' /> */}
            {/* <JsSvg_ringLeft className="ring js__ring__right" /> */}


            <h3 ref={ele => ref.current['sarmadi__title__1'] = ele} className="sarmadi__title sarmadi__title__1">HI,I'M ALI SARMADI</h3>
            <h3 ref={ele => ref.current['sarmadi__title__2'] = ele} className="sarmadi__title sarmadi__title__2">WEB DEVELOPER</h3>

            <p className="arrow">
                <span>Scroll</span>
                <span className="chevron-down">
                    <i ref={ele => ref.current['arrow__symbols'] = ele} className="arrow__symbols" aria-hidden="true">&dArr;</i>
                </span>
            </p>
        </>
    )
}
export default forwardRef(StartPage)