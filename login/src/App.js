import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import CartDialog from "./components/CartDialog/CartDialog";
 import ProductList from "./components/ProductList/ProductList";
 import SignUp from "./components/SignUp/SignUp"
 import Details from "./components/Details/Details";
 import Login1 from "./components/Login/Login1"
 import otp from "./components/Login/otp";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <Menu />
        <div className="content">
          <CartDialog />
       
          <Switch>
          <Route path="/search/" component={ProductList} />
          <Route path="/" exact component={ProductList} />
          <Route path="/details/:id" component={Details} />
            <Route path="/Login" component={Login} />
            <Route path="/Login1" component={Login1} />
            <Route path="/otp" component={otp} />
            <Route path="/SignUp" component={SignUp} />
            <Route
              component={() => (
                <div style={{ padding: 20 }}>Page not found</div>
              )}
            />
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
    //    <div className="app">
    //    <Header />
    //    <div className="app-body">
    //      <Menu />
    //      <div className="content">
    //        <CartDialog />
    //        <Switch>
    //          <Route path="/search/" component={ProductList} />
    //          <Route path="/" exact component={ProductList} />
    //          <Route path="/details/:id" component={Details} />
    //          <Route path="/about" render={() => <div>About us</div>} />
    //          <Route path="/login" component={Login} />
    //          <ProtectedRoute path="/order" component={Order} />
    //          <Route
    //            component={() => (
    //              <div style={{ padding: 20 }}>Page not found</div>
    //            )}
    //          />
    //        </Switch>
    //      </div>
    //    </div>
    //    <Footer />
    //  </div>
  );
}

export default App;
