import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  // React Hooks
  const [chng, setChng] = useState('');
  const [num, setNum] = useState(0);
  const [bolean, setBolean] = useState(true);
  const [arr, setArr] = useState(['a','b','c']);
  const [inpt, setInpt] = useState('');
  const [password, setPassword] = useState('');
  //  JS

  // Functions
  function stringfunc() {
    setChng('This is first String' + secondString);
    console.log(chng);
  }
  function inptfunc(e) {
    setInpt(e.target.value);
    console.log(inpt);
  }
  function arrfunc() {
    setArr([num, ' : ', secondNum, ' : ', chng, ' : ', secondString, ' : ', inpt])
    console.log(arr);
  }
  function passfunc(p){
    setPassword(p.target.value);
    console.log(password);
  }
  // Varaibles
  let secondString = 'This is second String';
  let secondNum = 10;

  //  HTML
  return (
    <>
      <p> This is React</p>
      <label htmlFor="">UserName :<h1 style={{ display: 'inline-block' }}>:</h1></label>
      <input type="text" onChange={inptfunc} />
      <br />
      <label htmlFor="">Password :<h1 style={{ display: 'inline-block' }}>:</h1></label>
      <input type="password" onChange={passfunc} />

      <br />
      <h1>This is input : {inpt}</h1>
      <h1>This is Array :
        <ol>
          {arr.map((item) => {
            return <li>{item}</li>
          })}
        </ol>
      </h1>
      <br />
      <button onClick={stringfunc}>String</button>
      <button onClick={() => { secondNum += 20; setNum(num + secondNum); console.log(num / 9); }}>Number</button>
      <button onClick={() => { setBolean(10 < 7); console.log(bolean); }}>Boolean</button>
      <button onClick={arrfunc}>Array</button>
    </>
  );
}

export default App;
