import React from 'react';
import RefContext from './context/refContext'
import Gsp from './Gsp';

import StartPage from './components/StartPage';
import Panels from './components/Panels'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const StartPagesRef = React.useRef({})
  const PanelsRef = React.useRef({})
  return (
    <>
      <RefContext.Provider value={{
        StartPagesRef: StartPagesRef,
        PanelsRef: PanelsRef
      }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Gsp>
                <section className="section section__intro  ">
                  <StartPage ref={StartPagesRef} />
                </section>
                <section ref={ele => PanelsRef.current['panle__screen'] = ele} className="section section__panel">
                  <Panels ref={PanelsRef} />
                </section>
 
              </Gsp>
            </Route>
            <Route path="/projects_link">
                <div>
                  a
                </div>
            </Route>

          </Switch>

        </Router>

      </RefContext.Provider >
    </>
  );
}

export default App;
