'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './containers/hello_world.js';

const rootElement = document.getElementById('container');

ReactDOM.render(<HelloWorld />, rootElement);
