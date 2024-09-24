'use client';

import { useState } from "react";
import './Counter.css'; // Import your CSS file

export default function Root() {
  const [countVal, setCountVal] = useState(0); // counterDisplay value variable 

  const countBtnHandler = () => {  // increases counts
    setCountVal(countVal + 1);
  };

  const removeCountHandler = () => {   // decreases counts
    if (countVal === 0) {
      return;
    }
    setCountVal(countVal - 1);
  };

  const resetCounts = () => {
    setCountVal(0);
  }

  const formatCount = (num: number) => {  // Function to format the number as two digits
    return num.toString().padStart(2, '0'); // Ensures two digits
  };

  return (
    <div className="counterContainer">
      <h1>Counter App</h1>
      <p className="counterValue">Count: {formatCount(countVal)}</p>
      <button className="counterButton" onClick={countBtnHandler}>Counter</button>
      <button className="counterButton removerButton" onClick={removeCountHandler}>Remover</button>
      <button className="counterButton resetButton" onClick={resetCounts}>Reset</button>
    </div>
  );
}
