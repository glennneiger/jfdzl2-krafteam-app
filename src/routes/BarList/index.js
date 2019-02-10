import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import BottomBar from '../../components/BottomBar';

class BarList extends Component {
    render() {
        return (
            <div>
                <b>
                    <NavBar />
                    BarList
                    <BottomBar />
                </b>
            </div>
        );
    }
}

export default BarList;