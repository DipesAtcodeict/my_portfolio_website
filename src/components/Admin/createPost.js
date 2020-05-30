import React from 'react';
import Editor from './Editor';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  editor: {
    backgroundColor: 'white',
    minHeight: '100vh',
  },
  edit: {
    backgroundColor: 'grey',
  },
});

const CreatePost = () => {
  const classes = useStyles();
  return (
    <div className={classes.editor}>
      <Editor />
    </div>
  );
};

export default CreatePost;
