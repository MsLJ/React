import React from "react";

//JSX
//  DOM객체 하나여야
//  종료태그가 반드시
//  <태그명 속성명="값"></태그명>
//          attribute
//          propertie
//          낙타체

//props
//  DOM객체 속성들이 JS객체 형태로
const PropsFirst = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <div></div>
      <h1>{props.price}</h1>
    </>
  );
};

export default PropsFirst;
