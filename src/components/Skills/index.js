import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import SkillWidget from './widget';
import { Fade } from 'react-reveal';

const useStyles = makeStyles({
  skills: {
    fontSize: '1.3rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    color: grey[300],
    padding: '15px',
  },
  h1: {
    borderBottom: '5px solid tomato',
    display: 'inline-block',
    padding: '25px',
    borderRadius: '25px',
    marginBottom: '3rem',
  },
  widgets: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.skills}>
      <h1 className={classes.h1}>Skills</h1>
      <div className={classes.widgets}>
        <Fade left>
          <SkillWidget name='HTML5' icon='fab fa-html5' level={95} />
        </Fade>
        <Fade top>
          <SkillWidget name='CSS3' icon='fab fa-css3-alt' level={75} />
        </Fade>
        <Fade right>
          <SkillWidget name='Bootstrap' icon='fab fa-bootstrap' level={90} />
        </Fade>
        <Fade left>
          <SkillWidget name='JavaScript' icon='fab fa-js-square' level={90} />
        </Fade>
        <Fade>
          <SkillWidget name='React' icon='fab fa-react' level={85} />
        </Fade>
        <Fade right>
          <SkillWidget name='AngularJS' icon='fab fa-angular' level={60} />
        </Fade>
        <Fade left>
          <SkillWidget name='NodeJS' icon='fab fa-node-js' level={80} />
        </Fade>
        <Fade bottom>
          <SkillWidget name='Python' icon='fab fa-python' level={90} />
        </Fade>
        <Fade right>
          <SkillWidget name='Github' icon='fab fa-github' level={90} />
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
