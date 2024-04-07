import React, { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  function increament() {
    setNumber(number + 1);
  }
  function reset() {
    setNumber(0);
  }
  return (
    <>
      <button onClick={increament}>Click Me</button>
      <button onClick={reset}>Reset</button>
      <p>{number}</p>
    </>
  );
}
