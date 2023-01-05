import React from 'react'
import { useState } from 'react'
import './App.css';
import FormChild from './FormChild'

function Form() {
    // State Variables
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [arr, setArr] = useState([]);
    const [obj, setObj] = useState({});
    // JS

    // function
    function userInpt(e) {
        setUserName(e.target.value);
    }
    function emailfunc(e) {
        setEmail(e.target.value);
    }
    function userPass(e) {
        setPass(e.target.value);
    }
    function btnfunc() {
        setObj({
            username: userName,
            email: email,
            password: pass
        })
        setArr([obj]);
        console.log(arr);

    }

    //  


    return (
        <>
            <form action="">
                <div>
                    <label htmlFor="">UserName : </label>
                    <input type="text" value={userName} onChange={userInpt} required />
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