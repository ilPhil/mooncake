const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_COMMENTS_SUCCESS':
      return action.data;
    default:
      return state;
  }
}
