import React from 'react';
import Moment from 'moment';
import {useStore} from "../store"

import { useState, useEffect } from "react";

export default function Discount(){
    const [state, dispath] = useStore()
    const [user_id, setUser_id] = useState(-1)
    
    const islogin = state.login._id
    const [ordersservice, setOrdersservice] = useState([]
    )
    useEffect(() => {
        if (state.login._id != null ){
            setUser_id(state.login._id)
            
            fetch('https://pacific-ridge-30189.herokuapp.com/discount/list')
            .then((response) => response.json())
            .then(ret_order => {
                if (ret_order){
                    setOrdersservice(ret_order);
                }
            });
        }
    },[])
    
    function cal_date(date_from){
        var date1 = (date_from).split("/")
        var date1r= parseInt(date1[2])*10000+parseInt(date1[1])*100+parseInt(date1[0]);
        return date1r;
    }

    function getFilteredItems(){
        var result = [];
        if(ordersservice.length === 0){
            return
        }
        var today = new Date().toLocaleDateString()
        var date = cal_date(today)
        var num = 1
        for (var index = 0; index < ordersservice.length; index++){
                
            var start_time = cal_date(ordersservice[index].start_time)
            var end_time = cal_date(ordersservice[index].end_time)
            if(ordersservice[index].quantity>0 && parseInt(start_time) <= parseInt(date) && parseInt(date) <= parseInt(end_time)){
                result.push(
                    <tr>
                        <th>{num}</th>
                        {/* <th id = "codetable">{ordersservice[index].code}</th> */}
                        {/* <th>{ordersservice[index].discount_value}</th>
                        <th>{ordersservice[index].quantity}</th> */}
                        <th>{date}</th>
                        <th>{start_time}</th>
                        <th>{end_time}</th>
                    </tr>
                );
                num += 1;
            }
            
        }
        return result
    }

  
    return(
        <div className= 'renBox'> 
            <div className='infoBoxName'>
                Discount code
            </div>
            {islogin&&<div>
                <table>
                    <tr>
                        <th>No</th>
                        <th id = "codetable">Code</th>
                        <th>Discount</th>
                        <th>Quantity</th>
                    </tr>
                    {getFilteredItems()}
                </table>
            </div>||!islogin && <h2 className = "loginReq">Please Login</h2>}
            
        </div>
    );
}
