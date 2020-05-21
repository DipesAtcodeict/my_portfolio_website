import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useWindowSize from '../../hooks/useWindowSize';

const useStyles = makeStyles({
  widget: {
    width: '22vw',
    fontSize: '5rem',
    margin: '2rem',
  },
  widgetSm: {
    width: '80vw',
    fontSize: '5rem',
    padding: '15px',
    margin: '2rem',
  },
  h1: {
    fontSize: '2rem',
    padding: '5px 5px 15px 5px',
  },
  progress: {
    height: '10px',
    borderRadius: '5px',
    margin: '0 10px 15px 10px',
  },
});

const SkillWidget = ({ name, icon, level }) => {
  const classes = useStyles();
  const [width] = useWindowSize();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted >= level) {
          return level;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 100);
    return () => {
      clearInterval(timer);
    };
  }, [completed, level]);

  return (
    <div className={width > 700 ? classes.widget : classes.widgetSm}>
      <i className={icon}></i>
      <h1 className={classes.h1}>{name}</h1>
      <LinearProgress
        variant='determinate'
        value={completed}
        className={classes.progress}
      />
    </div>
  );
};

export default SkillWidget;
