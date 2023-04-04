import React from 'react'
import PropTypes from "prop-types"


function ButtonAlert({name, handleName}) {
  return (
    <div>
        <button onClick={()=> handleName(`my name is ${name}`)}> click </button>
    </div>
  )
}
//defining propstype:
ButtonAlert.propTypes={
  handleName: PropTypes.func
}

export default ButtonAlert