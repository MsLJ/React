import React, { useState } from 'react'

const MyBtn = () => {
    //각 객체들은 state(멤버변수)가 있음
    // dar
    //const [getter,setter] = useState(기본값)
    const[cnt,setCnt]=useState(0);//cnt에는 0저장돼고
                                  //setter만들어짐
    //nfn
    const incrCntHaha = () => {
        setCnt(cnt+1);

     }
  return (
    <div>
        
        <h2>{cnt}</h2>
        <button onClick={incrCntHaha}>asd</button>
    </div>
  )
}

export default MyBtn