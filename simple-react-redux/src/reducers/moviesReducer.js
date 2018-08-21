// Action Return Object
const action = {
  type: 'MOVIES_LIST',
  payload: [
    {id: 1, title: 'Phantom Menace'}
  ]
}

// Reducer Finds Match Type
export default (state = {}, action) => {
  switch(action.type) {
    case 'MOVIES_LIST':
      return {...state, movies: action.payload};
      break;

    case 'DIR_LIST':
      return { ...state, directors: action.payload };
      break;

    default:
      return state;
      break;
  }
}
