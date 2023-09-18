import React, { useState } from "react";
import InputSecond from "./inputSecond";

const InputFirst = () => {
  //input에 쓴 값 state에 자동 업데이트
  //txt라는 state를 만들어서 초기값으로 ㅎㅎ
  //setter(setTxt)자동 생성
  const [txt, setTxt] = useState("ㅎㅎ");
  return (
    <div>
      <input
        value={txt}
        onChange={(e) => {
          //키보드 눌러서 바뀔때마다
          //input에 쓴 내용을 txt에 저장

          //e:지금 발생한 이벤트
          //e.target:지금 발생한 이벤트를 일으킨 객체
          setTxt(e.target.value);
        }}
         >
       
      </input>
      <br></br>
      <h2>{txt}</h2>
    </div>
  );
};

export default InputFirst;
