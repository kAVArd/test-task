/* eslint-disable no-unused-vars */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { Typography, Toolbar, AppBar, Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Link component={RouterLink} to='/' variant='h5' className={classes.title} color='inherit'>
                Blog
            </Link>
            <Link component={RouterLink} to='/create-post' color='inherit' variant='h6'>
                Create post
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar