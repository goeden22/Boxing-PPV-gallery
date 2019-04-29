import React, { Component } from 'react';

import './css/App.scss';
import Article from './components/Article.js';
import {data} from './data/data.js';
import Menu from './components/Menu.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Loader from './components/Loader.js'
import MainLoader from './components/MainLoader.js'
import Progress from './components/Progress.js'
import Articles from './components/Articles'
import bg from './img/jpg/bg.jpg'
import BackgroundImageOnLoad from 'background-image-on-load';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     appear: false,
     mainLoader: true
    }

    this.setLoaded = () => {
      this.setState({mainLoader: false})
    }
  

  }
 
  

  render() {
   
    return (
      
    
      
      <div className="App">
      {this.state.mainLoader ? <MainLoader setLoaded={this.setLoaded.bind(this)}/> : <Articles />}
      

      </div>
        
        
        );
      }
    }
    export default App;
