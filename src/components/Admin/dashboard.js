import React from 'react';
import { grey } from '@material-ui/core/colors';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles({
  dashboard: {
    color: grey[300],
    margin: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
  },
  create: {
    alignSelf: 'center',
  },
});

const Dashboard = ({ history }) => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <h1>Welcome Admin</h1>
      <div className={classes.create}>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push('/admin/createPost')}
        >
          Create New Blog
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
