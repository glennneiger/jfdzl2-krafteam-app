import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Main from './routes/Main'
import BarList from './routes/BarList'
import Login from './routes/Login'
import BeerList from './routes/BeerList'
import Rank from './routes/Rank/';

import './styles.css'
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
                    <Route path='/beer-list' component={BeerList} />

                    <BottomBar />

                    <Route path='/ranking' component={Rank} />
                    {/* <BottomBar /> */}

                </div>
            </Router>
        );
    }
}

export default App;