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
import Update from '../components/update';
import Info from '../components/info';
import Payment from '../components/payment';
import usericon from '../assets/img/user.svg'
import updateaccount from '../assets/img/updateaccount.svg'
import infoicon from '../assets/img/infoicon.svg'
import paymenticon from '../assets/img/paymenticon.svg'

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


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Thinh"
        };
    }
    render() { 
        return  (
        <div className='Scompo'>  
            <Router>
                <div className= 'Info'> 
                    <div>
                        <h3>
                            <img src={usericon} id="usericon" alt="usericon"></img>
                            {this.state.name}
                        </h3>
                        <ul>
                            <li><img src={updateaccount} id="updateaccountf" alt="updateaccountf"></img>
                                <StyledLink1 to="/user/update">Update account</StyledLink1>
                            </li>
                            <li>
                                <img src={infoicon} id="infoicon" alt="infoicon"></img>
                                <StyledLink to="/user">Order information</StyledLink>
                            </li>
                            <li>
                                <img src={paymenticon} id="paymenticon" alt="paymenticon"></img>
                                <StyledLink to="/user/payment">Payment methods</StyledLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <Switch> 
                    <Route exact path="/user/update" >
                        <Update></Update>
                    </Route>
                    <Route path="/user" exact>
                        <Info></Info>
                    </Route>
                    <Route path="/user/payment" exact>
                        <Payment></Payment>
                    </Route>
                </Switch>
            </Router>
        </div>
        
        );
    }
}
 


export default User;

