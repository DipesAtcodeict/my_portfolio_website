import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToRef } from '../../actions/ui';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

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
    zIndex: 1,
  },
  alert: {
    position: 'fixed',
    bottom: '6rem',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    textAlign: 'center',
    zIndex: 2,
    color: 'red',
  },
});

const AppBarSm = () => {
  const classes = useStyles();
  const aboutRef = useSelector((state) => state.ui.aboutRef);
  const homeRef = useSelector((state) => state.ui.homeRef);
  const contactRef = useSelector((state) => state.ui.contactRef);
  const dispatch = useDispatch();
  const [open, setAlertOpen] = useState(false);

  return (
    <>
      <Collapse in={open} className={classes.alert}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              size='small'
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize='inherit' />
            </IconButton>
          }
        >
          This feature is currently on development!
        </Alert>
      </Collapse>
      <div className={classes.appBarSm}>
        <i
          className='fas fa-home'
          onClick={() => dispatch(scrollToRef(homeRef))}
        ></i>
        <i
          className='fas fa-user'
          onClick={() => dispatch(scrollToRef(aboutRef))}
        ></i>
        <i
          className='fas fa-phone-alt'
          onClick={() => dispatch(scrollToRef(contactRef))}
        ></i>
        <i className='fas fa-newspaper' onClick={() => setAlertOpen(true)}></i>
      </div>
    </>
  );
};

export default AppBarSm;
