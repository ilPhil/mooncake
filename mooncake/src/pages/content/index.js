import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const proxyStore = new Store({portName: 'example'});

const anchor = document.createElement('div');
anchor.id = 'mooncake';

document.body.insertBefore(anchor, document.body.childNodes[0]);

proxyStore.ready().then(() => {
  render(
    <Provider store={proxyStore}>
      <App/>
    </Provider>
   , document.getElementById('mooncake'));
});


// Start consolo.log /
console.log('%c Mooncake is here bitches', 'background: lightGreen; color: white; font-size:40px; display: block;');
