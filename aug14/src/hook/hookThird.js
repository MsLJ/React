import React, { useEffect, useReducer, useState } from "react";
function changeCss2(curState, action) {
  return { ...curState, color: action.target.value };
}

const HookThird = () => {
  const [css1, setCss1] = useState({ backgroundColor: "yellow", color: "red" });
  const [css2, setCss2] = useReducer(changeCss2, {
    backgroundColor: "blue",
    color: "red",
  });
  //생성자/소멸자
  
  //처음,값이 바뀌었든
  //어쨋든 다시 그려질때마다(HookThird에 뭔가 변화가 있을때마다)
//   useEffect(()=>{
//     alert("렌더링 될 때마다");
//   });
// useEffect(()=>{
//     alert("처음 한 번");
// },[]);
// useEffect(()=>{
//     alert("css1 값이 바뀔 때 마다");
// },[css1]);
useEffect(()=>{
    //생성자
    alert("렌더링 시작");
    return()=>{
        //소멸자
        alert("없어지고 나면");

    };
},[]);

return (
    <>
      <input 
        onChange={(e) => {
          setCss1({ ...css1, color: e.target.value });
        }}
        style={css1}
        
      ></input>
      <input
        style={css2}
        onChange={(e) => {
          setCss2(e);
        }}
      ></input>
    </>
  );
};

export default HookThird;
