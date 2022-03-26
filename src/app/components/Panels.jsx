import React from 'react'
import ProjectPanel from './screensOfPanle/FourProject'
import One_about from './screensOfPanle/One_about'
import ThreeTimeLine from './screensOfPanle/ThreeTimeLine'
import TwoSkill from './screensOfPanle/TwoSkill'

function Panels(props, ref) {
  return (
    <>
      <div ref={ele => ref.current['panle__screen__1'] = ele} className="panel panle__screen__1 ">
        <One_about />
      </div>
      <div ref={ele => ref.current['panle__screen__2'] = ele} className="panel panle__screen__2 ">
        <TwoSkill />
      </div>

      <div ref={ele => ref.current['panle__screen__3'] = ele} className="panel panle__screen__3">
        <ThreeTimeLine />
      </div>
      <div ref={ele => ref.current['panle__screen__4'] = ele} className="panel panle__screen__4">
        {/* <ProjectPanel /> */}
        <ProjectPanel />
      </div>

    </>
  )
}

export default React.forwardRef(Panels)