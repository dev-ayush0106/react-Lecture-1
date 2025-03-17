import { useEffect, useState } from "react"

export default function Data(){

    let [users,setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=> response.json())
        .then((data)=> setUsers(data));

        console.log(users);
    },[])

    return(
        <>
        {/* <h1>Hello</h1> */}
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{`Name=${user.name} Website=${user.website}`}</li>
                ))}
            </ul>
        </>
    )
}