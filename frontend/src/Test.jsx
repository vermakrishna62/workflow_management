import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState({ name: "", age: "" });
  const [arr, setArr] = useState([]);

  const handleArr = (e) => {
    setArr([...arr, e.target.value]);
  };

  const handleChange = (e) => {
    setData({ ...data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="age"
        placeholder="Enter age"
        onChange={handleChange}
      />
      <br />

      <input type="number" name="arr_num" onChange={handleArr} />

      <br />
      {arr}
      <br />
      {data.name}
      <br />
      {data.age}
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Test;
