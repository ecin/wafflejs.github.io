import heap from './heap';
import normalize from 'normalize.css';
import css from './index.css';

const head = document.createElement('div');
head.innerHTML = `
  <link href="http://fonts.googleapis.com/css?family=PT+Sans|Roboto+Mono:700" rel="stylesheet" type="text/css">
  <meta name="viewport" content="initial-scale=1" />
  <title>WaffleJS</title>
`;
while (head.childNodes.length)
  document.head.appendChild(head.childNodes[0]);

import React from 'react';
import Markdown from './markdown';
import Watchmaker from './watchmaker';

React.render(
  <main>
    <Markdown>{document.querySelector('noscript').innerHTML}</Markdown>
    <Watchmaker />
  </main>,
  document.body
);
