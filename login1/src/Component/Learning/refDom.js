
import React, { Component } from 'react';
import { render } from 'react-dom';  

class refDom extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.callRef=React.callRef();
    }


    addingRefInput() {  
        this.callRef.current.focus();  
      }  
    render() { 
        return (
        <div>
            <h3>Adding Ref to DOM element</h3> 
            <input  
          type="text"  
          ref={this.callRef} />  
        <input  
          type="button"  
          value="Add text input"  
          onClick={this.addingRefInput}  
        />  
        </div>  
        );
    }
}
 
export default refDom;