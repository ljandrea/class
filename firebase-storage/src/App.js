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
<<<<<<< HEAD
        

        // When the database 'value' changes, change the state of `imgs`
        
=======
        this.dataRef = firebase.database().ref('imgs/')
        this.storageRef = firebase.storage().ref('imgs/')

        // When the database 'value' changes, change the state of `imgs`
        this.dataRef.on('value', (snapshot) => {
            console.log('snapshot', snapshot.val())
            this.setState({
                imgs: snapshot.val() || {}
            })
        })
>>>>>>> 15aadac3fc9b7ac086f6178e26da0210bc48cd70
    }

    // Event when the input changes
    fileChange(event) {
        // Get the uploaded file and its name
<<<<<<< HEAD
        
=======
        let name = event.target.files[0].name;
        let file = event.target.files[0];
>>>>>>> 15aadac3fc9b7ac086f6178e26da0210bc48cd70

        // Create a new child reference (on storage) for the image using its name
        // Then, `put` the file contents. *then()*
        // Using the `snapshot.downloadURL` value, push a new element into 
        // The _database_ `imgs` reference
<<<<<<< HEAD
        
=======
        let imgRef = this.storageRef.child(name);
        imgRef.put(file).then((snapshot) => {
            this.dataRef.push({
                url: snapshot.downloadURL
            })
        });
>>>>>>> 15aadac3fc9b7ac086f6178e26da0210bc48cd70

    }
    render() {
        return (
            <div className="App">
              <div>
                <input type="file" onChange={ (e) => this.fileChange(e) } />
              </div>
              { /* Iterate through the keys of the `imgs` state and render an image*/ }
<<<<<<< HEAD
              
=======
              { Object.keys(this.state.imgs).map((d, i) => {
                    return <img className="photo" key={ 'img-' + i } src={ this.state.imgs[d].url } />
                }) }
>>>>>>> 15aadac3fc9b7ac086f6178e26da0210bc48cd70
            </div>
            );
    }
}

export default App;
