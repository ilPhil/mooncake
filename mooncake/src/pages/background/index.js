import {createStore, dispatch, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(rootReducer, applyMiddleware(logger));

wrapStore(store, {
  portName: 'example'
});


chrome.tabs.onActivated.addListener(() => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, data => {
    store.dispatch({
      type: 'GRAB_SITEDATA',
      data
    })
  });
})

chrome.tabs.onUpdated.addListener(() => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, data => {
    store.dispatch({
      type: 'GRAB_SITEDATA',
      data
    })
  });
})

chrome.browserAction.onClicked.addListener(() => {
  store.dispatch({
    type: 'OPEN_TOGGLE',
  })
});
