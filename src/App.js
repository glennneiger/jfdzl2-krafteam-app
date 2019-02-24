import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Main from './routes/Main'
import BarList from './routes/BarList'
import BeerList from './routes/BeerList'
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BarCard from './routes/Bar'
=======
>>>>>>> develop
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
                    <Route path='/bar/:id' component={BarCard} />
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