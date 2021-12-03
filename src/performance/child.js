import React, { memo } from 'react';

const ChildComponent = ({ number, setNumber }) => {
  console.log('From child component', number);

  const onClickHandler = () => setNumber(number + 1);

  return (
    <div>
      <h1>Child component {number}</h1>
      <button onClick={onClickHandler}>Child Button</button>
    </div>
  );
};

export default ChildComponent;
