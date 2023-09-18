import axios from "axios";
import React, { useEffect, useState } from "react";

const Ajax2 = () => {
  const [snack, setSnack] = useState({ name: "", price: "" });
  const regSnack = () => { 
    const url=`http://localhost:81/snack.reg?name=${snack.name}&price=${snack.price}`;
    axios.get(url).then((res)=>{
        alert("등록성공");
        //등록됐을때 한번
        getSnack();
        setSnack({name:"",price:""});
    });

   };
   const [snacks, setSnacks] = useState([]);

const snacksTr=snacks.map((s,i)=>(
    <tr>
        <td>{s.name}</td>
        <td>{s.price}</td>
    </tr>
))



   const getSnack=()=>{
    const url="http://localhost:81/snack.get";
    axios.get(url).then((res)=>{
        
        setSnacks(res.data.snacks)
        

    })
   };
//처음 렌더링될때 실행될것 useEffect
   useEffect(()=>{
    getSnack();
   },[]);

  return (
    <>
      이름:
      <input
        value={snack.name}
        onChange={(e) => {
          setSnack({ ...snack, name: e.target.value });
        }}
      ></input>
      가격:
      <input
        value={snack.price}
        onChange={(e) => {
          setSnack({ ...snack, price: e.target.value });
        }}
      ></input>
      <button onClick={regSnack}>등록</button>
      <hr></hr>
      <button onClick={getSnack}>보기</button>
      <table border={1}>{snacksTr}</table>
    </>
  );
};

export default Ajax2;
