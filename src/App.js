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
    axios.get("https://randomuser.me/api/?results=10&nat=au").then((res) => {
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

  searchSorter = () => {
    let filterArray = [];
    if (this.state.employees.length > 0) {
      filterArray = this.state.employees.filter((employee) => {
        console.log(this.state.search);
        console.log(
          employee.name.first.toLowerCase().includes(this.state.search)
        );
        return (
          employee.name.first.toLowerCase().includes(this.state.search) ||
          employee.name.last.toLowerCase().includes(this.state.search) ||
          employee.phone.toLowerCase().includes(this.state.search) ||
          employee.email.toLowerCase().includes(this.state.search)
        );
      });

      filterArray.sort((a, b) => {
        switch (this.state.sortBy) {
          case "firstName":
            return a.name.first > b.name.first ? 1 : -1;
          case "lastName":
            return a.name.last > b.name.last ? 1 : -1;
          case "stateName":
            return a.location.state > b.location.state ? 1 : -1;
          default:
            return [];
        }
      });
      console.log(filterArray);
      return filterArray;
    } else return [];
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
          <tbody>
            {console.log(this.searchSorter())}
            {this.searchSorter().map((employee) => (
              <Employee
                key={employee.id.value}
                image={employee.picture.large}
                name={employee.name.first + " " + employee.name.last}
                phone={employee.phone}
                email={employee.email}
                stateName={employee.location.state}
                mailTo={"mailto:" + employee.email}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
