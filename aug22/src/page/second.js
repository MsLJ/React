import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const Second = () => {
    const show= ()=>{
        axios.get(`http://localhost:81/student.get?token=${sessionStorage.getItem("myToken")}`)
        .then((res)=>{
            alert(JSON.stringify(res.data));
        });
    }
    const del = () => { 
        sessionStorage.removeItem("myToken");
        
    };
    const update = () => { 
        axios.get(`http://localhost:81/student.update?token=${sessionStorage.getItem("myToken")}`)
        .then((res)=>{
            if(res.data.token==="없음"){
                sessionStorage.removeItem("myToken");
                
            }else{
                alert(JSON.stringify(res.data));
                sessionStorage.setItem("myToken",res.data.token);
            }
        })

    };
  return (
    <div>
        <h1>second</h1>
        <hr></hr>
        <button onClick={show}>확인</button><br></br>
        <button onClick={del}>토큰삭제</button><br></br>
        <button onClick={update}>토큰 갱신</button>
        <Link to="/third.go/새우깡/5000">third(새우깡)</Link><br></br>
        <Link to="/third.go/양파링/5000">third(양파링)</Link>
    </div>
  )
}

export default Second