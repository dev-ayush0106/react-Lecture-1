import { useContext } from "react"
import { Detail } from "./App"

export default function Post(){
    let data=useContext(Detail);
    console.log(data);
    return(
        <>
            <h1>Post : {data.name}</h1>
            <h1>Course : {data.course}</h1>
        </>
    )
}