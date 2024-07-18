import { useState } from "react"
import { useCountStore } from "../store"

export const Counter=()=>{
    const [remove,setRemove]=useState(false)
    const [count,setCount]= useCountStore()

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        setCount(count-1)
    }

    if(remove) return null

    return (<div>
        <p>Count : {count}</p>
        <button onClick={()=>setRemove(true)}>remove</button>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>)
}