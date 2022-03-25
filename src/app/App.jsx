import React from 'react';
import StartPage from './components/StartPage';
import Gsp from './Gsp';
import RefContext from './context/refContext'
function App() {
  const StartPagesRef = React.useRef({})
  console.log(StartPagesRef)
  return (
    <>
      <RefContext.Provider value={{
        StartPagesRef : StartPagesRef
      }}>

        <Gsp>
          <section className="section section__intro  ">
            <StartPage ref={StartPagesRef}/>
          </section>
          <div style={{height:'20000px'}}></div>

        </Gsp>
      </RefContext.Provider >
    </>
  );
}

export default App;
