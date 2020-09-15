import React from "react";
import axios from "axios";
import Nav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends React.Component {

  state = {
    employees: {},
    pending: "",
    search: "",
    sortBy: "firstName"
  };


  handleInputChange = event => {
    this.setState({
      pending: event.target.value
    });
  };




  render() {
    return (
      <div className="employees">
        <Nav
          value={this.state.pending}
          handleInputChange={this.handleInputChange}

        />

      </div>
    );
  }
}

export default App;
