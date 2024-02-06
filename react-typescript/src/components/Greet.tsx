import React from 'react'

type GreetProps={
    name:string
}
const Greet = (props:GreetProps) => {
  return (
    <div>
        <h1>Hello {props.name}, how are you?</h1>
    </div>
  )
}

export default Greet