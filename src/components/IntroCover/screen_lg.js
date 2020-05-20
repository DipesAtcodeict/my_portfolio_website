import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import coverImage from './cover.jpg';
import Typist from 'react-typist';
import Flip from 'react-reveal/Flip';
import grey from '@material-ui/core/colors/grey';
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
    width: '40vw',
    height: '25vw',
    position: 'relative',
    top: '35%',
    padding: '10px',
    color: grey[300],
  },
  desc: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  line: {
    display: 'inline-block',
    width: '80px',
    height: '10px',
    backgroundColor: '#e67035',
    borderRadius: '5px',
  },
  job: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    display: 'block',
  },
  hey: {
    fontFamily: 'Satisfy,cursive',
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
      <Flip top>
        <div className={classes.introDesc}>
          <div className={classes.desc}>
            <h2 className={classes.hey}>Hey I Am</h2>
            <h1>Dipesh Chaulagain</h1>
            <span className={classes.line} />
            <Typist className={classes.job}>
              <Typist.Delay ms={2000} />
              Full Stack Developer
            </Typist>
          </div>
        </div>
      </Flip>
    </Paper>
  );
};

export default IntroCoverLg;
