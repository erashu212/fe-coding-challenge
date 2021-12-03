import React, { useState, useCallback } from 'react';
import ChildComponent from './child';

const arr = [1, 5, 9, 5, 55, 24, 53, 12, 456, 4556];

const Performance = () => {
  const [localState, setLocalState] = useState(0);
  const [childComponentState, setChildComponentState] = useState(0);

  const increment = () => setLocalState(localState + 1);

  const incrementChildState = (number) => setChildComponentState(number);

  const largestNumber = () => {
    console.log('From getLargestFunction');
    return Math.max(...arr);
  };

  return (
    <div>
      <ChildComponent
        number={childComponentState}
        setNumber={incrementChildState}
      />
      <h1>Parent component: {localState}</h1>
      <button onClick={increment}>Parent Button</button>
      <h2> Largest Number: {largestNumber()}</h2>
    </div>
  );
};

export default Performance;
