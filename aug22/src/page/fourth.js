import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Fourth = () => {
  //get방식 파라메터 받을때
  const [human,setHuman] = useSearchParams();
  //javaScript형식으로 파라메터 넘기고싶을때
  const navi=useNavigate();
  return (
    <>
    <h1>4</h1>
    
    <h1>{human.get("name")}</h1>
    <h1>{human.get("age")}</h1>
    <Link to="/fifth.go?namee=야채김밥&pricee=4000">fifth yachae</Link><br></br>
    <button onDoubleClick={() =>{
      navi("/fifth.go?namee=김치찌개&pricee=6000");
    }}>fifth로(김치찌개)</button>
    <br></br>
    <button onDoubleClick={()=>{
      navi(-2);
    }}>뒤로</button>
    </>
  )
}

export default Fourth