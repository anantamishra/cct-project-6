import React, { useState } from "react";

function About() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleInput1Change = (event) => {
    setInput1(Number(event.target.value));
  };

  const handleInput2Change = (event) => {
    setInput2(Number(event.target.value));
  };

  const calculateSum = () => {
    setSum(input1 + input2);
  };

  return (
    <div>
      <input type="number" value={input1} onChange={handleInput1Change} />
      <input type="number" value={input2} onChange={handleInput2Change} />
      <button onClick={calculateSum}>Calculate Sum</button>
      <div>Sum: {sum}</div>
    </div>
  );
}

export default About;
