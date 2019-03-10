import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { db } from '../../firebase';


const styles = {
    title: {
        marginTop: 30,
        textAlign: 'center'
    },
    textField: {
        margin: 10,
    },
    searchForm: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        margin: 10,
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20
    }
}

class AddPlaceForm extends Component {

    state = {
        name: '',
        description: '',
        address: '',
        image: ''
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit = event => {
        const bar = this.state;
        db.ref('/places').push(bar);
    }

    render() {
        return (
            <div>
                <h2 style={styles.title}>Add new place</h2>
                <div style={styles.formContainer}>
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
                    </form>
                    <Button onClick={this.handleSubmit} style={styles.button} color='primary' variant='outlined'> + Add new bar </Button>
                </div>
            </div>
        )
    }
}

export default AddPlaceForm;