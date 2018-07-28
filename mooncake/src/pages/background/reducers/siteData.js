
const siteData = (state = {}, action) => {
  switch (action.type) {
    case 'GRAB_SITEDATA':
      return action.data[0]
    default:
      return state
  }
};

export default siteData
