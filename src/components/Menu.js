

import React, { Component } from 'react';
import '../css/App.scss';
import {data} from '../data/data.js';



class Loader extends Component {
    constructor(props) {
        super(props);

    }
 

    render() {
        return (
            
            <div class="menu">
            <div className="menu__wrapper">
              <div class="menu__container">
              <ul class="menu__list" style={{transform:`translateY(-${this.props.active >= (data.length -3) ? ((data.length -5)*35) : (this.props.active -2)*35}px)`}}>
              {
                data.map(entry => {
                  return <li class="menu__item" style={{opacity: this.props.active ==entry.index ? 1 :  1/(Math.abs(this.props.active - entry.index)*1.5).toFixed(2)}}><h1 className="menu-paragraph" >{entry.shortname}</h1></li>
                 

                })
              }</ul>
              </div>
              
              </div>
            </div>
    
        );
    }

}

      

export default Loader;



