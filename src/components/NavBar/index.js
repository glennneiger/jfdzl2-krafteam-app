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
import ListItemText from '@material-ui/core/ListItemText';

import './style.css'
import { ListItem } from '@material-ui/core';
import blackLogo from '../../assets/beer_logo_black.png';
import yellowLogo from '../../assets/beer_logo1.png'

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
        <AppBar position="static" style={{position: 'fixed'}}>
          <Toolbar className="tool-bar" >
            <Link to='/'>
              <img src={yellowLogo} className="bar-logo" alt="" />
            </Link>
            <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
              KrafTeam
            </Typography>
            <Link className="navbar-button" to='/login'>
            <Button  color="inherit">Login</Button>
            </Link>
            <Link className="navbar-button" to='/register'>
            <Button  color="inherit">Sign up</Button>
            </Link>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer} className="menuButton">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={this.state.open} onClose={this.toggleDrawer} >
          <img src={blackLogo} className="menu-logo" alt="" />
          <List>
            <Link className="link" to='/beer-list' onClick={this.toggleDrawer}>
              <ListItem style={{width: '200px'}}>
                Beer List
              </ListItem>
            </Link>
            <Link className="link" to='/bar-list' onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemText primary='Bar List' />
              </ListItem>
            </Link>
            <Link className="link" to='/' onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemText primary='Map' />
              </ListItem>
            </Link>
            <Link className="link" to='/ranking' onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemText primary='Rank' />
              </ListItem>
            </Link>
            <Link className="link" to='/add-bar' onClick={this.toggleDrawer}>
              <ListItem button>
                <ListItemText primary='Add bar' />
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </React.Fragment>
    );
  }
}


export default NavBar;
