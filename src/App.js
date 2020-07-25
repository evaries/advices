import React from 'react';
import Advices from './components/advices/Advices'
import NightSky from './video/nightsky.mp4'
function App() {
  return (
    <div >
      <video autoPlay loop muted
        style={{
          position: "absolute",
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}
      >
        <source src={NightSky} type='video/mp4' />
      </video>
      <Advices />
    </div>
  );
}

export default App;
