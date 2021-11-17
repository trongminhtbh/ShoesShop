import React from 'react';
import Moment from 'moment';
import {useStore} from "../store"

import { useState, useEffect } from "react";

export default function Info(){
    const [state, dispath] = useStore()
    const [user_id, setUser_id] = useState(-1)
    const [status, setStatus] = useState({
        status_: "All", 
        date_from: "2000-01-01", 
        date_to: "2099-01-01", 
    })
    
    const islogin = state.login._id
    const [orders, setOrders] = useState([]
    )
    useEffect(() => {
        if (state.login._id != null ){
            setUser_id(state.login._id)
            fetch('https://pacific-ridge-30189.herokuapp.com/order?id='+String(state.login._id))
            .then((response) => response.json())
            .then(ret_order => {
                if (ret_order){
                    setOrders(ret_order);
                }
            });
        }
    },[])
    

    function getFilteredItems(status_,date_from,date_to){
        var number = 0;
        var result = [];
        var date1 = date_from.replace(new RegExp('-', 'g'),"")
        var date2 = date_to.replace(new RegExp('-', 'g'),"")
        console.log("length",orders.length)
        if(orders.length === 0){
            return
        }
        console.log(orders)
        for (var index = 0; index < orders.length; index++){
            var date = orders[index].order_date.replace(new RegExp('-', 'g'),"")
            if (status_ === "All" && date1<date && date<date2){
                number += 1;
                result.push(
                    <tr>
                        <th>{number}</th>
                        <th>{orders[index].order_date}</th>
                        <th>{orders[index].detail}</th>
                        <th>{orders[index].total}</th>
                        <th>{orders[index].state}</th>
                    </tr>
                );
            }
            else if (orders[index].state===status_ && date1<date && date<date2){
                number += 1;
                result.push(
                    <tr>
                        <th>{number}</th>
                        <th>{orders[index].order_date}</th>
                        <th>{orders[index].detail}</th>
                        <th>{orders[index].total}</th>
                        <th>{orders[index].state}</th>
                    </tr>
                );
            }
        }
        return result
    }

    function change(event){
        var value = event.target.value;
        setStatus({
            ...status,
            [event.target.name] : value
        })
    }
    
    return(
        <div className= 'renBox'> 
            <div className='infoBoxName'>
                Oder information
            </div>
            <div className='infoboxdetail'>
                <label>State</label>
                <select onChange={change} value={state.value} name = "status_"> 
                   <option>All</option>
                   <option>Complete</option>
                   <option>Cancel</option>
                </select>
                <label>From</label>
                <input className = "date" type = "date" onChange={change} value={state.value} name = "date_from"></input>
                <label>To</label>
                <input className = "date" type = "date" onChange={change} value={state.value} name = "date_to"></input>
            </div>
            <table>
                <tr>
                    <th>No</th>
                    <th>Order Date</th>
                    <th>Detail</th>
                    <th>Total</th>
                    <th>State</th>
                </tr>
                {getFilteredItems(status.status_,status.date_from,status.date_to)}
            </table>
        </div>
    );
}
