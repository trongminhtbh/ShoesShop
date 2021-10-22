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


class user extends React.Component {
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
                            <Switch>
                            <Route exact path="/Update">
                                <li><img src={updateaccount} id="updateaccountf" alt="updateaccountf"></img>
                                    <StyledLink1 to="/Update">Update account</StyledLink1>
                                </li>
                                <li>
                                    <img src={infoicon} id="infoicon" alt="infoicon"></img>
                                    <StyledLink to="/Info">Order information</StyledLink>
                                </li>
                                <li>
                                    <img src={paymenticon} id="paymenticon" alt="paymenticon"></img>
                                    <StyledLink to="/Payment">Payment methods</StyledLink>
                                </li>
                            </Route>
                            <Route path="/Info">
                                <li><img src={updateaccount} id="updateaccount" alt="updateaccount"></img>
                                    <StyledLink to="/Update">Update account</StyledLink>
                                </li>
                                <li>
                                    <img src={infoicon} id="infoiconf" alt="infoiconf"></img>
                                    <StyledLink1 to="/Info">Order information</StyledLink1>
                                </li>
                                <li>
                                    <img src={paymenticon} id="paymenticon" alt="paymenticon"></img>
                                    <StyledLink to="/Payment">Payment methods</StyledLink>
                                </li>
                            </Route>
                            <Route path="/Payment">
                                <li><img src={updateaccount} id="updateaccount" alt="updateaccount"></img>
                                    <StyledLink to="/Update">Update account</StyledLink>
                                </li>
                                <li>
                                    <img src={infoicon} id="infoicon" alt="infoicon"></img>
                                    <StyledLink to="/Info">Order information</StyledLink>
                                </li>
                                <li>
                                    <img src={paymenticon} id="paymenticonf" alt="paymenticonf"></img>
                                    <StyledLink1 to="/Payment">Payment methods</StyledLink1>
                                </li>
                            </Route>
                            </Switch>
                            
                        </ul>
                    </div>
                </div>
                <Switch> 
                    <Redirect exact from="/" to="/Update" />
                    <Route exact path="/Update">
                        <Update></Update>
                    </Route>
                    <Route path="/Info">
                        <Info></Info>
                    </Route>
                    <Route path="/Payment">
                        <Payment></Payment>
                    </Route>
                </Switch>
            </Router>
        </div>
        
        );
    }
}
 


export default user;

