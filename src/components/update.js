import React from 'react';
import '../styles/service.css'
import {useStore} from "../store"

import { useState, useEffect } from "react";


export default function Update(){
    const [state, dispath] = useStore()
    const [user_id, setUser_id] = useState(-1)
    const [tempo, setTempo] = useState({
        name: state.login.name,
        dob: null,
        phone: state.login.phone,
        // email: null,
        password: null,
        delivery_info : state.login.delivery_info
    }) 
    
    const islogin = state.login._id
    useEffect(() => {
        if (state.login._id != null ){
            setUser_id(state.login._id)
        }
    },[])


    function handleSubmitForm(event) {
        event.preventDefault()
        if(tempo.name==null){
            alert("type name")
        }   
        else if(tempo.DOB==null){
            alert("choose DOB")
        } 
        else if(tempo.phone==null){
            alert("type phone")
        }   
        // else if(tempo.email==null){
        //     alert("type email")
        // }   
        else if(tempo.password==null){
            alert("type password")
        }   
        else if(tempo.delivery_info==null){
            alert("type address")
        }   
        else{
            event.preventDefault();
            let bodyContent = JSON.stringify({
                name: tempo.name,
                dob: tempo.dob,
                phone: tempo.phone,
                email: tempo.email,
                password: tempo.password,
                delivery_info : tempo.delivery_info
            })
            fetch ("https://pacific-ridge-30189.herokuapp.com/customer?id="+String(user_id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: bodyContent,
            })
            alert("success")
        }    
    }
    function handleOnChange(event) {
        const value = event.target.value;
        setTempo({
            ...tempo,
            [event.target.name] : value
        })
    }

    function handletextarea(event){
        const value = event.target.value;
        setTempo({
            ...tempo,
            delivery_info : value
        })
    }

    return(
        <div className= 'renBox'> 
            <div className='boxname'>
                User information
            </div>
            <div className='boxdetail'>
                {islogin && <form id="subform" onSubmit={event => handleSubmitForm(event)}>
                    <label>Name</label>
                    <input  type="text"
                            name="name"
                            className = "ip"
                            value={tempo.name}
                            onChange={event => handleOnChange(event)}/> <br></br>
                    <label>DOB  </label>
                    <input  type="date" 
                            name="DOB" 
                            className = "ip"
                            value={tempo.dob}
                            onChange={event => handleOnChange(event)}/> <br></br>
                    <label>Phone  </label>
                    <input  type="text"
                            name="phone"
                            className = "ip"
                            value={tempo.phone}
                            onChange={event => handleOnChange(event)}/> <br></br>
                    {/* <label>Email </label>
                    <input  type="email"
                            name="email"
                            className = "ip"
                            value={tempo.email}
                            onChange={event => handleOnChange(event)}/> <br></br> */}
                    <label>Password</label>
                    <input  type="password"
                            name="password"
                            className = "ip"
                            value={tempo.password}
                            onChange={event => handleOnChange(event)}/> <br></br>
                    <label id = "addr">Address</label>
                    <textarea  type="text"
                            name="text"
                            className = "txta"
                            value={tempo.delivery_info} 
                            form = "subform"   
                            onChange={event => handletextarea(event)}></textarea> <br></br>
                    <input className="input" type="submit" value="Submit" />
                </form>||!islogin && <h2 className = "loginReq">Please Login</h2>}
            </div>
        </div>
    );
}

