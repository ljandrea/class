// Main.js file
'use strict';

// Data: a group of people
const people = [
    { name: "Mike", interest: "Music" },
    { name: "Rashmi", interest: "Medicine" }
];

// Class for an individual person
<<<<<<< HEAD
class Person extends React.Component {
    render() {
        return (
            <div>
                <p>Hello, my name is {this.props.name} and I am interested in {this.props.interest}.</p>                
            </div>
        );
    }
};

// Class to represent a group of people
class People extends React.Component {
    render() {
        return (this.props.group.map((d) => {
            return <Person key={d.name} name={d.name} interest={d.interest} />
        }))
    }
}
// Render your component in the `main` section
ReactDOM.render(
    <People group={people} />,
    document.querySelector('main')
);
=======


// Class to represent a group of people

// Render your component in the `main` section

>>>>>>> 71a955aed51715dbe44cf7910b7cfa01165b1106
