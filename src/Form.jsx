import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
import FormChild from './FormChild'

function Form() {
    // State Variables
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [arr, setArr] = useState([]);
    const [obj, setObj] = useState({});
    // JS

    // function
    function userInpt1(e) {
        setFirstName(e.target.value);
    }
    function userInpt2(e) {
        setLastName(e.target.value);
    }
    function emailfunc(e) {
        setEmail(e.target.value);
    }
    function userPass(e) {
        setPass(e.target.value);
    }
    function btnfunc(e) {
        e.preventDefault()
        setObj({
            firstName,
            lastName,
            email: email,
            password: pass
        })
        setArr([...arr ,{
            firstName,
            lastName,
            email: email,
            password: pass
        }]);
    }
    useEffect(()=>{
        console.log(arr)
    },[arr])

    //  


    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="">FirstName : </label>
                    <input type="text" value={firstName} onChange={userInpt1} required />
                </div>
                <div>
                    <label htmlFor="">LastName : </label>
                    <input type="text" value={lastName} onChange={userInpt2} required />
                </div>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type='email' value={email} onChange={emailfunc} required />
                </div>
                <div>
                    <label htmlFor="">Password : </label>
                    <input type="password" value={pass} onChange={userPass} required />
                </div>
                <button onClick={btnfunc}>Submit</button>
            </form>
        </>
    )
}

export default Form