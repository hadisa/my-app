// import { useState } from "react";

import { useState } from "react";

function Counter() {
  const [count , setCount] = useState(0);
  // let count=0;


  function increment() {
    setCount(count+1);
    // count++;
    console.log(count);
  }
  return (
    <div className="flex flex-col border border-gray-50 p-8">
      <h1>Counter</h1>
      <span className="font-bold">Count: {count}</span>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>Click on me</button>
    </div>
  );
}

export default Counter;
