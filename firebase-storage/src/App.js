import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgs: {}
        }
    }
    componentDidMount() {
        // Create references to the 'imgs' endpoings on database and storage
        this.dataRef = firebase.database().ref('imgs');
        this.storageRef = firebase.storage().ref('imgs');

        // When the database 'value' changes, change the state of `imgs`
        this.dataRef.on('value', (snapshot) => {
            console.log('value change!');
            this.setState({
                imgs: snapshot.val() || {}
            });
        });
    }

    // Event when the input changes
    fileChange(event) {
        // Get the uploaded file and its name
        let name = event.target.files[0].name;
        let file = event.target.files[0];
        console.log(name);

        // Create a new child reference (on storage) for the image using its name
        let imgRef = this.storageRef.child(name);
        imgRef.put(file).then((snapshot) => {
            console.log(snapshot.downloadURL);
            this.dataRef.push({
                url: snapshot.downloadURL,
                text: name
            })
        });
        // Then, `put` the file contents. *then()*
        // Using the `snapshot.downloadURL` value, push a new element into 
        // The _database_ `imgs` reference


    }
    render() {
        console.log('imgs', this.state.imgs);
        return (
            <div className="App">
                <div>
                    <input type="file" onChange={(e) => this.fileChange(e)} />
                </div>
                { /* Iterate through the keys of the `imgs` state and render an image*/}
                {Object.keys(this.state.imgs).map((d, i) => {
                    return <img alt={this.state.imgs[d].name} src={this.state.imgs[d].url} key={'img-' + i} />
                })}
            </div>
        );
    }
}

export default App;
