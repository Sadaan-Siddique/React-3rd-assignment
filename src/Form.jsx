import React from 'react'
import { useState } from 'react'
import FormChild from './FormChild'

function Form() {
    // State Variables
   const [userName,setUserName] = useState('');
   const [pass,setPass] = useState('');
   const [arr , setArr] = useState([]);
   const [obj , setObj] = useState({});
    // JS

    // function
     function userInpt(e){
        setUserName(e.target.value);
     }
     function userPass(e){
        setPass(e.target.value);
     }
     function btnfunc(){
        setArr([...arr,userName,pass]);
        console.log(arr);
        setObj({
            username : userName,
            password : pass
        })
        console.log(obj);

     }

     let arry = [
        {
            label :'UserName : ',
            type : 'text',
            func : userInpt
        },
        {
            label :'Password : ',
            type : 'password',
            func : userPass
        }
        
    ]
        let newArr = arry.map((item)=>{
           return <FormChild data={item}/>
            
        })
    
    
  return (
    <>
    <div>
        <h1>{newArr}</h1>
        <p>{userName}</p>
        <label htmlFor="">UserName : </label>
        <input type="text" value={userName} onChange={userInpt} />
        <label htmlFor="">Password : </label>
        <input type="password" value={pass} onChange={userPass} />
        <button onClick={btnfunc}>Submit</button>
    </div>
    </>
  )
}

export default Form