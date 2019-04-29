function action() {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({ type: 'ACTION' });
    }, 200);
  };
}

function dispatch(action) {
  console.log(action);
}

function thunk(action) {
  action(dispatch);
}

thunk(action());
