import { useState } from "react";

export default function Like(){

    let [liked,setLiked]=useState(false);
    let [count,setCount]=useState(0);

    function update(){
        setLiked(!liked);
        setCount(count+1)
    }

    let style={fontSize:"5rem"};
    return(
        <>

            {/* <button onClick={update}>click</button> */}

        {
            (liked)? 
            (<i onClick={update} style={style} className="fa-solid fa-heart"></i>)
             : 
            ( <i onClick={update} className="fa-regular fa-heart" style={style}></i>)
        }
           
        </>
    )
}