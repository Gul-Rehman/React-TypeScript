import React, { ButtonHTMLAttributes } from 'react'
type ButtonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    id?:number
}

const Button = (props:ButtonProps) => {
    const {id=1}=props
  return (
    <div><button onClick={event=>props.handleClick(event,id)}>Click Me</button></div>
  )
}

export default Button