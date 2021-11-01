import React from 'react';
import '../styles/service.css'
import PropTypes from 'prop-types';
import before from '../assets/img/before.jpg'
import after from '../assets/img/after.jpg'
import arrow from '../assets/img/arrow-right.svg'
import box1 from '../assets/img/box1.svg'
import ReactCompareImage from "react-compare-image";
import { relativeTimeRounding } from 'moment';

class Service extends React.Component {
    render() { 
        return  (
        <div className="service">
            <div className="compare_image">
                <ZoomImageComparison>
                </ZoomImageComparison>
                <div className="inner_block_text">
                    <h1>CLEAN SHOES MAKE A DIFFERENCE</h1>
                    <h3>STATE OF THE ART <span>ULTRASONIC</span> CLEANING TECHNOLOGY</h3>
                </div>
                <button className="inner_block_btn">SCHELDULE FOR PICK UP</button>
            </div>

            <div className="boxes">
                <div className="box">
                    <div className="inner1">
                        <h1 id="s">Save More</h1>   
                        <h1 id="u">With Good Plans</h1>   
                        <p>Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.</p>
                        <img src={arrow} alt="arrow" id="arrow"></img>
                    </div> 
                    <img src={box1} alt="box1" id="box1"></img>
                </div>
                <div className="box">
                    <div className="inner">
                        <h1>Standard</h1>    
                        <h3>What You'll Get</h3>
                        <p>Comprehensive clean and fragrant</p>
                        <p>Get it for 6 hours</p>
                        <p>Stain removal, paint stain, shoe dye</p>
                        <p><span>$20</span>/time</p>       
                        <hr/>
                    </div>     
                    <div className = "cbtn">
                        <button className = "innerbtn">Choose</button>
                    </div>      
                </div>
                <div className="box">
                    <div className="inner">
                        <h1>Standard</h1>    
                        <h3>What You'll Get</h3>
                        <p>Comprehensive clean and fragrant, specially leather shoes</p>
                        <p>Get it for 4 hours</p>
                        <p>Stain removal, paint stain, shoe dye</p>
                        <p>Deliver to home</p>
                        <p><span>$40</span>/time</p>
                        <hr/>
                    </div>  
                    <div className = "cbtn">
                        <button className = "innerbtn">Choose</button>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}
 


export default Service;


Service.propTypes = {
    name: PropTypes.string
  };
  
  Service.defaultProps = {
    name: 'Thinh'
}

class ZoomImageComparison extends React.Component {
    state = {
          backgroundPosition: "0% 0%",
      backgroundSize: 1500,
      margin: 0,
      position: relativeTimeRounding,
    };
  
    handleMouseMove = (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.pageX - left) / width) * 100;
      const y = ((e.pageY - top) / height) * 100;
      this.setState({ backgroundPosition: `${x}% ${y}%` });
    };
  
    render = () => (
      <figure onMouseMove={this.handleMouseMove} style={this.state}>
        <ReactCompareImage
          leftImage={before}
          rightImage={after}
          hover={true}
        />
      </figure>
    );
}