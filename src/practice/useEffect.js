import { useEffect, useState } from "react";

const UseEffectHook = () => {
//   const [arr, setArr] = useState(["hi"]);

//   useEffect(() => {
//     console.log("component run");
//   }, []);

//   return (
//     <>
//       <div>{arr}</div>
//     </>
//   );


const [count,setCount]=useState(0);
// useEffect(()=>{
//     console.log('Count updated:', count);
// },[count])

// debouncing
useEffect(()=>{
    const handler = setTimeout(()=>{
        console.log("debounced:",count);
    },500);
    return ()=>{
        clearInterval(handler);
    }
},[count])

return(
    <>
        <button onClick={()=>setCount(count+1)}>Click Vals</button>
    </>
)
};

export default UseEffectHook;
