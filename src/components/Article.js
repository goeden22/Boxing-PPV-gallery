
import React, { Component } from 'react';
import '../css/App.scss';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Loader from './Loader.js';
import BackgroundImageOnLoad from 'background-image-on-load';


class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {appear: false,
      loading: true,
    faded: false,
  mounted: false,
bgPos:false}


      this.setImg = () => {
        //return require(`../img/jpg/${this.props.entry.index}.jpg`)
       return require(`../img/jpg/${this.props.entry.index}.jpg`)
      }
  }
  
  componentDidMount(){
    this.setState({mounted: true})
  }
    render() {
      let entry = this.props.entry
      return (
        
          <div className={`article + ${this.state.bgPos ? 'article--rightBG' : ''}`} style={{backgroundImage: `url(${this.setImg()})`}}>
          <BackgroundImageOnLoad
            src={this.setImg()}
            onLoadBg={() =>
                setTimeout(() => {
                  this.setState({
                    faded: true
                  }, () => {
                    setTimeout(() => {
                      this.setState({loading:false, appear: true}, () => {
                        
                        this.props.timer()
                      })
                    }, 1500)
                  })
                },1000)
              }
            onError={err => console.log('error', err)}
          />
          {this.state.loading ? <Loader fade={this.state.faded && this.state.mounted}></ Loader> :
           <div className={`article__container ${!this.props.even ? 'article--right': ''}`}>
           <div className="article__overflowcontainer">
           <CSSTransition in={this.state.appear} appear={true} timeout={700} classNames="fade">
         <div className={`article__text ${!this.props.even ? 'article--flexright' : ''}`}>
           <div class="article__header">
             <h1 class="small-header">{entry.position.toString()}.</h1>
             <h1 class="big-header">{entry.name || "none"}</h1></div>
           <div class="article__paragraph">
           <p className="big-paragraph">{entry.trivia}</p>
           </div>
 
           <div class="article__stats">
           <div class="article__statsSet"><h1 className="big-paragraph">Network:  <span className="light-paragraph">{entry.network}</span></h1></div>
             <div class="article__statsSet"><h1 className="big-paragraph">Revenue:  <span className="light-paragraph">{entry.revenue} $</span></h1></div>
             <div class="article__statsSet"><h1 className="big-paragraph">Sales:  <span className="light-paragraph">{entry.sales}</span></h1></div>
           </div>
           </div>
           </ CSSTransition>
           </div>
           </div>
      
        }
           
          
          </div>

          );
        }
      }
      
      export default Article;
  //<img src={require(`../img/jpg/${this.props.entry.index}.jpg`)}></img>