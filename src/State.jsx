import { useState } from "react"
export default function State(){
    let [counter,setCount]=useState(0);
    let [detail,setDetail]=useState("");
    function increase(){
        setCount(counter+1)
    }
    function decrease(){
        setCount(counter-1)
    }
    return(
        <>
        {detail} has clicked {counter} times
        <br />
        <input type="text" onChange={(e)=> setDetail(e.target.value)}/>
        <br />
            <button onClick={increase}>
                Inc
                </button>
                <button onClick={decrease}>
                    Dec
                </button>
        </>
    )
}