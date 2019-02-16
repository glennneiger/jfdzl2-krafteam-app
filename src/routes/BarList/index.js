import React, { Component } from 'react';

import GridList from '../../components/GridList'
class BarList extends Component {
    render() {
        return (
            <div>
                BarList
                <p>
                    <span>Bar1  </span>
                    <span>Bar2  </span>
                </p>
                <p>
                    <span>Bar3  </span>
                    <span>Bar4  </span>
                </p>
<GridList></GridList>
            </div>
        );
    }
}

export default BarList;