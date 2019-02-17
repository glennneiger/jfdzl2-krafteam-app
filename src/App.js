import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Main from './routes/Main'
import BarList from './routes/BarList'
import Login from './routes/Login'
import { BrowserRouter as Router, Route, } from "react-router-dom";

import 'normalize.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />

                    <Route exact path='/' component={Main} />
                    <Route path='/bar-list' component={BarList} />
                    <Route path='/login' component={Login}/> 

                    <BottomBar />
                </div>
            </Router>
        );
    }
}

export default App;