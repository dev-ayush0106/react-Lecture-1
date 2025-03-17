import { useEffect, useState } from "react"

export default function Hooks1(){
    let [msg,setMsg]=useState(0);
    let [count,setCount]=useState(5);

    function update(){
        setMsg(msg+1);
    }

    useEffect(()=>{
        document.title=`${count} Messages!`
    },[count])

    return(
        <>
            <h1>Count {msg}</h1>
            <button onClick={update}>Increase</button>
            <h1>Re-render {count}</h1>
            <button onClick={()=>{setCount(count+5)}}>Increase</button>

        </>
    )
}