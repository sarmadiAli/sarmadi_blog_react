import React from 'react';
import RefContext from './context/refContext'
import Gsp from './Gsp';

import StartPage from './components/StartPage';
import Panels from './components/Panels'
function App() {
  const StartPagesRef = React.useRef({})
  const PanelsRef = React.useRef({})
  console.log(PanelsRef)
  return (
    <>
      <RefContext.Provider value={{
        StartPagesRef: StartPagesRef,
        PanelsRef: PanelsRef
      }}>

        <Gsp>
          <section className="section section__intro  ">
            <StartPage ref={StartPagesRef} />
          </section>
          <section ref={ele => PanelsRef.current['panle__screen'] = ele}   className="section section__panel">
            <Panels ref={PanelsRef} />
          </section>

        </Gsp>
      </RefContext.Provider >
    </>
  );
}

export default App;
