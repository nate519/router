import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter, R} from 'react-router-dom';
import './index.js';
import { Router, Route} from 'react-router';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    render() {
        return (
            <h2>Hey, I am HOME!</h2>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <h2>Hey, I am ABOUT!</h2>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <h2>Hey, I am ARTCILES!</h2>
        );
    }
}

class App extends React.Component {
    render() {

        return (
            <div>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="about">About</Link></li>
                    <li><Link to="articles">Articles</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(<Router history = {BrowserRouter}>
    <Route exact path = "/" component = {App}>
        <exact component = {Home} />
        <Route path = "home" component = {Home} />
        <Route path = "about" component = {About} />
        <Route path = "articles" component = {Articles} />
    </Route>
</Router>, document.getElementById('root'));
export default App;
