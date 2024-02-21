import React from 'react'

const Screen = ({value}) => {
  return (
    <div style={{textAlign:"center",margin:"5px 10px"}}><h1 style={{color:"blue"}}>Timer</h1>
    <h3 style={{margin:"5px 10px"}}>{value}s</h3></div>
  )
}

export default Screen