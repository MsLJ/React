import React from 'react'
import MyBtns from './mybtns'
import MyH1 from './MyH1'
import MyInput from './MyInput'
//객체간에 데이터 주고받기
//상태관리 라이브러리 redux
//React+redux

//yarn add @reduxjs/toolkit react-redux
const MyPage = () => {
  return (
    <>
    <MyInput></MyInput>
        <hr></hr>
    <MyBtns></MyBtns>
        <hr></hr>
        <MyH1></MyH1>
        </>
  )
}

export default MyPage