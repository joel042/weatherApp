import React from 'react';
import Weather from "./Component/Weather";
import Footer from './Component/Footer';


function App() {
  return (
    <div className="min-h-screen  flex flex-col ">
      <div className="  ">
        <Weather />

        <div>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App