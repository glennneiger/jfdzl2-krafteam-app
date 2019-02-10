import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Main from './routes/Main'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'normalize.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <Route path='/' component={Main} />

                    <BottomBar />
                </div>
            </Router>
        );
    }
}

export default App;