import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './style.css';


const styles = {
    textField: {
        margin: 10,
    },
    searchForm: {
        direction: 'flex',
        alignSelf: 'center'
    }
}


class SearchForm extends Component {

    state = {

    }

    render() {
        return (
            <div className="search-container">
                <h2>Search</h2>
                <form className="search-form" style={styles.searchForm}>
                    <TextField style={styles.textField}
                        id="beer-name-field"
                        label="Beer name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField style={styles.textField}
                        id="beer-type-field"
                        label="Type of beer"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField style={styles.textField}
                        id="beer-taste-field"
                        label="Beer taste"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField style={styles.textField}
                        select
                        id="beer-color-field"
                        label="Beer Color"
                        margin="normal"
                        variant="outlined"
                        value="dark"
                        // helperText="Please select beer color"
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;