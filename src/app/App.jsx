import React , {useState} from 'react';
import RefContext from './context/refContext'
import Gsp from './Gsp';
import gsap from 'gsap'

import StartPage from './components/StartPage';
import Panels from './components/Panels'
import { Routes, Route, useNavigate} from "react-router-dom";

import Gallert from './components/Gallert';

const RouteHome = ({ PanelsRef, StartPagesRef ,setTl }) => {
const nav = useNavigate()
  return (
    <>

      <section className="section section__intro  ">
        <StartPage ref={StartPagesRef} />
      </section>
      {/* <div onClick={() =>{
        setTl(tl => ({a:1}))
         nav('/projects_link')}} style={{height:'250000px'}}>a</div> */}
    
        <Panels ref={PanelsRef} />

    </>

  )
}
function App() {
  const StartPagesRef = React.useRef({})
  const PanelsRef = React.useRef({})
  const [tl, setTl] = useState(() => gsap.timeline());
  return (
    <>
      <RefContext.Provider value={{
        StartPagesRef: StartPagesRef,
        PanelsRef: PanelsRef,
        setTl: setTl
      }}>
   <Gsp  timeline={tl}>


        <Routes>
          <Route path="/" excat element={<RouteHome  setTl={setTl} StartPagesRef={StartPagesRef} PanelsRef={PanelsRef} />} />
          <Route path="/projects_link/:id"excat element={<Gallert />} />




        </Routes>
        </Gsp>


      </RefContext.Provider >
    </>
  );
}

export default App;
