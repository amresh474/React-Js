import React, { Component } from 'react';
class uncontrollform extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.input=React.createRef();
    }
    updateSubmit=(event)=>{
        alert("you submit name ,first and company name ")
        event.preventDefault();
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.updateSubmit}>
                    <h3>Uncontrolle form </h3>
                    <label>
                      Name:  <input type="text"  ref={this.input}/>
                    </label>
                    <label>
                        FirstName: <input type="text" ref={this.input} />
                    </label>
                    <label>
                        Company Name: <input type="text" ref={this.input} />
                    </label><br/>
                    <label>
                    <button >submit</button>
                    </label>
                </form>
            </div>
         );
    }
}
 
export default uncontrollform;