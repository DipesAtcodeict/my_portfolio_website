import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appBarSm: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    padding: '10px 20px',
    fontSize: '1.8rem',
    backgroundColor: 'black',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
  },
});

const AppBarSm = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBarSm}>
      <i className='fas fa-home'></i>
      <i className='fas fa-address-card'></i>
      <i className='fas fa-phone-alt'></i>
      <i className='fas fa-newspaper'></i>
    </div>
  );
};

export default AppBarSm;
