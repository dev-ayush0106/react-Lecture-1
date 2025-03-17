import React, { createContext, useContext } from 'react'
import './App.css'
import Events from './Events'
import State from './State'
import Like from './Like'
import MainComponent from './MainComponent'
import ThemeChange from './ThemeChange'
import Hooks1 from './Hooks1'
import Data from './Data'
// import MainTab from './MainTab'


export const Detail =createContext()
function App() {

  let obj={
    name:"Ayush",
    course:"MERN"
  }

  return (
  <div>
    
    {/* <MainTab/> */}

    {/* <h1>CLICK EVENTS</h1>
    <h1>STATES & HOOKS</h1> */}

    {/* <Events/> */}

    {/* <State/> */}

    {/* <h1>Hello</h1> */}
      
      {/* <Like/> */}
    
    {/* <Detail.Provider value={obj}>
    <MainComponent/>
    </Detail.Provider>
    */}

    {/* <ThemeChange/> */}

    {/* <Hooks1/> */}
    <Data/>
  </div>
  )
  
}

export default App
