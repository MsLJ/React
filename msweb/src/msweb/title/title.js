import React from "react";
import logoImg from "./doge.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Corrected the import statement
import Login from "../member/login";
import Logined from "../member/logined";

const Title = () => {
  //React에서 이미지를 쓰고싶으면 위에
//import ??? from 경로
//<img src={???}>
    //                       state는여기 ls는 storee에 있는 loginMember는 slice에 있는거
  const loginInfo = useSelector((state) => state.ls.loginMember); 
  let loginPage = null; 

  if (loginInfo.id === undefined || loginInfo.id === "") {
    loginPage = <Login />; 
  } else {
    loginPage = <Logined />;
  }

  return (
    <table id="siteTitle">
      <tr>
        <th>
          <Link to="/">
            <td align="left">
              <img src={logoImg} alt="Logo" />
            </td>
          </Link>
        </th>
      </tr>
      <tr>
        <td id="siteMenu" align="center">
          <table id="siteMenu2">
            <tr>
              <td>{loginPage}</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </table>
  );
};

export default Title;
