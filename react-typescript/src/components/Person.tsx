import React from 'react'

type PersonProps={
    name:{
        first:string
        last:string
    }
}
const Person = (props:PersonProps) => {
  return (
    <div>
        <h1>
            Hi this is {props.name.first} {props.name.last}
        </h1>
    </div>
  )
}

export default Person