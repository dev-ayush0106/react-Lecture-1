import React, { useReducer } from 'react'

const ACTION={
    INCREASE:"increase",
    DECREASE:"decrease"
}

const intialState={count:0}

const reducer=(state,action)=>{
    switch(action.type){
        case ACTION.INCREASE:
            return{count:state.count+1}
        case ACTION.DECREASE:
            return{count:state.count-1}

    }
}
export const Reducer = () => {
    const [state,dispatch]=useReducer(reducer,intialState)
    const increaseCount=()=>{
        dispatch({type:ACTION.INCREASE})
    }
    const decreaseCount=()=>{
        dispatch({type:ACTION.DECREASE})
    }
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <button onClick={increaseCount}>Increase</button><button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
