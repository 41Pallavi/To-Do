import { useState } from "react"

export function CreateTodo(){
    const [title, setTitle]=useState("")
    const [description, setDescription]=useState("")
    return <div>
        <input type="text" placeholder="tilte" onChange={function(e){
            setTitle(e.target.value)
        }}></input><br></br>

        <input type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value)
        }}></input><br></br>

        <button onClick={()=>{
    fetch("http://localhost:3000/todos",
    {
        method:"POST",
        body:JSON.stringify({
            title:title,
            description:description
        }),
        headers:{
            "content-Type":"application/json"
        }
    })
    .then(async function(res){
        const json=await res.json();
        console.log(json)
        alert("Todo added");
    })
}} >Add todo</button>
    </div>
}

