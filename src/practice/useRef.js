import { useEffect, useRef, useState } from "react"

export default function UseRef(){
    // const name = useRef(null);
    // const handleClick=()=>{
    //     console.log("this is useRef",name.current.value)
    // }
    // return(
    //     <>
    //         <button onClick={handleClick}>hi from use Ref</button>
    //         <input ref={name} type="text"></input>
    //     </>
    // );

const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  });

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  );
};