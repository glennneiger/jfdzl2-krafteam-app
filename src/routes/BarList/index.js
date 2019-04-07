import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBars } from '../../store/actions/bars'
import { db } from '../../firebase';

import GridList from '../../components/GridList'
class BarList extends Component {

    componentDidMount() {
        const {setBars} = this.props;

        db.ref('/places/').on('value', (snapshot) => {
            const places = [];
            Object.entries(snapshot.val()).forEach(e => {
                const bar = {
                    id: e[0],
                    ...e[1]
                }
                places.push(bar);
            })
            // this.setState({ places });
            setBars(places);
        })
    }

    render() {
        const { bars } = this.props;
        console.log(bars);
        return (
            <div>
                <GridList 
                    places={bars}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    bars: state.bars
})

const mapDispatchToProps = {
    setBars
}

export default connect(mapStateToProps, mapDispatchToProps)(BarList);
