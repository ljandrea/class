import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
<<<<<<< HEAD
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { About } from './about.js';
import { Homepage } from './homepage.js';
import { Projects } from './Projects.js';

// Import your other components here

class App extends Component {
    render() {
        return (<div>
            <Router>
                <div>
                    <Link to="/">Homepage</Link>{' '}
                    <Link to="/about">About</Link>{' '}
                    <Link to="/projects">Projects</Link>{' '}
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/' component={Homepage} />
                </div>
            </Router>
            { /*Render your Router, Links, and Routes in here */}
        </div>
        );
=======
import { Projects } from './Projects';
import { About } from './About';
import { Homepage } from './Homepage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="container">
                <Link to="/">Home</Link>
                { ' ' }
                <Link to="/projects">Projects</Link>
                { ' ' }
                <Link to="/about">About</Link>
                <Route exact path="/" component={ Homepage } />
                <Route path="/projects" component={ Projects } />
                <Route path="/about" component={ About } />
              </div>
            </Router>
            );
>>>>>>> 15aadac3fc9b7ac086f6178e26da0210bc48cd70
    }
}

export default App;
