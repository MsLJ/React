import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

const Site = () => {

    //그리고 그 컨텐츠 내용이 보여지고 싶은곳에는
    //<Outlet>
    const siteCss={width:"1200px",marginLeft:"auto",marginRight:"auto"}
    const txtt=useSelector((state)=>state.mts.txt);
  return (
    <table style={siteCss} border={1}>
        <tr><th>{txtt}</th></tr>
        <tr><td>
            <Link to="/">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/sns.go">sns</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/mypage.go">Page</Link>
            </td></tr>
        <tr><td>
            <Outlet></Outlet>
            </td></tr>
        </table>
  )
}

export default Site