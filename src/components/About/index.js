import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { addAboutRef } from '../../actions/ui';

const useStyles = makeStyles({
  about: {
    margin: '0 2rem 4rem 2rem',
    fontSize: '1.3rem',
    lineHeight: '1.5rem',
    padding: '15px',
    textAlign: 'center',
    color: grey[300],
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '25px',
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
    marginBottom: '1rem',
    marginTop: '1rem',
  },
});

const About = () => {
  const classes = useStyles();
  const aboutRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAboutRef(aboutRef));
  }, [dispatch]);

  return (
    <div className={classes.about}>
      <h1 ref={aboutRef} className={classes.h1}>
        About Me
      </h1>
      <div className={classes.icons}>
        <div class={classes.icon}>
          <i class='fas fa-desktop'></i>
          <p className={classes.iconDesc}>Web Development</p>
        </div>
        <div class={classes.icon}>
          <i class='fas fa-mobile-alt'></i>
          <p className={classes.iconDesc}>Mobile Development</p>
        </div>
        <div class={classes.icon}>
          <i class='fab fa-uikit'></i>
          <p className={classes.iconDesc}>Interactive UI</p>
        </div>
        <div class={classes.icon}>
          <i class='fas fa-user-friends'></i>
          <p className={classes.iconDesc}>Team Lead</p>
        </div>
      </div>
      <Fade left duration={1800}>
        <p className={classes.p}>
          I'm a Full Stack Developer. I can create beautiful, interactive and
          fast user interfaces on Front and backend solutions for your business
          requirements. I can also create cross platform native mobile apps. I
          am an undergrad studying computer science in Nepal. I have worked on
          various projects individually and some in team in various competition
          and projects. I am capable of working in team and changing concepts
          into working applications.
        </p>
      </Fade>
      <div className={classes.profileBtn}>Check My Profile</div>
    </div>
  );
};

export default About;
