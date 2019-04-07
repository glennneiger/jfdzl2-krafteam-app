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

    handleSubmit = event => {
        if (event.which === 13) {
            alert('press enter' + event.target.value);
        }
    }

    render() {
        return (
            <div className="search-container">
                <h2>Search</h2>
                <form onKeyPress={this.handleSubmit} className="search-form" style={styles.searchForm}>
                    <TextField style={styles.textField}
                        id="beer-name-field"
                        label="Beer name"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField style={styles.textField}
                        id="beer-type-field"
                        label="Beer type"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField style={styles.textField}
                        id="beer-color-field"
                        label="Beer color"
                        margin="normal"
                        variant="outlined"
                    />
                </form>
            </div>
        );
    }
}

export default SearchForm;