import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

const styles = {
    textField: {
        margin: 10,
    },
    searchForm: {
        display: 'flex',
        alignSelf: 'center'
    }
}

class AddPlaceForm extends Component {

    state = {
        name: '',
        description: '',
        address: '',
        image: 'https://cdn2.iconfinder.com/data/icons/disco-pub-night-club-party/474/disco-night-club-001-512.png',
        city: '',
        rating1: 0,
        rating1Count: 0,
        rating1Sum: 0,
        rating2: 0,
        rating2Count: 0,
        rating2Sum: 0,
        rating3: 0,
        rating3Count: 0,
        rating3Sum: 0,
        website: ''
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = event => {
        fetch('https://jfdzl2-krafteam.firebaseio.com/places.json', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
            .then(response => response.json())
            .then(() => this.props.history.push('/bar-list'))
    }

    render() {
        return (
            <div>
                <h2>Add new place</h2>
                <form style={styles.searchForm}>
                    <TextField style={styles.textField}
                        id="name"
                        label="Bar name"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField style={styles.textField}
                        id="description"
                        label="Description"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField style={styles.textField}
                        id="address"
                        label="Address"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <TextField style={styles.textField}
                        id="image"
                        label="Image URL"
                        margin="normal"
                        variant="outlined"
                        onChange={this.handleChange}
                    />
                    <Button onClick={this.handleSubmit} style={styles.textField} color='primary' variant='outlined'> + </Button>
                </form>
            </div>
        )
    }
}

export default withRouter(AddPlaceForm);