import React, { Component } from 'react';

import './css/App.scss';
import Article from './components/Article.js';
import {data} from './data/data.js';
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
      loading: false
    }
    this.next = () => {
      console.log(this.state.current)
      if (this.state.current.index >= data.length -1 || this.state.locked) {
        return false
      }
      this.setState({direction: "down", locked: true, loading: true}, () => {
        setTimeout(() => {
          this.setState({locked: false, loading: false})
        }, 3000)
        const next = this.state.current.index + 1;
        this.setState({current: data[next]})
      })
     
      
    }
    this.previous = () => {
      if (this.state.current.index <= 0 || this.state.locked) {
        return false
      }
      this.setState({direction: "up"}, () => {
        const next = this.state.current.index -1;
        this.setState({current: data[next]})
      })
    }
    this.isEven = (index) => {
       return index % 2 == 0;
    }
  }
  

  render() {
    return (
      <div className="App">

        <div class="menu">
        <button onClick={this.previous}>prev</button>
        <button onClick={this.next}>next</button>
          <div class="menu__container">
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
            <li class="menu__item"></li>
          </div>
          <ul class="menu__list"></ul>
        </div>
    
    
        
        
        <TransitionGroup>
          <CSSTransition key={this.state.current.index} timeout={2500} classNames={this.state.direction == "down" ? "fadedown" : "fadeup"}>
          < Article entry={this.state.current} even={this.isEven(this.state.current.index)}/>
          </ CSSTransition>
          </ TransitionGroup>
        </div>
        
        
        );
      }
    }
    export default App;
/**    {this.state.loading ?     <CSSTransition in={this.state.loading} appear={true} timeout={500} classNames="loader">
        <Loader></ Loader>
      </ CSSTransition> : ''} */