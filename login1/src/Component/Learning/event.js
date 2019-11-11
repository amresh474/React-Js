import React, { Component } from 'react';
class event extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name:""
         }
    }
    changeText=(event)=>{
        this.setState({
            Name:event.target.value
        });

    }
    render() { 
        return ( 
            <div>
                <form>
                <label htmlFor="name">Enter  Name: </label>  
                       <input type="text" id="name" onChange={this.changeText}/>
                       <h1>You Entered:{this.state.Name}</h1>    
                       <button>submit</button>               
                </form>
            </div>
         );
    }
}
 
export default event;