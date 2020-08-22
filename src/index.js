// write your createStore function here

function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById('container');
  if(store.getState()) {
    container.textContent = store.getState().join(' ')
  } else {
    throw new Error("the store's state has not been defined yet")
  }
};

// use your createStore function and the functions provided here to create a store

function createStore(reducer) {
  let state

  function dispatch(action) {
    state = reducer(state, action)
    // console.log(state)
    return state
  }

  function getState() {
    return state
  }

  return { dispatch, getState }
}

let store = createStore(candyReducer)

// once the store is created, call an initial dispatch

store.dispatch({ type: '@@INIT' })
// console.log( store.getState() )