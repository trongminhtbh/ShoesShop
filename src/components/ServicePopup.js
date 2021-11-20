
import React from 'react';

import '../styles/ServicePopup.css'

import {OrderApiClient} from "../pages/admin/helpers"
import { useState, useEffect } from "react";


export default function Popup(props){
    const [pack, setPack] = useState(props.pack)
    const [pairs, setPairs] = useState(0)
    const [address, setAddress] = useState(props.user.address)
    const [price, setPrice] = useState(0)
    const [receive, setReceive] = useState(false)
    const [date, setDate] = useState("")
    const [picked, setpicked] = useState(false)
    const [shipfee, setShipfee] = useState(0)
    const [legitaddress, setLegitaddress] = useState(false)
    const [fadd, setFadd] = useState(false)

    useEffect(() => {
        setAddress(props.user.address)
    },[])

    function handleSubmitForm(event) {
        event.preventDefault()
        if(props.user_id==-1){
            alert("Please login")
        }
        else 
        if(pack==0){
            alert("choose pack")
        }
        else if(parseInt(pairs)==0){
            alert("Choose pairs")
        }
        else if(date==""){
            alert("Choose date")
        }
        else{
            if(receive&&!legitaddress){
                alert("Can not deliver to this address, please update your address")
            }
            else{
                event.preventDefault();
                let bodyContent = JSON.stringify({
                    name: props.user.name,
                    phone: props.user.phone,
                    email: props.user.email,
                    num_of_pair: parseInt(pairs),
                    pack: parseInt(pack)===1 && "standard" || parseInt(pack)===2 && "advanced",
                    received_time: "",
                    send_time: date,
                    total: price,
                    address: address,
                    type_received: !receive&&("At store") || receive&&"home",
                })
                // console.log(bodyContent)
                fetch ("https://pacific-ridge-30189.herokuapp.com/schedule", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: bodyContent,
                })
                alert("success")
            }
            
        }    
    }

    async function checkprice(x,y,recv,addr){
        
        // console.log("checkp")
        // const bodyContent = {
        // "state": "waiting",
        // "user_id": 3,
        // "detail": "chi tiet don hang",
        // "total": 10000,
        // "order_date": "26/10/2021"}
        // fetch ("https://pacific-ridge-30189.herokuapp.com/order/", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: bodyContent,
        //     })
        if(recv){
            const sfee = await OrderApiClient.cal_ship_fee(addr);
            if(sfee&&sfee["total_price"]){
                setShipfee(sfee["total_price"])
                setLegitaddress(true)
                setPrice(parseInt(x)*20000*parseInt(y)+parseInt(sfee["total_price"]))
            }
            else{
                
                setShipfee(0)
                setLegitaddress(false)
                setPrice(parseInt(x)*20000*parseInt(y))
            }
        } 
        else
            setPrice(parseInt(x)*20000*parseInt(y))
        if(!price){
            setPrice(0)
        }
    }


    return (props.ispopup) ? (
        <div className="popup">
            <div className="popup-inner">
                <div className="dateform">
                    <p>Get service</p>
                </div>
                <form id="subform" onSubmit={event => handleSubmitForm(event)}>
                    
                    <label className="lb">Choose service</label>
                    <div>
                        <input className="radio" type="radio" checked = {props.pack==1&&"checked"&&!picked||pack==1} name="service_type" value="standard" onChange={() => {setPack(1);checkprice(pairs,1,receive,address);setpicked(true)}}></input><label>Standard (20000VND)</label>
                    </div>
                    <div>
                        <input className="radio" type="radio" checked = {props.pack==2&&"checked"&&!picked||pack==2} name="service_type" value="advanced" onChange={() => {setPack(2);checkprice(pairs,2,receive,address);setpicked(true)}}></input><label>Advanced (40000VND)</label>
                    </div>
                    <label className="lb">Pairs of shoes</label>

                    <select className = "sel" value={pairs} onChange={event => {setPairs(event.target.value);checkprice(event.target.value,!picked&&props.pack||picked&&pack,receive,address)}}>           
                        <option value={0}>0</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                    </select>
                        
                    <div>
                        <label className="lb">Total price: {price} VND</label>  
                        <br></br>
                        {receive&&<label className="lb">Ship fee: {shipfee} VND</label>  }
                    </div>
                    <label className="lb">Where to receive</label>
                        <div>
                            <input className="radio" type="radio" name="rec" value="at home" onChange={() => {setReceive(true);checkprice(pairs,!picked&&props.pack||picked&&pack,true,address)}}></input><label>Home</label>
                        </div>
                        <div>
                            <input className="radio" type="radio" name="rec" checked={!receive&&"checked"} value="store" onChange={() => {setReceive(false);checkprice(pairs,!picked&&props.pack||picked&&pack,false,address)}}></input><label>Store</label>
                        </div>
                    {receive && 
                        <div>
                            <label className="lb">Address</label>
                            <input  type="text"
                            name="name"
                            className = "ip"
                            value = {!fadd && props.user.address||address}
                            onChange={event => {setFadd(true);setAddress(event.target.value);checkprice(pairs,!picked&&props.pack||picked&&pack,receive,event.target.value)}}/> <br></br>
                        </div>}
                    
                    <label className="lb">Date</label>
                    <input  type="date" 
                            name="date" 
                            className = "ip"
                            onChange={event => setDate(event.target.value)}/> <br></br>
                    
                    <input className="btn_date" type="submit" value="Submit" />
                    <button className="btn_date" onClick={()=>{
                                                            setPack(0)
                                                            setPairs(0)
                                                            setDate("")
                                                            setPrice(0)
                                                            setReceive(false)
                                                            setAddress(props.user.address)
                                                            setpicked(false)
                                                            setShipfee(0)
                                                            props.setPopup(false)}}>Close</button>
                </form> 
            </div>
            
        </div>
    ) : ""
}
