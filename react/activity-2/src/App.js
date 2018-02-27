// Import Component
import React, { Component } from 'react';

// Create a SearchApp Component
class SearchApp extends Component {
    // In the constructor, set the initial state of search to empty string
    // Also *bind `this`* to the handleChange function
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            search: ''
        };
=======

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
    }

    // In this event, get the target value, and reset the state of `search`
    handleChange(event) {
        // Get event value
<<<<<<< HEAD
        let searchValue = event.target.value;

        // Set the state to trigger a re-rendering
        this.setState({
            search: searchValue
        });
=======

        // Set the state to trigger a re-rendering

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
    }

    // Function to render data
    render() {
        // Filter the table data
        let employees = this.props.data,
<<<<<<< HEAD
            searchString = this.state.search.trim().toLowerCase();
=======
            searchString = this.state == null ? '' : this.state.search.trim().toLowerCase();
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106

        // If the search string isn't an empty string, filter the results using `.match`
        if (searchString.length > 0) {
            // We are searching. Filter the results.
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
        }

        // Return a `div` containing a  `UserInput` component and a `Table` component
        return (
            <div>
<<<<<<< HEAD
              <UserInput update={ this.handleChange } />
              <Table data={ employees } />
=======
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
            </div>
        )
    }
}

// UserInput component
class UserInput extends Component {
    constructor(props) {
        super(props)
    }

    // Return an input element that, on change, does the event passed to update via props
    render() {
        return (
            <div>
<<<<<<< HEAD
              <input className="form-control mb-2" placeholder="Search Employees..." onChange={ (e) => this.props.update(e) } />
=======
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
            </div>)
    }
}

// Simple TableRow component for showing a <tr>
class TableRow extends Component {
    render() {
        return (
            <tr>
              <td>
                { this.props.name }
              </td>
              <td>
                { this.props.title }
              </td>
              <td>
                { this.props.salary }
              </td>
            </tr>)
    }
}
;

// Class for a table
class Table extends Component {
    constructor(props) {
        super(props);
    }
    // Should return a TableRow component for each element in this.props.data
    render() {
        return (
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Salary</th>
                  </tr>
<<<<<<< HEAD
                  { this.props.data.map(function(d, i) {
                        return <TableRow key={ 'person-' + i } name={ d.name } salary={ d.salary } title={ d.title } />
                    }) }
=======
                  {// write your code here!
                  }
>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
                </tbody>
              </table>
            </div>
        )
    }
}

// Export the SearchApp
export default SearchApp;
