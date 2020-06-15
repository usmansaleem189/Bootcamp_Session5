import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import counterContext from './CounterContext';


function App() {

//let [count, setCount] = useState(30);
let countState = useState(0);

  return (
    <counterContext.Provider value ={countState}>
      <div>
        <Parent />
      </div>
    </counterContext.Provider>
  );
}

export default App;
