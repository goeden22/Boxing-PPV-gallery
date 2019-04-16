
import React, { Component } from 'react';
import '../css/App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {data} from '../data/data.js';






class Progress extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div className="progress">
                <div className="progress__bar" >

                    <div className={`progress__fill ${this.props.fastFill ? 'progress--fasttransition' : ''}`} style={this.props.move && !this.props.fastFill ? { width: `${this.props.progressWidthValue}%` } : { width: `${this.props.previousWidth}%` }}></div>
                </div>
                <div className="progress__points">
                    {data.map(unit => {
                        return <div className={`progress__point ${unit.index <= this.props.index ? 'progress__point--filled' : ''} ${unit.index}`}></div>
                    })}
                </div>
            </div>

        );
    }

}



export default Progress;
