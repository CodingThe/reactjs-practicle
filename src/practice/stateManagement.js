import { useState } from "react";

export default function StateManagement(){
    const[count,setCount]=useState(0);
    return(
        <>
            <div>{count}</div>
            <button onClick={e=>{setCount(Number(count)+1)}}>Click</button>
        </>
    )
}