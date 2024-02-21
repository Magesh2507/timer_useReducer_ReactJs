import React from 'react'

const Button = ({handleClick, text}) => {
  const buttonStyles = {padding:"5px 10px", color: "white", backgroundColor:text==="Reset"?"gray": text==="Stop"?"Red":"green",margin:"5px 10px", cursor: "pointer"}
  return (
    <div >
        <button style={buttonStyles}  onClick={()=>handleClick(text)}>{text}</button>
    </div>
  )
}

export default Button