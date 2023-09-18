import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const First = () => {
    const [studnet, setStudnet] = useState({name:"",age:""});
    const make= ()=>{
        axios.get(`http://localhost:81/student.save?name=${studnet.name}&age=${studnet.age}`)
        .then((res)=>{
            sessionStorage.setItem("myToken",res.data.token);
           
            setStudnet({name:"",age:""});
        })
    }
    
  return (
    <>
<h1>first</h1>
<hr></hr>
이름:{" "}<input value={studnet.name} onChange={(e)=>{
    setStudnet({...studnet,name:e.target.value});
}}></input>
<hr></hr>
나이:<input value={studnet.age} onChange={(e)=>{
    setStudnet({...studnet,age:e.target.value});
}}></input>
<hr></hr>
<button onClick={make}>토큰만들기</button>

<a href="second.go">Second로</a><br></br>
<Link to="/second.go">ss</Link>
    </>
  )
}

export default First