import { useState } from "react";
import ChildComponent from "./child";

export default function ParentComponent(){
    function testing(){
        alert("you clicked function");
    }
    return(
        <>
            <div>This is from parent</div>
            {/* <ChildComponent hi="this is send message to child" vals="this is vals"/> */}
            <ChildComponent testing={testing}/>
        </>
    )
}