import {combineReducers} from 'redux';

import siteData from './siteData';
import openStatus from './openStatus';

export default combineReducers({
  siteData,
  openStatus
});
