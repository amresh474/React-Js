import React, { Component } from 'react';
class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            msg:"Amresh kumar.Good moring have nice day"
          }
        //   this.changeState=this.changeState.bind(this)
    }
    changeState =()=>{
        this.setState({
            msg:"Amresh kumar.good Evening and good night"
        });
    }
    render() { 
        return (
            <div>
                <h4>Reactjs Lifecycle </h4>
                <h6>Hello {this.state.msg}</h6>
                <button onClick={this.changeState}>CLick Here</button>
            </div>
          );
    }
}
 
export default Lifecycle;