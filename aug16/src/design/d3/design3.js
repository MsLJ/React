import classNames from 'classnames/bind'
import React from 'react'
import "./d3.css"
import d32 from "./d32.module.css"

//classnames라이브러리
//yarn add classnames
const Design3 = () => {
    //모듈 붙은거 붙을때는 classNames.bind(위에 임포트한거)
    //이게 자동완성이 안돼서 위에 import classnames쪽에 /bind추가
    const d322=classNames.bind(d32);
  return (
    <>
    <h2 className={classNames("c1")}>d3</h2>
    <h2 className={classNames("c1","c2")}>bbb</h2>
    <h2 className={classNames({c1:false},{c2:true},"c3")}>bbb</h2>
    <h2 className={d322("d1","d2")}>ddd</h2>
    <h2 className={d322("d1")}>ddd</h2>
    </>
  )
}

export default Design3