import React from 'react'

function FormChild(props) {
    // let arry = [
        //     {
        //         label :'UserName : ',
        //         type : 'text',
        //         func : userInpt,
        //         btnFunc : btnfunc,
        //         value : userName
        //     },
        //     {
        //         label :'Password : ',
        //         type : 'password',
        //         func : userPass,
        //         btnFunc : btnfunc,
        //         value : pass
        //     }
            
        // ]
        //     let newArr = arry.map((item)=>{
        //        return <FormChild     data={item}/>
                
        //     })
  return (
    <>
    <label htmlFor="">{props.data.label}</label>
    <input type={props.data.type} value={props.data.value} onChange={props.data.func}/>
    <button onClick={props.data.btnFunc}>Submit</button>     
    </>
  )
}

export default FormChild