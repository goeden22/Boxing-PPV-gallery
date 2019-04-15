import React, { Component } from 'react';

import './css/App.scss';
import Article from './components/Article.js';
import {data} from './data/data.js';
import Menu from './components/Menu.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './fade.css'
import Loader from './components/Loader.js'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current : data[0],
      direction: "down",
      locked: false,
      loading: false,
      active: 0,
      move: false,

      fastFill:false,
      multiplier: 0
    }
    this.next = () => {
      clearTimeout(this.timeout)
      if (this.state.current.index >= data.length -1 || this.state.locked) {
        return false
      }
      clearTimeout(this.timeout)
      this.setState({direction: "down", locked: true, loading: true}, () => {
        setTimeout(() => {
          this.setState({locked: false, loading: false})
        }, 3000)
        const next = this.state.current.index + 1;
        this.setState({current: data[next], active: data[next].index,}, () => {
          
        })
        
      })
     
      
    }
    this.previous = () => {
      clearTimeout(this.timeout)
      if (this.state.current.index <= 0 || this.state.locked) {
        return false
      }
      this.setState({direction: "up", locked: true, loading: true}, () => {
        setTimeout(() => {
          this.setState({locked: false, loading: false})
        }, 3000)
        const next = this.state.current.index -1;
        this.setState({current: data[next],active: data[next].index})
      })
    }
    this.isEven = (index) => {
       return index % 2 == 0;
    }
    this.buttonHandle = (direction) => {
      if(this.state.locked){
        return false
      }
      this.setState({fastFill: true}, () => {
        this.setState({multiplier: 0.001})
        if(direction == 'next'){
          this.next()
        } else if (direction == 'previous') {
          this.previous()
        }
        
      })
    }
  
    this.timer=(direction) => {
      
      this.setState({fastFill: false, multiplier: 0})
      this.setState({move: true})
      this.timeout = setTimeout(function(){
        if(this.direction =='next'){
          this.next();
        } else if (this.direction =='false'){
          this.previous();
        } else{
          this.next()
        }
        
      }.bind(this),10000)
    }
  }
 
  

  render() {
    let progressWidth = `${(this.state.active + 1) * (100 / (data.length -1)) + this.state.multiplier}`;
    let progressWidthValue = progressWidth >= 100 ? 100 : progressWidth;
    let previousWidth = `${(this.state.active) * (100 / (data.length -1)) + this.state.multiplier}`;
    console.log(progressWidth)
    return (
      
      <div className="App">
      <div className="buttons">      <button name="previous"onClick={() => {this.buttonHandle('previous')}}>prev</button>
        <button name="next" onClick={() => {this.buttonHandle('next')}}>next</button></div>

  
        <Menu active={this.state.active} />
        
        
        <TransitionGroup>
          <CSSTransition key={this.state.current.index} timeout={2500} classNames={this.state.direction == "down" ? "fadedown" : "fadeup"}>
          < Article entry={this.state.current} even={this.isEven(this.state.current.index)} timer={this.timer.bind(this)}/>
          </ CSSTransition>
          </ TransitionGroup>
          <div className="progress">
          <div className="progress__bar" >
         
          <div className={`progress__fill ${this.state.fastFill ? 'progress--fasttransition': ''}`} style={this.state.move && !this.state.fastFill ? {width: `${progressWidthValue}%`} : {width: `${previousWidth}%`}}></div>
          </div>
          <div className="progress__points">
            {data.map(unit => {
              return <div className={`progress__point ${unit.index <= this.state.current.index  ? 'progress__point--filled' : ''} ${unit.index}`}></div>
            })}
          </div>
          </div>
        </div>
        
        
        );
      }
    }
    export default App;
