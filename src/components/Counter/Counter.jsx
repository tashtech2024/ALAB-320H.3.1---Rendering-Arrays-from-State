import { useState } from "react";

function Counter() {

  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1)// 0 + 1
    setCounter(counter + 1)// 0 + 1
    setCounter(counter + 1)// 0 + 1
    setCounter(counter + 1)// 0 + 1
    setCounter(counter + 1)// 0 + 1
    
    setCounter((counter) => counter + 1)// 0 + 1
    setCounter((counter) => counter + 1)// 1 + 1
    setCounter((counter) => counter + 1)// 2 + 1
    setCounter((counter) => counter + 1)// 3 + 1
    setCounter((counter) => counter + 1)// 4 + 1

  };

  return (
    <div>
      <h1>Counter: {counter}</h1>

      <button onClick={addOne}>Add One</button>
    </div>
  );
}

export default Counter;