import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
  appBar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: grey[900],
    color: grey[300],
    padding: '10px 3rem',
    fontSize: '1.4rem',
    display: 'flex',
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  brand: {
    fontSize: '1.8rem',
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexBasis: '60%',
  },
});

const AppBarLg = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <div className={classes.brand}>
        <a href='/'>DIPESH</a>
      </div>
      <ul className={classes.menuItems}>
        <li>About</li>
        <li>Contact</li>
        <li>Profile</li>
        <li>Blogs</li>
      </ul>
    </div>
  );
};

export default AppBarLg;
