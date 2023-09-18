import React, { useReducer } from 'react'
//              현재 상태,  액션
function playGame(curStateee,actionn){
// alert(curStateee);//호출될 당시의 상태값(cmt
// alert(actionn.whatt);//setter에 넣어준값
// alert(actionn.actt);
//return 상태값
return curStateee + "->"+actionn.whatt + " "+actionn.actt;

}

const HookSecond = () => {
//멤버변수
//복잡한거 가능, 소스정리
//useReducer
//const[멤버변수,setter]=useReducer(함수명,초기값)
 const [cmt, setCmt] = useReducer(playGame, "대기");
    return <>
    <button onClick={()=>{setCmt({whatt:"청기",actt:"올려"})}}>청기올려</button>
    <button onClick={()=>{setCmt({whatt:"청기",actt:"내려"})}}>청기내려</button>
    <button onClick={()=>{setCmt({whatt:"백기",actt:"올려"})}}>백기올려</button>
    <button onClick={()=>{setCmt({whatt:"백기",actt:"내려"})}}>백기내려</button>
   <h1>{cmt}</h1>
    </>
  
}

export default HookSecond