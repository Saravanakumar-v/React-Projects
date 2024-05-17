import React, { useEffect } from 'react';
import { MultistepFormContainerComponent } from './form-container-component';
import './App.scss';
import { useNavigate } from 'react-router-dom';

// Multistep Form


function App() {
  const route = useNavigate();

  return (
    <div className="App">
      <div className='form'>
        <MultistepFormContainerComponent />
      </div>
    </div>
  );
}

export default App;
  