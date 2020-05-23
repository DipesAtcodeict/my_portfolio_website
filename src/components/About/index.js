import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Fade } from 'react-reveal';
import { useSelector, useDispatch } from 'react-redux';
import { addAboutRef } from '../../actions/ui';
import { scrollToRef } from '../../actions/ui';
import useWindowSize from '../../hooks/useWindowSize';

const useStyles = makeStyles({
  about: {
    margin: '0 5rem 0 5rem',
    fontSize: '1.5rem',
    lineHeight: '150%',
    padding: '15px',
    textAlign: 'center',
    color: grey[300],
  },
  aboutSm: {
    margin: '0 1rem 0 1rem',
    fontSize: '1.5rem',
    lineHeight: '150%',
    padding: '15px',
    textAlign: 'center',
    color: grey[300],
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '25px',
    lineHeight: '120%',
    borderRadius: '25px',
  },
  p: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  icons: {
    fontSize: '3.5rem',
    marginTop: '2rem',
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  iconDesc: {
    fontSize: '1rem',
    fontWeight: 'medium',
  },
  icon: {
    padding: '1rem',
  },
  profileBtn: {
    display: 'inline-block',
    backgroundColor: '#b07521',
    padding: '10px 20px',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '10px',
    marginTop: '1rem',
  },
});

const About = () => {
  const classes = useStyles();
  const aboutRef = useRef();
  const dispatch = useDispatch();
  const profileRef = useSelector((state) => state.ui.profileRef);
  const [width] = useWindowSize();

  useEffect(() => {
    dispatch(addAboutRef(aboutRef));
  }, [dispatch]);

  return (
    <div className={width > 700 ? classes.about : classes.aboutSm}>
      <h1 ref={aboutRef} className={classes.h1}>
        About Me
      </h1>
      <div className={classes.icons}>
        <Fade bottom>
          <div className={classes.icon}>
            <i className='fas fa-desktop'></i>
            <p className={classes.iconDesc}>Web Development</p>
          </div>
          <div className={classes.icon}>
            <i className='fas fa-mobile-alt'></i>
            <p className={classes.iconDesc}>Mobile Development</p>
          </div>
          <div className={classes.icon}>
            <i className='fab fa-uikit'></i>
            <p className={classes.iconDesc}>Interactive UI</p>
          </div>
          <div className={classes.icon}>
            <i className='fas fa-user-friends'></i>
            <p className={classes.iconDesc}>Team Lead</p>
          </div>
        </Fade>
      </div>
      <Fade left duration={1800}>
        <p className={classes.p}>
          I'm a Full Stack Developer. I can create beautiful, interactive and
          fast user interfaces on Front and backend solutions for your business
          requirements. I can also create cross platform native mobile apps. I
          am an undergrad studying computer science in Nepal. I have worked on
          various projects individually and some in team in various competition
          and projects. I am capable of working in team and changing ideas into
          working applications.
        </p>
      </Fade>
      <div
        onClick={() => dispatch(scrollToRef(profileRef))}
        className={classes.profileBtn}
      >
        Check My Profile
      </div>
    </div>
  );
};

export default About;
