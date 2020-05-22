import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToRef } from '../../actions/ui';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

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
    opacity: 0.98,
    zIndex: 1,
  },
  brand: {
    fontSize: '1.8rem',
    cursor: 'pointer',
  },
  menuItems: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexBasis: '60%',
  },
  alert: {
    position: 'fixed',
    top: '6rem',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    textAlign: 'center',
    zIndex: 2,
    color: 'red',
  },
});

const AppBarLg = () => {
  const classes = useStyles();
  const aboutRef = useSelector((state) => state.ui.aboutRef);
  const homeRef = useSelector((state) => state.ui.homeRef);
  const profileRef = useSelector((state) => state.ui.profileRef);
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
      <div className={classes.appBar}>
        <div
          className={classes.brand}
          onClick={() => dispatch(scrollToRef(homeRef))}
        >
          DIPESH
        </div>
        <ul className={classes.menuItems}>
          <li onClick={() => dispatch(scrollToRef(aboutRef))}>About</li>
          <li onClick={() => dispatch(scrollToRef(profileRef))}>Profile</li>
          <li onClick={() => dispatch(scrollToRef(contactRef))}>Contact</li>
          <li onClick={() => setAlertOpen(true)}>Blogs</li>
        </ul>
      </div>
    </>
  );
};

export default AppBarLg;
