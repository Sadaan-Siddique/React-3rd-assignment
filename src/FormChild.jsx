import React from 'react'

function FormChild(props) {
    
  return (
    <>
    <label htmlFor="">{props.data.label}</label>
    <input type={props.data.type} onChange={props.data.func}/>
    <button>Submit</button>     
    </>
  )
}

export default FormChild