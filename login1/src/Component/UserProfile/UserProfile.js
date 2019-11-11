import React, { Component } from 'react';


class UserProfile extends Component {
    constructor(props) {
        super(props) 
    this.state = {
        users: []
      };
    }
    
      componentDidMount () {
        fetch("http://localhost:8080/user", {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          // mode: "cors", // no-cors, cors, *same-origin
          // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(this.users);
            this.setState({ users: data });
          })
          .catch(console.log);
      }

 renderTableData () {
    return this.state.users.map((users, index) => {
       const { id, name,firstName,lastName, user,mobile, email } = users //destructuring
       return (
          <tr key={id}>
             {/* <td>{id}</td>
             <td>{name }</td> */}
             <td>{firstName  }</td>
             <td>{lastName  }</td>
             <td>{user  }</td>
             <td>{mobile }</td>
             <td>{email }</td>
          </tr>
       )
    })
 }



//  renderTableHeader() {
//     let header = Object.keys(this.state.users)
//     return header.map((key, index) => {
//        return <th key={index}>{key.toUpperCase()}</th>
//     })
//  }

 render() {
    return (    
                
      <div class="container">  
      <h1>Users Detail</h1>    
            <table class="table">  
      <tr><th>FirstName</th><th>LastName</th><th>User</th>
      <th>Mobile</th><th>Email</th>
      </tr>  
      {this.renderTableData()}   
</table> 
 <div className="container">  
  <h2>Pager Example</h2>                
  <ul className="pager">  
    <li><a href="#">Previous</a></li>  
    <li><a href="#">Next</a></li>  
  </ul>  
</div> 
</div>  
         
      
    )
 }
}

 
 export default UserProfile;