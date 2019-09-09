import React, { Component } from 'react';
import '../css/App.scss';
import {data} from '../data/data.js';
import left from '../img/svg/left.svg'
import right from '../img/svg/right.svg'



class MobileMenu extends Component {
    constructor(props) {
        super(props);

    }
 

    render() {
        return (
            
            <div class="mobileMenu">
            <div className="mobileMenu__wrapper">
                <img src={left}  className={`mobileMenu__arrow ${!this.props.locked ? 'mobileMenu__arrow--active' : ''}`} onClick={() => this.props.buttonHandle('up')}></img>
              <img src={right} className={`mobileMenu__arrow ${!this.props.locked ? 'mobileMenu__arrow--active' : ''}`}  onClick={() => this.props.buttonHandle('down')}></img>
              
              </div>
            </div>
    
        );
    }

}

      

export default MobileMenu;

