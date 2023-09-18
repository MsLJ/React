import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogined } from "../msweb";

//회원전체 관리를 위한 라이브러리 설치
//회원정보를 여러곳에서 쓸수있게
//yarn add @reduxjs/toolkit react-redux
const Login = () => {
  const navi = useNavigate();
  const [member, setMember] = useState({ id: "", pw: "" });

  const fd = new FormData();
  fd.append("id", member.id);
  fd.append("pw", member.pw);

  const login = () => {
    axios.post(`http://localhost:81/member.login`, fd).then((res) => {
      sessionStorage.setItem("loginToken", res.data.token);
      isLogined();
    // setTimeout(() => {
      //만료시간을 10초로해놓고 settimeout을 11초로해놓으면 11초뒤에 나오는것이기에
      //다 날라가고 아무것도 안뜨는
      // axios
      // .get(`http://localhost:81/member.info.get?token=${res.data.token}`)
      // .then((res2) => {
      //   alert(JSON.stringify(res2.data));
      // });
    // }, 11000);
    });
    setMember({ id: "", pw: "" });
  };

  return (
    <table id="loginTbl">
      <tr>
        <td align="right">
          <input
            value={member.id}
            onChange={(e) => {
              setMember({ ...member, id: e.target.value });
            }}
            placeholder="id"
            maxLength={10}
          ></input>
          <p></p>
          <input
            value={member.pw}
            onChange={(e) => {
              setMember({ ...member, pw: e.target.value });
            }}
            placeholder="pw"
            type="password"
            maxLength={10}
          ></input>
          <p></p>
          <button onClick={login}>로그인</button>
          <button
            onClick={() => {
              navi("/join.go");
            }}
          >
            회원가입
          </button>
        </td>
      </tr>
    </table>
  );
};

export default Login;
