import React from 'react';
import Moment from 'moment';

class info extends React.Component {
    constructor(props) {
        // var d1 = Date.parse("2012-11-01");
        // var d2 = Date.parse("2012-11-04");
        // if (d1 < d2) {
        //     alert ("Error!");
        // }   
        super(props);
        // state 1 is complete, 2 is cancel, 0 is all, 
        this.state = 
        { 
            status: "All", 
            date_from: "01-01-2000", 
            date_to: "01-01-2099", 
            products: 
                [
                    {
                        code: "ABCD",
                        detail: "orderofX",
                        total: 240000,
                        status: "Complete",
                        date: "12-11-2021",
                    },
                    {
                        code: "ACCD",
                        detail: "orderofY",
                        total: 250000,
                        status: "Cancel",
                        date: "23-11-2021",
                    },
                    {
                        code: "AACD",
                        detail: "orderofZ",
                        total: 200000,
                        status: "Complete",
                        date: "3-11-2021",
                    }
                ]
        };
        this.change = this.change.bind(this);
        this.getFilteredItems = this.getFilteredItems.bind(this);
    }



    getFilteredItems(status,date_from,date_to){
        var number = 0;
        var result = [];
        var date1 = Moment(date_from).format('YYYY-MM-DD')
        var date2 = Moment(date_to).format('YYYY-MM-DD')
        for (var index = 0; index < this.state.products.length; index++){
            var date = Moment(date_to).format('YYYY-MM-DD')
            if (status === "All"){
                number += 1;
                result.push(
                    <tr>
                        <th>{number}</th>
                        <th>{this.state.products[index].code}</th>
                        <th>{this.state.products[index].detail}</th>
                        <th>{this.state.products[index].total}</th>
                        <th>{this.state.products[index].status}</th>
                    </tr>
                );
            }
            else if (this.state.products[index].status===status){
                number += 1;
                result.push(
                    <tr>
                        <th>{number}</th>
                        <th>{this.state.products[index].code}</th>
                        <th>{this.state.products[index].detail}</th>
                        <th>{this.state.products[index].total}</th>
                        <th>{this.state.products[index].status}</th>
                    </tr>
                );
            }
        }
        return result
    }

    change(event){
        var value = event.target.value;
        // if(event.target.name==="date_from"||event.target.name==="date_to"){
        //     value = Moment(value).format('DD-MM-YYYY')
        // }
        this.setState({
            ...this.state,
            [event.target.name] : value
        })
    }

    render() { 
        return(
            <div className= 'renBox'> 
                <div className='infoBoxName'>
                    Oder information
                </div>
                <div className='infoboxdetail'>
                    <label>State</label>
                    <select onChange={this.change} value={this.state.value} name = "status"> 
                       <option>All</option>
                       <option>Complete</option>
                       <option>Cancel</option>
                    </select>
                    <label>From</label>
                    <input type = "date" onChange={this.change} value={this.state.value} name = "date_from"></input>
                    <label>To</label>
                    <input type = "date" onChange={this.change} value={this.state.value} name = "date_to"></input>
                </div>
                <table>
                    <tr>
                        <th>No</th>
                        <th>Order Code</th>
                        <th>Detail</th>
                        <th>Total</th>
                        <th>State</th>
                    </tr>
                    {this.getFilteredItems(this.state.status,this.state.date_from,this.state.date_to)}
                </table>
            </div>
        );
    }
}
 
export default info;