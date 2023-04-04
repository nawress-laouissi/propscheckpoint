import React from 'react'

function ButtonAlert({name, handleName}) {
  return (
    <div>
        <button onClick={()=> handleName(`my name is ${name}`)}> click </button>
    </div>
  )
}

export default ButtonAlert