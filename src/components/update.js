import React from 'react';
import '../styles/service.css'

class update extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: null,
          DOB: null,
          phone: null,
          email: null,
          password: null,
        };
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleSubmitForm(event) {
        if(this.state.name==null){
            alert("type name")
        }   
        else if(this.state.DOB==null){
            alert("choose DOB")
        } 
        else if(this.state.phone==null){
            alert("type phone")
        }   
        else if(this.state.email==null){
            alert("type email")
        }   
        else if(this.state.password==null){
            alert("type password")
        }   
        else{
            alert("success")
        }    
    }
    handleOnChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name] : value
        })
    }
    
    render() { 
        return(
            <div className= 'renBox'> 
                <div className='boxname'>
                    User information
                </div>
                <div className='boxdetail'>
                    <form onSubmit={event => this.handleSubmitForm(event)}>
                        <label>Name</label>
                        <input  type="text"
                                name="name"
                                value={this.state.name}
                                onChange={event => this.handleOnChange(event)}/> <br></br>
                        <label>DOB  </label>
                        <input  type="date" 
                                name="DOB" 
                                value={this.state.DOB}
                                onChange={event => this.handleOnChange(event)}/> <br></br>
                        <label>Phone  </label>
                        <input  type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={event => this.handleOnChange(event)}/> <br></br>
                        <label>Email </label>
                        <input  type="email"
                                name="email"
                                value={this.state.email}
                                onChange={event => this.handleOnChange(event)}/> <br></br>
                        <label>Password</label>
                        <input  type="password"
                                name="password"
                                value={this.state.password}
                                onChange={event => this.handleOnChange(event)}/> <br></br>
                        <input className="input" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}
 
export default update;