import React, { useEffect, useState } from "react";

const CustomBody = ({ author }) => {
  const [modified, setModified] = useState(29);
  const [counter, setCounter] = useState({
    value: 0,
    name: "initial counter",
  });

  const [input, setInput] = useState("");

  const changeCounter = () => {
    setCounter({ ...counter, value: counter.value + 1 });
  };

  useEffect(() => {
    setModified((modified) => modified + 1);
  }, [counter]);

  return (
    <div>
      <h1>Modified date is {modified} </h1>
      <p>The current counter is {counter.value}</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        name="input 2"
        placeholder="Fill your name here"
        value={input}
      />
      <p> the user name is: {input} </p>
    </div>
  );
};
export default CustomBody;
