import React from "react";
import axios from "axios";
import Navbar from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Table from "react-bootstrap/Table";
import Employee from "./components/Employee";
class App extends React.Component {
  state = {
    employees: {},
    pending: "",
    search: "",
    sortBy: "firstName",
  };

  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    axios.get("https://randomuser.me/api/?results=50&nat=au").then((res) => {
      this.setState({ employees: res.data.results });
    });
  };

  handleInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      pending: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.pending);
    this.setState({ search: this.state.pending });
  };

  handleSort = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({
      sortBy: event.target.value,
    });
  };

  sorter = () => {
    if (this.state.employees.length > 0) {
      return this.state.employees.map((employee) => (
        <Employee
          key={employee.id.value}
          image={employee.picture.large}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.phone}
          email={employee.email}
          stateName={employee.location.state}
          newEmail={"mailto:" + employee.email}
        />
      ));
    }
  };

  render() {
    return (
      <div className="employees">
        <Navbar
          value={this.state.pending}
          handleSort={this.handleSort}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />

        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Branch State</th>
            </tr>
          </thead>
          <tbody>{this.sorter()}</tbody>
        </Table>
      </div>
    );
  }
}

export default App;
