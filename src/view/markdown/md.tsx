/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import 'md-editor-rt/lib/style.css';
import MdEditor from 'md-editor-rt';

// eslint-disable-next-line no-undef
function MarkDown() {
  const [text, setText] = useState('hello md-editor-rt !');
  return <MdEditor modelValue={text} onChange={setText} />;
}

export default MarkDown;
