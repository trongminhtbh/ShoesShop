import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import '../styles/user.css'
import { Link } from 'react-router-dom';
import Update from '../components/Update';
import Info from '../components/Info';
import Payment from '../components/Payment';
import usericon from '../assets/img/user.svg'
import updateaccount from '../assets/img/updateaccount.svg'
import infoicon from '../assets/img/infoicon.svg'
import paymenticon from '../assets/img/paymenticon.svg'
import {useStore} from "../store"

import { useState, useEffect } from "react";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
`;  
const StyledLink1 = styled(Link)`
    text-decoration: none;
    color: rgb(247, 82, 22);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
`;


export default function User(){
    const [state, dispath] = useStore()
    const [user_name, setUser_name] = useState("")
    const guest = "Guest"
    useEffect(() => {
        if (state.login._id != null ){
            setUser_name(state.login.name)
        }
    },[])
    return  (
        <div className='Scompo'>  
            <Router>
                <Switch> 
                    <Route exact path="/user/update" >
                        
                        <div className= 'Info'> 
                            <div>
                                <h3>
                                    <img id="ava" src={usericon} id="usericon" alt="usericon"></img>
                                    { user_name == "" && guest || user_name!="" && user_name}
                                </h3>
                                <ul>
                                    <li><img src={updateaccount} id="updateaccountf" alt="updateaccountf"></img>
                                        <StyledLink1 to="/user/update">Update account</StyledLink1>
                                    </li>
                                    <li>
                                        <img src={infoicon} id="infoicon" alt="infoicon"></img>
                                        <StyledLink to="/user">Order information</StyledLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Route>
                    <Route path="/user" exact>
                        <div className= 'Info'> 
                            <div>
                                <h3>
                                    <img id="ava" src={usericon} id="usericon" alt="usericon"></img>
                                    { user_name == "" && guest || user_name!="" && user_name}
                                </h3>
                                <ul>
                                    <li><img src={updateaccount} id="updateaccount" alt="updateaccount"></img>
                                        <StyledLink to="/user/update">Update account</StyledLink>
                                    </li>
                                    <li>
                                        <img src={infoicon} id="infoiconf" alt="infoiconf"></img>
                                        <StyledLink1 to="/user">Order information</StyledLink1>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Route>
                    
                </Switch>
                
                <Switch> 
                    <Route exact path="/user/update" >
                        <Update></Update>
                    </Route>
                    <Route path="/user" exact>
                        <Info></Info>
                    </Route>
                </Switch>
            </Router>
        </div>
        
        );
}
