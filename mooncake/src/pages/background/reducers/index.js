import {combineReducers} from 'redux';

import siteData from './siteData';
import openStatus from './openStatus';

// commentsDefaultState = {
//   "http://codeworks.me/": [
//     {
//       author: 1573839373,
//       comment: 'Super cool!'
//     }
//   ],
//   "http://nytimes.com/dj-died-after-playing-despasito-for-100th-time": [
//     {
//       author: 1573839373,
//       comment: 'God damn!'
//     }
//   ],
// }

export default combineReducers({
  siteData,
  openStatus,
  // comments,
});
