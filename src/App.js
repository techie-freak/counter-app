
import { useState } from 'react';
import './App.css';

function App() {
  let[num,setnum]=useState(0)
  
  const increment=()=>{
    setnum(num+1)

  }

  const decrement=()=>{
    setnum(num-1)

  }
  return (
    <div>
    <marquee>KEEP COUNTING</marquee>
    <div id="main__container">
      <h2>COUNTER HERE !</h2>
      <h1>{num}</h1>
      <div id="btn_collection">
      <button onClick={increment}>ADD</button>
      <button onClick={decrement}>SUB</button>
      </div>
    </div>
    </div>
  );
}

export default App;
