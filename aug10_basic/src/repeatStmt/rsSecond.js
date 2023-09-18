import React, { useState } from 'react'

const RsSecond = () => {
    //jQuery의 $.each기능 +값 리턴 받아서 배열로 만들어주기도
    const [data, setdata] = useState(["ㄱㄱㄱ","ㄴㄴㄴ","ㄷㄷㄷ"])
    const trs=data.map((v,i) => { 
        return (
            <tr>
                <td>
                    {v}
                </td>
            </tr>
        );
     });
  
    return (
    
    <table border={1}>

        {trs}
    </table>
  )
}

export default RsSecond