const initialState = {
  flag:true
}

const siteData = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_TOGGLE':
      return {
        flag:!state.flag
      }
    default:
      return state
  }
};

export default siteData
