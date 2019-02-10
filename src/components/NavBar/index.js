import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import './style.css'
import { ListItem } from '@material-ui/core';

class NavBar extends Component {

  state = {
    open: false
  }

  toggleDrawer = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar className="tool-bar">
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              News
          </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.toggleDrawer}>
          <List>
            <Link to='/'>
              <ListItem>
                Beer List
              </ListItem>
            </Link>
            <Link to='/bar-list'>
              <ListItem>
                Bar List
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem>
                Map
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem>
                Rank
              </ListItem>
            </Link>
            <Link to='/'>
              <ListItem>
                Login
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </React.Fragment>
    );
  }
}

export default NavBar;
