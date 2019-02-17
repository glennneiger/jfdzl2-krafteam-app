import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
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
                <div className="textFildContainer">
                    <div>
                        <TextField
                            className={classes.root}
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
                        />
                    </div>
                </div>


            </div>

        )
    }
}


export default withStyles(styles)(Form);