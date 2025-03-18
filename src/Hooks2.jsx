import { useReducer } from "react"
export default function Hooks2(){
    let [state,dispatch]=useReducer(reducer,intialState)
    function increaseButton(){
        dispatch({type:"increase"})
    }
    function decreaseButton(){
        dispatch({type:"decrease"})
    }
    return(
        <>
            <h1>Count:{state.count}</h1>
            <button onClick={increaseButton}>Increase</button>
            <button onClick={decreaseButton}>Decrease</button>
        </>
    )
}


let intialState={count:0};
let reducer=(state,action)=>{
    switch(action.type){
        case "increase":
            return{ count : state.count+1}
        case "decrease":
            return{count : state.count-1}
    }
}
