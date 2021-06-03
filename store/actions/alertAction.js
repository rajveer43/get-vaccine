export const setAlert = (data) => dispatch => {
  dispatch({
    type: 'SET_ALERT',
    ...data
  });

  setTimeout(() => dispatch({ type: 'REMOVE_ALERT'}), 3000);
};