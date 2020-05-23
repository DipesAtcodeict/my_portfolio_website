import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { grey } from '@material-ui/core/colors';
import { addContactRef } from '../../actions/ui';
import { makeStyles } from '@material-ui/core';
import Moon from './moon';
import { Fade } from 'react-reveal';

const useStyles = makeStyles({
  contact: {
    color: grey[300],
    textAlign: 'center',
    fontSize: '1.2rem',
    padding: '25px',
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '25px',
    borderRadius: '25px',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: '4rem',
  },
  email: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '1rem',
    marginRight: '20px',
    marginLeft: '20px',
  },
  eAddress: {
    marginTop: '20px',
    backgroundColor: '#b07521',
    width: 'fit-content',
    alignSelf: 'center',
    padding: '10px 30px',
    fontWeight: 'bold',
    borderRadius: '8px',
  },
});

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contactRef = useRef();

  useEffect(() => {
    dispatch(addContactRef(contactRef));
  }, [dispatch]);

  return (
    <div className={classes.contact} ref={contactRef}>
      <h1 className={classes.h1}>Contact Me</h1>
      <div className={classes.content}>
        <Fade left>
          <Moon />
        </Fade>
        <div className={classes.email}>
          <Fade right>
            <h3>
              You can keep looking at the the moon. But to contact me, you can
              email me at :
            </h3>
            <span className={classes.eAddress}>dipeshonblack@gmail.com</span>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Contact;
