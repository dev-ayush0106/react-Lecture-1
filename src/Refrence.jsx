import { useEffect, useRef, useState } from "react"

export default function Refrence(){

    let InputRef=useRef();
    let update=useRef()

    // let [count , setCount]=useState(0);
    // useEffect(()=>{
    //     // setCount(count+1);
    // })

    function handleClick(){
        console.log(InputRef)
        InputRef.current.style.width="400px"
        InputRef.current.focus()
        InputRef.current.style.transition="width 5s ease-out"

        update.current.style.width="400px"
        update.current.style.height="400px"
        update.current.style.backgroundColor="red"
        update.current.style.marginTop="50px"
    }
    return(
        <>
            <input type="text" ref={InputRef} />
            <br />
            
            <div ref={update}>

            </div>
            <br />
            <button onClick={handleClick}>Changes</button>


        </>
    )
}