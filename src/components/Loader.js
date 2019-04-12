
import React, { Component } from 'react';
import '../css/App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import loader from '../img/svg/tailspin.svg'




class Loader extends Component {
    constructor(props) {
        super(props);
    }
 

    render() {
        return (
            
            <div className={`loader ${this.props.fade ? 'loader--none' : ''}`}>
                <div className="loader__wrap">
                    <img className='loader__wheel' src={loader}></img>
                    <h1 className="big-paragraph">loading . . .</h1>
                </div>
            </div>
    
        );
    }

}

      

export default Loader;
