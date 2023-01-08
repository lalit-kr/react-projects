import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [num,setNum]=useState(0);

    useEffect(()=>{
        document.title=`Clicked ${num} times`;
    },[num]);

  return (
    <div>
        <button onClick={()=>setNum(num+1)}>
            <h2>Click Me {num}</h2>
        </button>
    </div>
  )
}
