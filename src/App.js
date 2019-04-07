import React, { Component } from 'react';

import './css/App.scss';
import Article from './components/Article.js';
import {data} from './data/data.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './fade.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      current : data[0]
    }
    this.next = () => {
      console.log(this.state.current)
      if (this.state.current.index >= data.length -1) {
        return false
      }
      const next = this.state.current.index + 1;
      this.setState({current: data[1]})
      
    }
  }

  render() {
    return (
      <div className="App">

        <div class="menu">
        <button onClick={this.next.bind(this)}>next</button>
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
          <CSSTransition key={this.state.current.index} timeout={2500} classNames="fade">
          < Article position={this.state.current.position}/>
          </ CSSTransition>
          </ TransitionGroup>
        </div>
        
        
        );
      }
    }
    export default App;
