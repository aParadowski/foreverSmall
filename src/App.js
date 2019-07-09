import React, { Component } from 'react';
import { withStyles, Card, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo.svg';
import './App.css';

const styles = {
  root: {
    flexGrow: 1,
    height: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  loginButton: {
    marginLeft: 'auto'
  }
};


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const { classes } = this.props;

    return (
      <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Welcome to Forever Small. Get them gainz.
            </Typography>
            <Button color="inherit" className={classes.loginButton}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <Card>
        <Logo />
      </Card>
      </>
    );
  }
}

export default withStyles(styles)(App);
