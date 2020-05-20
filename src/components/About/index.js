import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux';
import { addAboutRef } from '../../actions/ui';

const useStyles = makeStyles({
  about: {
    margin: '2rem 2rem 4rem 2rem',
    fontSize: '1.3rem',
    lineHeight: '1.5rem',
    padding: '15px',
    textAlign: 'center',
    color: grey[300],
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '30px',
    borderRadius: '30px',
  },
  p: {
    marginTop: '20px',
    marginBottom: '20px',
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
      <Fade left duration={1800}>
        <p className={classes.p}>
          I'm a Full Stack Developer. I can create beautiful, interactive and
          fast user interfaces on Front and backend solutions for your business
          requirements.I can also create crsoss platform native mobile apps.I am
          an undergrad studying computer science in Nepal. I have worked on
          various projects individually and some in team in various competition
          and projects.
        </p>
      </Fade>
    </div>
  );
};

export default About;
