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


const createStore = (reducer) =>
{
  let state;

  const dispatch = (action) =>
  {
    state = reducer(state,action)
    render()
  }

  const getState = () =>
  {
    return state;
  }

  return{
    dispatch,
    getState
  }


}

let store = createStore(candyReducer)
store.dispatch({type: '@@INITIAL'})