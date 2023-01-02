import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  // React Hooks
  const [chng, setChng] = useState('first');
  //  JS
  function func(){
    setChng('this is react');
    console.log(chng);
  }
  //  HTML
  return (
    <>
      <p> This is React</p>
      <button onClick={func}> Click</button>
    </>
  );
}

export default App;
