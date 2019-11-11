import React from "react";
import Login from "./Component/login/login";
import SingUp from "./Component/SignUp/SignUp";
import { Route,NavLink,Switch,BrowserRouter } from "react-router-dom";
import UserProfile from "./Component/UserProfile/UserProfile";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Arrowfun from "./Component/Learning/Arrowfun";
import Lifecycle from "./Component/Learning/lifecycle";
import Form from "./Component/Learning/uncontrollform";
import ControllForm  from "./Component/Learning/controllerForm"
import Event from "./Component/Learning/event"
import RefDom from "./Component/Learning/refDom";
import ReactBootsrap from "./Component/Learning/reactBootsrap";
import DashBoard from "./Component/DashBoard/dashBoard"
import { Jumbotron,Container} from "reactstrap";
import Checkout from "./Component/checkout/Checkout"
import Footer from './Component/Resuable/Footer'

class App extends React.Component {
  render() {
    return (
      <Jumbotron fluid>
      <Container>      
        <BrowserRouter>
        <Switch>
          <div>            
            {/* <Route path="/" component={App} />   */}
            <Route path="/RefDom" component={RefDom} />
            <Route path="/" component={DashBoard} />
            <Route path="/Form" component={Form} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/ReactBootsrap" component={ReactBootsrap} />
            <Route path="/Event" component={Event}/>
            <Route path="/ControllForm" component={ControllForm}/>
            <Route path="/lifecycle" exact component={Lifecycle} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SingUp} />
                      
            <Route path="/UserProfile" component={UserProfile} />
            <Route path="/ProductDetails" component={ProductDetails} />
            <Route path="/Arrowfun" component={Arrowfun} />
          </div>
          </Switch>
        </BrowserRouter>
        <Footer/>
        </Container>
</Jumbotron>
    );
  }
}

export default App;
