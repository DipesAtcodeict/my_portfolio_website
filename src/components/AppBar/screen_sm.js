import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToRef } from '../../actions/ui';

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
});

const AppBarSm = () => {
  const classes = useStyles();
  const aboutRef = useSelector((state) => state.ui.aboutRef);
  const homeRef = useSelector((state) => state.ui.homeRef);
  const dispatch = useDispatch();

  return (
    <div className={classes.appBarSm}>
      <i
        className='fas fa-home'
        onClick={() => dispatch(scrollToRef(homeRef))}
      ></i>
      <i
        className='fas fa-user'
        onClick={() => dispatch(scrollToRef(aboutRef))}
      ></i>
      <i className='fas fa-phone-alt'></i>
      <i className='fas fa-newspaper'></i>
    </div>
  );
};

export default AppBarSm;
