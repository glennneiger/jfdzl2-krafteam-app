import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Main from './routes/Main'
import BarList from './routes/BarList'
import Login from './routes/Login'
import BeerList from './routes/BeerList'
import BarCard from './routes/Bar'
import Rank from './routes/Rank/';
import AddPlace from './routes/AddPlace';
import Register from './routes/Register'

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
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/beer-list' component={BeerList} />
                    <Route path='/add-bar' component={AddPlace} />
                    <Route path='/ranking' component={Rank} />
                    <BottomBar />
                </div>
            </Router>
        );
    }
}

export default App;