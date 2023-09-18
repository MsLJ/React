import axios from "axios";
import React, { useState } from "react";

const JwtClient = () => {
  const [human, setHuman] = useState({ name: "", age: "" });
  const save = () => {
    axios
      .get(
        `http://localhost:81/student.save?name=${human.name}&age=${human.age}`
      )
      .then((res) => {
        //브라우저 닫을때까지 살아있는
        sessionStorage.setItem("st", res.data.token);
        alert(JSON.stringify(res.data));
      });
    setHuman({ name: "", age: "" });
  };

  const print = () => {
    axios
      .get(`http://localhost:81/student.get?token=${sessionStorage.getItem("st")}`)
      .then((res) => {
        alert(JSON.stringify(res.data));
      });
  };
  return (
    <div>
      이름
      <input
        value={human.name}
        onChange={(e) => {
          setHuman({ ...human, name: e.target.value });
        }}
      ></input>
      <p></p>
      나이
      <input
        value={human.age}
        onChange={(e) => {
          setHuman({ ...human, age: e.target.value });
        }}
      ></input>
      <p></p>
      <button onClick={save}>저장</button>
      <p></p>
      <button onClick={print}>출력</button>
    </div>
  );
};

export default JwtClient;
