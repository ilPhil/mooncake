import React from 'react';
import {render} from 'react-dom';

import App from './components/app/App';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'example'
});

proxyStore.ready().then(() => {

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)

  render(
     <Provider store={proxyStore}><App /></Provider>
    ,mountNode);
});
