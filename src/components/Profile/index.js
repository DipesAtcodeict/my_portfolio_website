import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { grey } from '@material-ui/core/colors';
import { addProfileRef } from '../../actions/ui';
import { Grid, CardMedia } from '@material-ui/core';
import profile from './profile.JPG';
import cv from './dipesh_cv_final.pdf';
import { Fade } from 'react-reveal';

const useStyles = makeStyles({
  profile: {
    color: grey[300],
    textAlign: 'center',
    fontSize: '1.3rem',
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '10px',
    borderRadius: '25px',
    marginBottom: '3rem',
  },
  view: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '20px',
  },
  media: {
    width: '100%',
    height: '27rem',
    borderRadius: '5px',
  },
  education: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '27rem',
  },
  schoolIcon: {
    fontSize: '3rem',
  },
  cvBtn: {
    backgroundColor: '#b07521',
    padding: '10px',
    margin: '0 2rem 0 2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '10px',
  },
});

const Profile = () => {
  const classes = useStyles();
  const profileRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProfileRef(profileRef));
  }, [dispatch]);

  return (
    <div className={classes.profile} ref={profileRef}>
      <h1 className={classes.h1}>Profile</h1>
      <Grid container spacing={1} className={classes.view}>
        <Grid item xs={10} lg={5}>
          <Fade left>
            <CardMedia
              className={classes.media}
              image={profile}
              title='Profile'
            />
          </Fade>
        </Grid>

        <Grid item xs={10} lg={5} className={classes.education}>
          <Fade right>
            <div className={classes.schoolIcon}>
              <i className='fas fa-school'></i>
            </div>
            <h1>Education</h1>
            <div>
              <h3>B.Sc CSIT</h3>
              <p>Himalaya College Of Engineering</p>
            </div>
            <div>
              <h3>+2 HSEB - 65%</h3>
              <p>DAV College </p>
            </div>
            <div>
              <h3>School -89%</h3>
              <p>Mount View English Boarding School</p>
            </div>

            <a className={classes.cvBtn} href={cv} target='blank'>
              Download CV
            </a>
          </Fade>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
