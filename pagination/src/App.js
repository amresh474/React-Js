import React, { Component } from "react";
import axios from "axios";
import {

  Table,
  InputGroup,
  
} from "react-bootstrap";
import {
  AsyncTypeahead,
 
} from "react-bootstrap-typeahead";

const pannelWidth = {
  width: "90%"
};

const pannelHeader = {
  color: "black"
};

const pannelFooter = {
  float: "right"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      filteredData: [],
      isLoading: false
    };
  }

  showDetail = selectedData => {
    console.log("data", selectedData);
    this.setState({
      filteredData: selectedData
    });
  };
 
  handleSearch = value => {
    if (value !== "") {
      const data = this.state.data;
      this.setState({
        filteredData: data
      });
    }
  };
  

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.mobile.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    axios.get(`http://localhost:8080/user`).then(response => {
      // response.json();
      console.log(response);
      let data = response.data;

      console.log(data);
      const { query } = this.state;
      const filteredData = data.filter(element => {
        return element.mobile.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({
        data,
        filteredData
      });
      console.log(this.state.data);
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <cart>
        <div className="container" style={pannelWidth} ref="selfdiv">
          <br />
          <div className="panel panel-primary">
            <div className="panel-heading">
              <div className="row">
                <div className="col-md-2 col-lg-3">
                  <h4 style={pannelHeader}> Ariba Demo Project</h4>
                </div>

                <div className="col-md-6 col-lg-6">
                  <InputGroup>
                    <AsyncTypeahead
                      {...this.props}
                      id="searchAriba"
                      useCache={false}
                      isLoading={this.state.isLoading}
                      labelKey="mobile"
                      multiple={false}
                      options={this.state.data}
                      onChange={this.showDetail}
                      onSearch={this.handleSearch}
                      placeholder="Search name..."
                    />
                    <InputGroup.Append>{""}</InputGroup.Append>
                  </InputGroup>
                </div>
                <div className="col-md-2 col-lg-2">
                  <button className="btn btn-sm btn-success">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="panel-body" style={{ marginTop: "40px" }}>
              <Table className="table table-striped">
                <thead>
                  <tr>
                    <th width="11%">Mobile</th>
                    <th width="11%" style={{ paddingLeft: "10px" }}>
                      {" "}
                      FirstName
                    </th>
                    <th width="11%">lastName</th>
                    <th width="11%">user</th>
                    <th width="11%">email</th>
                    <th width="19%">Date of Birth</th>
                    <th width="11%">createdbycat</th>
                    <th width="11%">updatedbycat</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.filteredData.map(i => (
                    <tr key={i.mobile}>
                      <td style={{ paddingLeft: "10px" }}>{i.mobile}</td>
                      <td style={{ paddingLeft: "10px" }}>{i.firstName}</td>
                      <td style={{ paddingLeft: "10px" }}>{i.lastName}</td>
                      <td style={{ paddingLeft: "10px" }}>{i.user}</td>
                      <td style={{ paddingLeft: "10px" }}> {i.email} </td>
                      <td style={{ paddingLeft: "10px" }}>{i.dob}</td>
                      <td style={{ paddingLeft: "10px" }}>{i.createdbycat}</td>
                      <td style={{ paddingLeft: "10px" }}> {i.updatedbycat}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </cart>
    );
  }
}

export default App;
