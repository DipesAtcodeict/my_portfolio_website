import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { addContactRef } from '../../actions/ui';

const useStyles = makeStyles({
  contact: {
    color: grey[300],
    textAlign: 'center',
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
      <h2>Contact Me At : dipeshonblack@gmail.com</h2>
    </div>
  );
};

export default Contact;
