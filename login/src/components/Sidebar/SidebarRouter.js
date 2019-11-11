import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class SidebarRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
      <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <SideNav
              onSelect={selected => {
                const to = "/" + selected;
                if (location.pathname !== to) {
                  history.push(to);
                }
              }}
            >
              <SideNav.Toggle />
              <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-home"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Home</NavText>
                </NavItem>
                <NavItem eventKey="devices">
                  <NavIcon>
                    <i
                      className="fa fa-fw fa-device"
                      style={{ fontSize: "1.75em" }}
                    />
                  </NavIcon>
                  <NavText>Devices</NavText>
                </NavItem>
              </SideNav.Nav>
            </SideNav>
            <main>
              <Route path="/" exact component={props => <RootComponent />} />
              <Route path="/home" component={props => <Home />} />
              <Route path="/devices" component={props => <Devices />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  </div>
);
        
    }
}
 
export default SidebarRouter;
 

