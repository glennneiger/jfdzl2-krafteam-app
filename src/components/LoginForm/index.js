import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './style.css'

const styles = {
    root: {
        background: "#212529",
        color: "#fed136"
    },
    focused: {
        color: "#fed136",

    },
    input: {
        color: "#fed136",

    }
};

class Form extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="formContainer">
                <header>
                    <h1>Beer Seek</h1>
                    <h2>Log In</h2>
                </header>
                    <div className="textFieldContainer">
                        <div>
                            <div >
                                <TextField

                                    InputLabelProps={
                                        classes.input
                                    }
                                    InputProps={
                                        classes.input
                                    }
                                    id="outlined-email-input"
                                    label="Email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth


                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="buttonsContainer">
                        <Button variant="outlined" color="primary" className={classes.button}>
                            LOG IN
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.button}>
                            SIGN UP
                        </Button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default withStyles(styles)(Form);