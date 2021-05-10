import React, { useState } from 'react';

import { EditorState, RichUtils } from 'draft-js';
import Editor from '@draft-js-plugins/editor';

import styeld from '@emotion/styled';
import createHighlightPlugin from './highlightPlugin';

const EditorWrap = styeld.div({
  margin: '5rem',
  padding: '2rem',
  border: '5px solid #dcdcdc',
});

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function handleChange(state) {
    setEditorState(state);
  }

  const highlightPlugin = createHighlightPlugin({
    onChange: handleChange,
  });

  function handleToggleCode() {
    handleChange(RichUtils.toggleCode(editorState));
  }

  // function handleKeyCommand(command) {
  //   console.log('command ? ', command);
  //   const newState = RichUtils.handleKeyCommand(editorState, command);

  //   if (newState) {
  //     handleChange(newState);
  //     return 'handled';
  //   }

  //   return 'not-handled';
  // }

  return (
    <EditorWrap>
      <button
        type="button"
        onClick={handleToggleCode}
      >
        Code block

      </button>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        plugins={[highlightPlugin]}
        textAlignment="right"
      />
    </EditorWrap>
  );
}

export default App;
