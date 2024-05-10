import React, { useEffect, useState } from 'react';

import LandingPageComponent from './landing-page-component';
import { NavBarComponent } from './navbar-component';
import './App.scss';

function App() {
  const [sharedData, setSharedData] = useState(false)

  useEffect(() => {
    if(sharedData) {
      console.log(sharedData);
    }
  },[sharedData])

  return (
    <div className="webpage-react">
      <div className='webpage-react_header'>
        <NavBarComponent setGlobalDarkMode={setSharedData}/>
      </div>

      <div className='webpage-react_landingPage'>
        <LandingPageComponent/>
      </div>
    </div>
  );
}

export default App;

