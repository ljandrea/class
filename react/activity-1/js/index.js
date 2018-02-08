// Main.js file
'use strict';

// Data: a group of people
const people = [
    { name: "Mike", interest: "Music" },
    { name: "Rashmi", interest: "Medicine" }
];

// Class for an individual person
class Person extends React.Component {
    render() {
        let name = this.props.name === undefined ? "no name provided" : this.props.name;
        let interest = this.props.interest === undefined ? "no interest provided" : this.props.interest;
        // console.log(this.props.name);
        return (
            <div>
                <p>Hello, my name is {name}, and I like {interest}</p>
            </div>
        )
    }
}

// Class to represent a group of people
class People extends React.Component {
    render() {
        console.log(this.props.group);
        return (
            <div>
                {this.props.group.map((d, i) =>
                    <Person name={d.name} interest={d.interest} key={'person' + i} />)

                }
            </div>
        )
    }

}

// Render your component in the `main` section

ReactDOM.render(
    <People group={people} />,
    document.querySelector('main')
)