import { useEffect, useState } from "react";

//data fetch
export default function UseFetch(url){
    const[data,setData]=useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        let isMounted=true;
        fetch(url)
        .then((res)=>res.json())
        .then((result)=>{
            if(isMounted){
                setData(result);
                setLoading(false);
            }
        })
        return ()=>(isMounted=false);
    },[url]);
    
    return {data,loading};
}