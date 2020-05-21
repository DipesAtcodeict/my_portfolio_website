import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import coverImage from './cover.jpg';
import Typist from 'react-typist';
import { Fade } from 'react-reveal';
import { grey } from '@material-ui/core/colors';
import { useDispatch } from 'react-redux';
import { addHomeRef } from '../../actions/ui';

const useStyles = makeStyles({
  introCover: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url(${coverImage})`,
    backgroundPosition: '70% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  introDesc: {
    width: '70vw',
    position: 'relative',
    top: '22%',
    left: '17%',
    padding: '10px 5px',
    color: grey[300],
    backgroundColor: grey[900],
    opacity: 0.8,
    borderRadius: '5px',
  },
  desc: {
    textAlign: 'center',
  },
  line: {
    display: 'inline-block',
    width: '80px',
    height: '10px',
    backgroundColor: '#e67035',
    borderRadius: '5px',
    marginTop: '10px',
  },
  job: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    display: 'block',
    paddingTop: '10px',
  },
  hey: {
    fontFamily: 'Satisfy,cursive',
  },
  socialMedia: {
    margin: '15px',
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2.5rem',
  },
});

const IntroCoverLg = () => {
  const classes = useStyles();
  const homeRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addHomeRef(homeRef));
  }, [dispatch]);

  return (
    <Paper className={classes.introCover} ref={homeRef}>
      <div className={classes.introDesc}>
        <div className={classes.desc}>
          <h2 className={classes.hey}>Hey I Am</h2>
          <h1>Dipesh Chaulagain</h1>
          <span className={classes.line} />
          <Fade left>
            <Typist className={classes.job}>
              <Typist.Delay ms={2000} />
              Full Stack Developer
            </Typist>
          </Fade>
          <Fade delay={2000}>
            <div className={classes.socialMedia}>
              <a href='https://github.com/DipesAtcodeict' target='blank'>
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://www.facebook.com/dipesh.chaulagain.9'
                target='blank'
              >
                <i className='fab fa-facebook'></i>
              </a>
              <a
                href='https://www.instagram.com/dipesh_chaulagain'
                target='blank'
              >
                <i className='fab fa-instagram'></i>
              </a>
              <a href='https://twitter.com/Dipesh91796265' target='blank'>
                <i className='fab fa-twitter'></i>
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </Paper>
  );
};

export default IntroCoverLg;
