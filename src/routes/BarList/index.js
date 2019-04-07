import React, { Component } from 'react';
import { connect } from 'react-redux';

import GridList from '../../components/GridList'
class BarList extends Component {
    render() {
        return (
            <div>
                <GridList/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bars: state.bars
})

export default connect(BarList);
