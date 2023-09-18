import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const navi=useNavigate();
  const [member, setMember] = useState({
    id: "",
    pw: "",
    pwChk: "",
    name: "",
  });
  const changeMemberInfo = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  //ajax로 post방식으로 보내기 위한
  //yarn add axios
  const fd=new FormData();
  fd.append("id",member.id);
  fd.append("pw",member.pw);
  fd.append("name",member.name);


const join = () => { 
  
  if(member.pw==member.pwChk){
    axios.post(`http://localhost:81/member.join`,fd).then((res)=>{
     if(res.data.id!==undefined){
      alert("성공");
      navi("/")
     }else{
      alert("실패")
     }
    });
    setMember({
      id:"",
      pw:"",
      pwchk:"",
      name:"",
    })

  }
};



  return (
    <table id="joinTbl">
      <tr>
        {" "}
        <th>회원가입</th>
      </tr>
      <tr>
        {" "}
        <td align="center">
          <input
            value={member.id}
            name="id"
            onChange={changeMemberInfo}
            placeholder="id"
          ></input>
        </td>
      </tr>
      <tr>
        {" "}
        <td align="center">
          <input value={member.pw} name="pw" onChange={changeMemberInfo}  placeholder="pw" type="password"></input>
        </td>
      </tr>
      <tr>
        {" "}
        <td align="center">
          <input name="pwChk" value={member.pwChk} onChange={changeMemberInfo} placeholder="pwCk" type="password"></input>
        </td>
      </tr>
      <tr>
        {" "}
        <td align="center">
          <input name="name" value={member.name} onChange={changeMemberInfo} placeholder="name"></input>
        </td>
      </tr>
      <button onClick={join}>가입</button>
    </table>
  );
};

export default Join;
