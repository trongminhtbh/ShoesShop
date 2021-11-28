import React from 'react';
import Moment from 'moment';
import {useStore} from "../store"

import { useState, useEffect } from "react";

export default function Info(){
    const [state, dispath] = useStore()
    const [user_id, setUser_id] = useState(-1)
    const [status, setStatus] = useState({
        status_: "All", 
        date_from: "01/01/2000", 
        date_to: "01/01/2099", 
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
    
    function cal_date(date_from){
        var date1 = (date_from).split("/")
        var date1r= parseInt(date1[2])*10000+parseInt(date1[1])*100+parseInt(date1[0]);
        return date1r;
    }
    function getFilteredItems(status_,date_from,date_to){
        var number = 0;
        var result = [];
        var date1 = cal_date(date_from)
        var date2 = cal_date(date_to)
        console.log("length",orders.length,date1,date2)
        if(orders.length === 0){
            return
        }
        console.log("orders",orders)
        for (var index = 0; index < orders.length; index++){
            
            var date = cal_date(orders[index].order_date)
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
            else if (orders[index].state.toLowerCase()===status_.toLowerCase() && date1<date && date<date2){
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
    function change1(event){
        var value1 = event.target.value.split("-")
        
        var value =  value1[2]+"/"+value1[1]+"/"+value1[0]
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
                   <option>Waiting</option>
                   <option>Pending</option>
                   <option>Shiping</option>
                </select>
                <label>From</label>
                <input className = "date" type = "date" onChange={change1} value={state.value} name = "date_from"></input>
                <label>To</label>
                <input className = "date" type = "date" onChange={change1} value={state.value} name = "date_to"></input>
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
