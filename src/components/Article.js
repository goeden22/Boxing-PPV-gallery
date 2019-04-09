
import React, { Component } from 'react';
import '../css/App.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {appear: false}
  }
  
  componentDidMount(){
    this.setState({appear: true})
  }
    render() {
      return (
          <div class="article" style={{backgroundImage: `url(${require(`../img/jpg/${this.props.entry.index}.jpg`)})`}}>
            <div className="article__container">
            <div className="article__overflowcontainer">
            <CSSTransition in={this.state.appear} appear={true} timeout={1400} classNames="fade">
          <div className="article__text">
            <div class="article__header">
              <h1 class="small-header">{this.props.entry.position.toString()}.</h1>
              <h1 class="big-header">{this.props.entry.name || "none"}</h1></div>
            <div class="article__paragraph">
            <p className="big-paragraph">Evander Holyfield vs. Mike Tyson II, billed as "The Sound and the Fury" and afterwards infamously referred to as "The Bite Fight", was a professional boxing match contested on June 28, 1997, for the WBA Heavyweight Championship.
  
  </p></div>
  
            <div class="article__stats">
            <div class="article__statsSet"><h1 className="big-paragraph">Network:  <span className="light-paragraph">Showtime</span></h1></div>
              <div class="article__statsSet"><h1 className="big-paragraph">Revenue:  <span className="light-paragraph">180.000.000</span></h1></div>
              <div class="article__statsSet"><h1 className="big-paragraph">Sales:  <span className="light-paragraph">12.670.000</span></h1></div>
            </div>
            </div>
            </ CSSTransition>
            </div>
            </div>
       
          
          </div>

          );
        }
      }
      
      export default Article;
  