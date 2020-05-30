import React, { useRef } from 'react';

import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from './constants';

const Editor = () => {
  const editorRef = useRef();

  const handleSubmit = async () => {
    const value = await editorRef.current.instance.save();
    console.log(value.blocks);
  };

  return (
    <>
      <EditorJs tools={EDITOR_JS_TOOLS} ref={editorRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default Editor;
