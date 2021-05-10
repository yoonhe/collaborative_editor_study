/* eslint-disable consistent-return */
import { RichUtils } from 'draft-js';

export default ({ onChange }) => ({
  customStyleMap: {
    HIGHLIGHT: {
      background: '#f7d13b',
      padding: '0 .3em',
    },
    TAB: {
      marginLeft: '1rem',
    },
    UNTAB: {
      marginLeft: '0',
    },
    STRIKE: {
      textDecoration: 'line-through',
    },
  },
  keyBindingFn(e) {
    if (e.metaKey && e.key === 'h') {
      return 'highlight';
    }

    if (e.key === 'Tab') {
      return 'tab';
    }

    if (e.metaKey && e.key === 'Tab') {
      return 'unTab';
    }

    if (e.metaKey && e.key === 's') {
      return 'strike';
    }
  },
  handleKeyCommand(command, editorState) {
    console.log('command ? ', command);
    if (command === 'highlight') {
      onChange(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'));
      return true;
    }

    if (command === 'tab') {
      onChange(RichUtils.toggleInlineStyle(editorState, 'TAB'));
      return true;
    }

    if (command === 'unTab') {
      onChange(RichUtils.toggleInlineStyle(editorState, 'UNTAB'));
      return true;
    }

    if (command === 'strike') {
      onChange(RichUtils.toggleInlineStyle(editorState, 'STRIKE'));
      return true;
    }
  },
});
