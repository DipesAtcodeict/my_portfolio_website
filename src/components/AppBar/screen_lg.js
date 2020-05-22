import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { useSelector, useDispatch } from 'react-redux';
import { scrollToRef } from '../../actions/ui';

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
});

const AppBarLg = () => {
  const classes = useStyles();
  const aboutRef = useSelector((state) => state.ui.aboutRef);
  const homeRef = useSelector((state) => state.ui.homeRef);
  const profileRef = useSelector((state) => state.ui.profileRef);
  const dispatch = useDispatch();

  return (
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
        <li>Contact</li>
        <li>Blogs</li>
      </ul>
    </div>
  );
};

export default AppBarLg;
