import React, { useState } from 'react'

export default function Calculation({initial}) {
    const [a,seta]=useState(initial);
  return (
    <>
        <h1 role='heading'>{a}</h1>
        <button onClick={()=>{seta(a + 1)}}>Increase</button>
        <button onClick={()=>{seta(a - 1)}}>Decrease</button>
        <button onClick={()=>{seta(a * -1)}}>Change sign</button>
    </>
  )
}
