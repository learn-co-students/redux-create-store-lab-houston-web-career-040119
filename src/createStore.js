export default function createStore(reducer) {
  let state;

  function getState() {
    if(state) {
      return state;
    } else {
      return reducer(undefined,{type:"@@INIT"});
    }
  }

  function dispatch(action) {
    state = reducer(state,action);
    render();
  }

  return {dispatch, getState};
}

function render() {
  const container = document.getElementById('container');
}
