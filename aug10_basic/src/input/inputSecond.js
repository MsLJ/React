import React, { useState } from "react";

const InputSecond = () => {
  //input에 쓴 값 state에 자동 업데이트
  //txt라는 state를 만들어서 초기값으로 ㅎㅎ
  //setter(setTxt)자동 생성

  const [c, setC] = useState("black");
  const [h2Css, setH2Css] = useState({
    backgroundColor: "yellow",
    color: "black",
    fontSize:"50pt"
  });
  //InputSecond라는 객체의 상태(멤버변수)

  return (
    <div>
      <input
        value={c}
        onChange={(e) => {
          setC(e.target.value);
        }}
      ></input>
      <br></br>
      <button
        onClick={() => {
          //...객체 : 그(배경색,글자색,폰트사이즈) 객체 그대로 다시 불러오기
          setH2Css({ ...h2Css ,color: c });
        }}
      >
        색 바꾸기
      </button>
      <h2 style={h2Css}>as</h2>
    </div>
  );
};

export default InputSecond;
