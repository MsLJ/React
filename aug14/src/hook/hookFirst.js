import React, { useState } from 'react'

//시작할때 rafce
//Virtual DOM
//OOP
//      Class를 만들어놓고..
//          멤버변수,메소드,.....
//      React측에서 함수 기반 권장
//          멤버변수?,메소드?
//          hook:=>class같은 기능들을 할 수 있도록
//              useXXX
const HookFirst = () => {
  //useState:멤버변수 기능 [멤버변수,setter]=usetState(기본값) 다 있는
  const [cnt, setCnt] = useState(0);
    return (

    <button onClick={() => { setCnt(cnt+1) }}>{cnt}</button>
  )
}

export default HookFirst