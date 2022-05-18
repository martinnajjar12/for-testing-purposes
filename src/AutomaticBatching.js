import React, { useState } from 'react';

const AutomaticBatching = () => {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  console.log('React version is: ' + React.version);

  const clickHandler = () => {
    setTimeout(() => {
      setClicked(!clicked);
      setCount(count + 1);
    });
  };

  return (
    <div className="App-header">
      <h1>React 18</h1>
      <div> Count: {count} </div>
      <div> Clicked: {`${clicked}`} </div>
      <button onClick={clickHandler}>Click Me!</button>
    </div>
  );
};

export default AutomaticBatching;
