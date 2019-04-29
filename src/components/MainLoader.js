import React, { Component } from 'react';
import '../css/App.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import loader from '../img/svg/tailspin.svg'




class MainLoader extends Component {

  constructor(props) {
    super(props);

    this.state = {
     appear: false,
     appearSecond: false,
     appearThird: false
    }
      
  }
  componentDidMount(){
    setTimeout(() => {
        this.setState({appear:true})
        setTimeout(() => {
            this.setState({appearSecond:true})
            setTimeout(() => {
                this.setState({appearThird:true})
                setTimeout(() => {
                    this.setState({appear:false})
                    setTimeout(() => {
                        this.props.setLoaded();
                    }, 1100)
                }, 3000)
            }, 3000)
        }, 1000)
    }, 2000)
}




   
 

    render() {
        return (
            
            <div className="loader mainLoader">
                          <div className={`mainLoader__text ${this.state.appear ? 'mainLoader--visible' : ''}`}>
                            <h1 className={`small-header mainLoader__paragraph ${this.state.appear ? 'mainLoader--visible' : ''}`}>Welcome to Top Boxing PPV gallery</h1>
                            <h1 className={`big-paragraph mainLoader__paragraph ${this.state.appearSecond ? 'mainLoader--visible' : ''}`}>Pay-per-view (PPV) is a type of pay television service by which a viewer can purchase events to view via private telecast. </h1>
                            <h1 className={`big-paragraph mainLoader__paragraph ${this.state.appearThird ? 'mainLoader--visible' : ''}`}>This list contains list of top PPV events in history of boxing. </h1>
                            </div>

         
            </div>
    
        );
    }

}

      

export default MainLoader;
