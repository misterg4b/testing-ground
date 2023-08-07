'use client'
import React, {useState} from 'react'

type Props ={
    name:string
    isLog? : boolean
}
 
const Counter = (props :Props) => {
  const [count, setCount] = useState(0)
  const {isLog = 0} = props
  
 
  return (
    <div>
      
      {props.isLog
        ?<p>You clicked {count} times, namamu {props.name}</p>
         :<button onClick={() => setCount(count + 1)}>Click me</button> }
        
    </div>
  )
}

export default Counter;
