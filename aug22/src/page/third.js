import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Third = () => {
    //주소값에 가져온거 쓸려면 useParams
    const snack=useParams()
  return (
    <>
    <h1>Third</h1>
    <h1>{snack.n}</h1>
    <h1>{snack.p}</h1>
    <Link to="/fourth.go?name=홍길동&age=3">fourth 홍</Link><br></br>
    <Link to="/fourth.go?name=고길동&age=32">fourth 고</Link><br></br>
    </>
  )
}

export default Third